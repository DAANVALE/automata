export const Contador = {
  reservedWords: 0,
  identifier: 0,
  relationalOperators : 0,
  logicalOperators : 0,
  arithmeticOperators : 0,
  increment : 0,
  decrement : 0,
  assignment : 0,
  integer : 0,
  decimal : 0,
  string : 0,
  comment : 0,
  lineComment : 0,
  parenthesis : 0,
  brace : 0,
  error: 0,
}

export interface Cont {
  reservedWords: number;
  identifier: number;
  relationalOperators : number;
  logicalOperators : number;
  arithmeticOperators : number;
  increment : number;
  decrement : number;
  assignment : number;
  integer : number;
  decimal : number;
  string : number;
  comment : number;
  lineComment : number;
  parenthesis : number;
  brace : number;
  error: number;
}
