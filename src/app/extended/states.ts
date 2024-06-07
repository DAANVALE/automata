enum reservedWords {
  "if",
  "main",
  "else",
  "switch",
  "case",
  "default",
  "for",
  "do",
  "while",
  "break",
  "int",
  "String",
  "double",
  "char",
  "print"
}

enum relationalOperators {"<", "<=", ">", ">=", "==", "!="};
enum logicalOperators {"&&", "||", "!"};
enum arithmeticOperators {"+", "-", "*", "/", "%"};
enum increment {"++"};
enum decrement {"--"};
enum assignment {"="};

export interface Token {
  type: TokenType;
  value: string;
}

export interface TokenError {
  type: TokenType;
  value: string;
  error: string;
}

interface TokenType{
  RESERVED_WORD: reservedWords,
  IDENTIFIER: string,
  RELATIONAL_OPERATOR: relationalOperators,
  LOGICAL_OPERATOR: logicalOperators,
  ARITHMETIC_OPERATOR: arithmeticOperators,
  INCREMENT: increment,
  DECREMENT: decrement,
  ASSIGNMENT: assignment,
  INTEGER: number,
  DECIMAL: number,
  STRING: string,
  COMMENT: "",
  LINE_COMMENT: "",
  PARENTHESIS: "",
  BRACE: "",
  ERROR: 0,
}
