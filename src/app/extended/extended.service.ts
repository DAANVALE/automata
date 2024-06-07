import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServiceIndentify {

  _arguments!: string[];

  counter: count = {
    a:0,
    b:0,
    c:0,
    d:0
  };

}

enum reservatedWords{
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

export interface count{
  a: number;
  b: number;
  c: number;
  d: number;
}
