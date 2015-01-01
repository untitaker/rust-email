//! Module for dealing with RFC2045 style headers.
use super::rfc5322::Rfc5322Parser;

use std::borrow::ToOwned;
use std::collections::HashMap;

/// Parser over RFC 2045 style headers.
///
/// Things of the style `value; param1=foo; param2="bar"`
#[stable]
pub struct Rfc2045Parser<'s> {
    parser: Rfc5322Parser<'s>,
}

#[stable]
impl<'s> Rfc2045Parser<'s> {
    /// Create a new parser over `s`
    #[stable]
    pub fn new(s: &str) -> Rfc2045Parser {
        Rfc2045Parser {
            parser: Rfc5322Parser::new(s)
        }
    }

    fn consume_token(&mut self) -> Option<&str> {
        let token = self.parser.consume_while(|c| {
            match c {
                // Not any tspecials
                '(' | ')' | '<' | '>' | '@' | ',' | ';' | ':' |
                    '\\' | '\"' | '/' | '[' | ']' | '?' | '=' => false,
                '!'...'~' => true,
                _ => false,
            }
        });

        if token.len() > 0 {
            Some(token)
        } else {
            None
        }
    }

    /// Consume up to all of the input into the value and a hashmap
    /// over parameters to values.
    #[stable]
    pub fn consume_all(&mut self) -> (String, HashMap<String, String>) {
        let value = self.parser.consume_while(|c| { c != ';' }).to_string();

        // Find the parameters
        let mut params = HashMap::new();
        while !self.parser.eof() {
            // Eat the ; and any whitespace
            self.parser.consume_linear_whitespace();
            match self.parser.consume_char() {
                Some(';') => {},
                None => break,
                _ => break  // TODO: Report error (unused trailing characters)
            }
            self.parser.consume_linear_whitespace();

            let attribute = self.consume_token().map(ToOwned::to_owned);

            match self.parser.consume_char() {
                Some('=') => {},
                None => break,
                _ => break  // TODO: Report error (not a token)
            }
            // Value can be token or quoted-string
            let value = if self.parser.peek() == Some('"') {
                self.parser.consume_quoted_string()
            } else {
                self.consume_token().map(ToOwned::to_owned)
            };

            match (attribute, value) {
                (Some(attrib), Some(val)) => {
                    params.insert(attrib, val);
                },
                _ => {}  // TODO: Report error (attr was not token or value was not token/quoted)
            }
        }

        (value, params)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use std::collections::HashMap;

    struct ParserTestCase<'s> {
        input: &'s str,
        output: (&'s str, Vec<(&'s str, &'s str)>),
        name: &'s str,
    }

    #[test]
    pub fn test_foo() {
        let tests = vec![
            ParserTestCase {
                input: "foo/bar",
                output: ("foo/bar", vec![]),
                name: "Basic value",
            },

            ParserTestCase {
                input: "foo/bar; foo=bar",
                output: ("foo/bar", vec![
                    ("foo", "bar"),
                ]),
                name: "Basic value with parameter",
            },

            ParserTestCase {
                input: "foo/bar; foo=\"bar\"",
                output: ("foo/bar", vec![
                    ("foo", "bar"),
                ]),
                name: "Basic value with quoted parameter",
            },

            ParserTestCase {
                input: "foo/bar; foo=\"bar\"; baz=qux",
                output: ("foo/bar", vec![
                    ("foo", "bar"),
                    ("baz", "qux"),
                ]),
                name: "Multiple values",
            },

            ParserTestCase {
                input: "foo/bar; foo=bar; ",
                output: ("foo/bar", vec![
                    ("foo", "bar"),
                ]),
                name: "Basic value with trailing separator",
            },
        ];

        for test in tests.into_iter() {
            let (expected_value, expected_param_list) = test.output;
            let mut expected_params = HashMap::new();
            for &(param_name, param_value) in expected_param_list.iter() {
                expected_params.insert(param_name.to_string(), param_value.to_string());
            }

            let mut parser = Rfc2045Parser::new(test.input);
            let (value, parameters) = parser.consume_all();

            assert!(value == expected_value.to_string(), test.name);
            assert!(parameters == expected_params, test.name);
        }
    }
}
