var searchIndex = {};
searchIndex['email'] = {"items":[[0,"","email",""],[3,"Header","","Represents an RFC 822 Header"],[12,"name","","The name of this header",0],[3,"HeaderMap","","A collection of Headers"],[3,"HeaderIter","",""],[3,"MimeMessage","","Represents a MIME message"],[12,"headers","","The headers for this message",1],[12,"body","","The content of this message",1],[12,"message_type","","The MIME multipart message type of this message, or `None` if the message\nis not a multipart message.",1],[12,"children","","The sub-messages of this message",1],[12,"boundary","","The boundary used for MIME multipart messages",1],[4,"Address","","Represents an RFC 5322 Address"],[13,"Mailbox","","A \"regular\" email address",2],[13,"Group","","A named group of mailboxes",2],[4,"MimeMultipartType","","Marks the type of a multipart message"],[13,"Mixed","","Entries which are independent.",3],[13,"Alternate","","Entries which are interchangeable, such that the system can choose\nwhichever is \"best\" for its use.",3],[13,"Digest","","Entries are (typically) a collection of messages.",3],[13,"Parallel","","Entry order does not matter, and could be displayed simultaneously.",3],[0,"rfc5322","","Module with helpers for dealing with RFC 5322"],[3,"Rfc5322Parser","email::rfc5322","RFC 5322 base parser for parsing\n `atom`, `dot-atom`, `quoted-string`, `phrase`, `message`"],[3,"Rfc5322Builder","","Type for constructing RFC 5322 messages"],[17,"MIME_LINE_LENGTH","",""],[11,"new","","Make a new parser, initialized with the given string.",4],[11,"push_position","","Push the current position onto the stack.",4],[11,"pop_position","","Move the position back to the last entry pushed",4],[11,"consume_message","","Consume a message from the input.",4],[11,"consume_header","","Consume a header from the input.",4],[11,"consume_unstructured","","Consume an unstructured from the input.",4],[11,"consume_folding_whitespace","","Consume folding whitespace.",4],[11,"consume_word","","Consume a word from the input.",4],[11,"consume_phrase","","Consume a phrase from the input.",4],[11,"consume_quoted_string","","Consume a quoted string from the input",4],[11,"consume_atom","","Consume an atom from the input.",4],[11,"consume_linear_whitespace","","Consume LWSP (Linear whitespace)",4],[11,"consume_char","","Consume a single character from the input.",4],[11,"consume_linebreak","","",4],[11,"peek_linebreak","","",4],[11,"consume_while","","Consume a set of characters, each passed to `test` until this function\nreturns false.",4],[11,"peek","","Peek at the current character.",4],[11,"eof","","Returns true if we have reached the end of the input.",4],[11,"new","","Make a new builder, with an empty string",5],[11,"result","","",5],[11,"emit_raw","","",5],[11,"emit_folded","","",5],[0,"rfc2047","email","Module for decoding RFC 2047 strings"],[5,"decode_rfc2047","email::rfc2047","Decode an RFC 2047 string (`s`) into a Rust String."],[5,"decode_q_encoding","",""],[0,"rfc2045","email","Module for dealing with RFC2045 style headers."],[3,"Rfc2045Parser","email::rfc2045","Parser over RFC 2045 style headers."],[11,"new","","Create a new parser over `s`",6],[11,"consume_all","","Consume up to all of the input into the value and a hashmap\nover parameters to values.",6],[0,"rfc822","email",""],[3,"Rfc822DateParser","email::rfc822","Parser for RFC822 style dates, as defined by Section 5."],[11,"new","","",7],[11,"consume_datetime","","Consume a DateTime from the input.",7],[0,"mimeheaders","email",""],[3,"MimeContentTypeHeader","email::mimeheaders","Special header type for the Content-Type header."],[12,"content_type","","The content type presented by this header",8],[12,"params","","Parameters of this header",8],[4,"MimeContentTransferEncoding","","Special header type for the Content-Transfer-Encoding header."],[13,"Identity","","Message content is not encoded in any way.",9],[13,"QuotedPrintable","","Content transfered using the quoted-printable encoding.",9],[13,"Base64","","Content transfered as BASE64",9],[6,"MimeContentType","","Content-Type string, major/minor as the first and second elements\nrespectively."],[11,"from_header","","",8],[11,"to_header","","",8],[11,"eq","","",9],[11,"ne","","",9],[11,"fmt","","",9],[11,"decode","","Decode the input string with this transfer encoding.",9],[11,"from_header","","",9],[11,"from_header","collections::string","",10],[11,"from_header","chrono::datetime","",11],[11,"from_header","","",11],[11,"to_header","collections::string","",10],[11,"hash","email","",0],[11,"clone","","",0],[11,"eq","","",0],[11,"ne","","",0],[11,"new","","Creates a new Header for the given `name` and `value`",0],[11,"new_with_value","","Creates a new Header for the given `name` and `value`,\nas converted through the `ToHeader` or `ToFoldedHeader` trait.",0],[11,"get_value","","Get the value represented by this header, as parsed\ninto whichever type `T`",0],[11,"fmt","","",0],[11,"next","","",12],[11,"eq","","",13],[11,"ne","","",13],[11,"new","","",13],[11,"insert","","Adds a header to the collection",13],[11,"iter","","Get an Iterator over the collection of headers.",13],[11,"get","","Get the last value of the header with `name`",13],[11,"get_value","","Get the last value of the header with `name`, as a decoded type.",13],[11,"len","","Get the number of headers within this map.",13],[11,"find","","Find a list of headers of `name`, `None` if there\nare no headers with that name.",13],[11,"fmt","","",2],[11,"eq","","",2],[11,"ne","","",2],[11,"new_mailbox","","Shortcut function to make a new Mailbox with the given address",2],[11,"new_mailbox_with_name","","Shortcut function to make a new Mailbox with the address and given-name",2],[11,"new_group","","Shortcut function to make a new Group with a collection of mailboxes",2],[11,"fmt","","",2],[11,"from_header","collections::vec","",14],[11,"to_folded_header","","",14],[11,"fmt","email","",3],[11,"eq","","",3],[11,"ne","","",3],[11,"from_content_type","","Returns the appropriate `MimeMultipartType` for the given MimeContentType",3],[11,"to_content_type","","Returns a MimeContentType that represents this multipart type.",3],[11,"new","","",1],[11,"new_with_children","","",1],[11,"new_with_boundary","","",1],[11,"new_blank_message","","",1],[11,"update_headers","","Update the headers on this message based on the internal state.",1],[11,"parse","","Parse `s` into a MimeMessage.",1],[11,"as_string","","",1],[11,"decoded_body_bytes","","Decode the body of this message, as a series of bytes",1],[11,"decoded_body_string","","Decode the body of this message, as a string.",1],[8,"FromHeader","","Trait for converting from RFC822 Header values into\nRust types."],[10,"from_header","","Parse the `value` of the header.",15],[8,"ToHeader","","Trait for converting from a Rust type into a Header value."],[10,"to_header","","Turn the `value` into a String suitable for being used in\na message header.",16],[8,"ToFoldedHeader","","Trait for converting from a Rust time into a Header value\nthat handles its own folding."],[10,"to_folded_header","","",17]],"paths":[[3,"Header"],[3,"MimeMessage"],[4,"Address"],[4,"MimeMultipartType"],[3,"Rfc5322Parser"],[3,"Rfc5322Builder"],[3,"Rfc2045Parser"],[3,"Rfc822DateParser"],[3,"MimeContentTypeHeader"],[4,"MimeContentTransferEncoding"],[3,"String"],[3,"DateTime"],[3,"HeaderIter"],[3,"HeaderMap"],[3,"Vec"],[8,"FromHeader"],[8,"ToHeader"],[8,"ToFoldedHeader"]]};
initSearch(searchIndex);