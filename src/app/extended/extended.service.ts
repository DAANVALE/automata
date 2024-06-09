import { Injectable } from '@angular/core';
import { Cont } from './states';
@Injectable({providedIn: 'root'})
export class ServiceIdentify {

  _arguments!: string[];

  constructor(){
    restartCounter();
  }

  restartCounter(){
    restartCounter();
  }

  identify(): void{
    for(let a in this._arguments){
      var identified = identify(this._arguments[a])
      if(!identified){
        Conter.error++;
      }

    }
  }

  getCounter(): Cont{
    return Conter;
  }

}

function identify(cadena: string): boolean{

  if(reservadas.includes(cadena)){
    Conter.reservedWords++;
    return true;
  }

  let char = cadena[0] as string;
  cadena = cadena.substring(1);

  switch(char){
    case returnLetter(char):{
      return identifyIdentifier(cadena);
    }
    case "<": case ">":{
      return identifyRelationalOperators_1(cadena);
    }
    case "=":{
      return identifyAssignment(cadena);
    }
    case "!":{
      return identifyLogicalOperatiors_1(cadena)
    }
    case "&": case "|":{
      return identifyLogicalOperators_2(cadena, char);
    }
    case "*": case "%":{
      return identifyArithmeticOperators_2(cadena);
    }
    case "{": case "}":{
      return identifybrace(cadena);
    }
    case "(":
    case ")":{
      return identifyParenthesis(cadena);
    }
    case returnNumber(char): {
      return identifyInteger(cadena);
    }
    case ".":{
      return identifyAlmostDecimal(cadena);
    }
    case "+":{
      return identifyArithmeticOperators_sum(cadena);
    }
    case "-":{
      return identifyArithmeticOperators_sub(cadena);
    }
    case "/":{
      return identifyArithmeticOperators_1(cadena);
    }
    case '"':{
      return identifyString(cadena);
    }
  }
  return false;
}

export const reservadas = [
  "if", "main", "else",
  "switch", "case", "default",
  "for", "do", "while",
  "break", "int", "String",
  "double", "char", "print"
];

export const letters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "k", "r", "s", "t",
  "u","v", "w", "x", "y", "z", "_", "ñ"
];

export const numbers = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]

function returnLetter(char: string){
  if(letters.includes(char.toLowerCase())){
    return char;
  }else{
    return "a";
  }
}

function returnNumber(char: string){
  if(numbers.includes(char)){
    return char;
  }else{
    return "0";
  }
}

function identifyInteger(cadena: string){
  if (cadena.length === 0) {
    Conter.integer++;
    return true;
  }

  for (let i = 0; i < cadena.length; i++) {
    if(cadena[i] === "."){
      return identifyAlmostDecimal(cadena.substring(i+1));
    }else if (!numbers.includes(cadena[i])) {
      return false;
    }
  }

  Conter.integer++;
  return true
}

function identifyAlmostDecimal(cadena: string){
  if (cadena.length === 0) {
    Conter.integer++;
    return true;
  }

  for(var i = 0; i < cadena.length; i++){
    if(!numbers.includes(cadena[i])){
      return false;
    }

    if(cadena[i] !== "0"){
      return identifyDecimal(cadena.substring(i+1));
    }
  }

  Conter.integer++;
  return true;
}

function identifyDecimal(cadena: string){
  if (cadena.length === 0) {
    Conter.decimal++;
    return true;
  }

  for (let i = 0; i < cadena.length; i++) {
    if (!numbers.includes(cadena[i])) {
        return false;
    }
  }

  Conter.decimal++;
  return true
}

function identifyIdentifier(cadena: string): boolean{

  if (cadena.length === 0) {
    Conter.identifier++;
    return true;
  }

  var char = cadena[0];
  cadena = cadena.substring(1);

  if(!letters.includes(char) && !numbers.includes(char)){
    return false;
  }

  return identifyIdentifier(cadena);
}

function identifyRelationalOperators_1(cadena: string){
  if (cadena.length === 0) {
    Conter.relationalOperators++;
    return true;
  }

  let char = cadena[0];
  cadena = cadena.substring(1);
  if(char === "="){
    return identifyRelationalOperators_2(cadena);
  }

  return false;
}

function identifyRelationalOperators_2(cadena: string){
  if (cadena.length === 0) {
    Conter.relationalOperators++;
    return true;
  }

  return false;
}

