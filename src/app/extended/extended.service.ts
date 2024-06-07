import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServiceIdentify {

  _arguments!: string[];

  constructor(){
    restartCounter();
  }

  identify(): void{
    for(let a in this._arguments){
      identify(this._arguments[a]);
    }
  }

}

function identify(cadena: string){

  if(reservadas.includes(cadena)){
    Conter.reservedWords++;
    return;
  }

  if(identifyIdentifier(cadena)){
    return;
  }

  if(identifyRelationalOperators_1(cadena)){
    return;
  }

  Conter.error++;
}

export const reservadas = [
  "if", "main", "else",
  "switch", "case", "default",
  "for", "do", "while",
  "break", "int", "String",
  "double", "char", "print"
];

function identifyIdentifier(cadena: string){
  if (cadena.length === 0) {
    return false;
  }

  // Verificar el primer carácter
  if (!cadena[0].match(/^[a-zA-Z_]$/)) {
      return false;
  }

  // Verificar los caracteres restantes
  for (let i = 1; i < cadena.length; i++) {
      if (!cadena[i].match(/^[a-zA-Z0-9_]$/)) {
          return false;
      }
  }

  Conter.identifier++;
  return true;
}

function identifyRelationalOperators_1(cadena: string){
  let char = cadena[0];
  cadena = cadena.substring(1);
  if(char !== "<" && char !== ">"){
    return false;
  }

  // Verificar los caracteres restantes
  if(cadena.length === 0){
    Conter.relationalOperators++;
    return true;
  }

  return identifyRelationalOperators_2(cadena);
}

function identifyRelationalOperators_2(cadena: string){
  let char = cadena[0];
  cadena = cadena.substring(1);
  if(char !== "="){
    return false;
  }

  // Verificar los caracteres restantes
  if(cadena.length === 0){
    Conter.relationalOperators++;
    return true;
  }

  return false;
}

function identifyAssignment(cadena: string){
  let char = cadena[0];
  cadena = cadena.substring(1);
  if(char !== "="){
    return false;
  }

  if(cadena.length === 0){
    Conter.assignment++;
    return true;
  }

  return identifyRelationalOperators_2(cadena);
}

function identifyLogic_1(cadena: string){
  let char = cadena[0];
  cadena = cadena.substring(1);
  if(char !== "!"){
    return false;
  }

  // Verificar los caracteres restantes
  if(cadena.length === 0){
    Conter.logicalOperators++;
    return true;
  }

  return identifyRelationalOperators_2(cadena);
}

function identifyLogic_2(cadena: string){

}

export const Conter = {
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