function identifyAssignment(cadena: string){
  if (cadena.length === 0) {
    Conter.assignment++;
    return true;
  }

  var char = cadena[0];
  cadena = cadena.substring(1);
  if( char === "="){
    return identifyRelationalOperators_2(cadena);
  }

  return false;
}

function identifyLogicalOperatiors_1(cadena: string){
  if (cadena.length === 0) {
    Conter.logicalOperators++;
    return true;
  }

  var char = cadena[0];
  cadena = cadena.substring(1);

  if (char === "="){
    return identifyRelationalOperators_2(cadena);
  }

  return false
}

function identifyLogicalOperators_2(cadena: string, evaluate: string){
  if (cadena.length === 0) {
    return false;
  }

  var char = cadena[0];
  cadena = cadena.substring(1);
  if(char !== evaluate){
    return false;
  }

  if (cadena.length === 0) {
    Conter.logicalOperators++;
    return true;
  }

  return false;
}

function identifyArithmeticOperators_sum(cadena: string){
  if (cadena.length === 0) {
    Conter.arithmeticOperators++;
    return true;
  }

  var char = cadena[0];
  cadena = cadena.substring(1);
  if(char === "+"){
    return identifyIncrement(cadena);
  }

  if(numbers.includes(char)){
    return identifyInteger(cadena);
  }

  if(char === "."){
    return identifyAlmostDecimal(cadena);
  }

  return false;
}

function identifyIncrement(cadena: string){
  if (cadena.length === 0) {
    Conter.increment++;
    return true;
  }

  return false;
}

function identifyArithmeticOperators_sub(cadena: string){
  if (cadena.length === 0) {
    Conter.arithmeticOperators++;
    return true;
  }

  var char = cadena[0];
  cadena = cadena.substring(1);
  if(char === "-"){
    return identifyDecrement(cadena);
  }

  if(numbers.includes(char)){
    return identifyInteger(cadena);
  }

  if(char === "."){
    return identifyAlmostDecimal(cadena);
  }

  return false;
}

function identifyDecrement(cadena: string){
  if (cadena.length === 0) {
    Conter.decrement++;
    return true;
  }

  return false;
}

function identifyArithmeticOperators_2(cadena: string){
  if (cadena.length === 0) {
    Conter.arithmeticOperators++;
    return true;
  }

  return false;
}

function identifyArithmeticOperators_1(cadena: string){
  if (cadena.length === 0) {
    Conter.arithmeticOperators++;
    return true;
  }

  var char = cadena[0];
  cadena = cadena.substring(1);
  if(char === "/"){
    Conter.lineComment++;
    return true;
  }

  if(char === "*"){
    return identifyExtendComment(cadena);
  }

  return false;
}

function identifyExtendComment(cadena: string): boolean{
  if (cadena.length === 0) {
    return false;
  }

  var char = cadena[0];
  cadena = cadena.substring(1);
  if(char === "*"){
    return identifyEndComment(cadena);
  }

  return identifyExtendComment(cadena);
}

function identifyEndComment(cadena: string): boolean{
  if (cadena.length === 0) {
    return false;
  }

  var char = cadena[0];
  cadena = cadena.substring(1);
  if(char !== "/"){
    return identifyExtendComment(cadena);
  }

  if (cadena.length !== 0) {
    return false;
  }

  Conter.comment++;
  return true;
}

// "
function identifyString(cadena: string){
  if (cadena.length === 0) {
    return false;
  }

  var char = cadena[0];
  cadena = cadena.substring(1);
  if(char === '"'){
    return identifyEndString(cadena);
  }

  return identifyString(cadena);
}

function identifyEndString(cadena: string){
  if (cadena.length === 0) {
    Conter.string++;
    return true;
  }

  return false;

}

function identifybrace(cadena: string){
  if (cadena.length === 0) {
    Conter.brace++;
    return true;
  }

  return false;
}

function identifyParenthesis(cadena: string){
  if (cadena.length === 0) {
    Conter.parenthesis++;
    return true;
  }

  return false;
}

export const Conter: Cont = {
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

function restartCounter(){
  Conter.reservedWords = 0;
  Conter.identifier = 0;
  Conter.relationalOperators = 0;
  Conter.logicalOperators = 0;
  Conter.arithmeticOperators = 0;
  Conter.increment = 0;
  Conter.decrement = 0;
  Conter.assignment = 0;
  Conter.integer = 0;
  Conter.decimal = 0;
  Conter.string = 0;
  Conter.comment = 0;
  Conter.lineComment = 0;
  Conter.parenthesis = 0;
  Conter.brace = 0;
  Conter.error = 0;
}
