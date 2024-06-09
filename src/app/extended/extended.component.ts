import { Component, OnInit } from '@angular/core';
import { ServiceIdentify } from './extended.service';
import { HttpClient } from '@angular/common/http';
import { Conter } from './extended.service';
import { Cont } from './states';
import { Observable, pipe } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-extended',
  templateUrl: './extended.component.html',
  styleUrls: ['./extended.component.css']
})
export class ExtendedComponent implements OnInit{

  contador: Cont = Conter;
  argument: string[] = []
  text: string = ""
  defaultText: string = "int for ( ) { if ( a == 1 ) { return 1 } else { return 0 } = + - * / % } 4..1 "
  httpClient : HttpClient;
  s_Idetify: ServiceIdentify;
  formGroup: FormGroup<any>;

  constructor(s_Idetify: ServiceIdentify, private http: HttpClient, private formBuilder: FormBuilder,){
    this.httpClient = http;
    this.s_Idetify = s_Idetify;
    this.formGroup = this.formBuilder.group({
      text: ['']
    });

  }

  ngOnInit(): void {

    this.argument = [];
    this.s_Idetify.restartCounter();

    this.getTextFile();

    this.formGroup.get('text')?.valueChanges.subscribe(() => {
      this.text = this.formGroup.get('text')?.value;
      this.onTextChange();
    });

  }

  onReset() {
    this.argument = [];
    this.s_Idetify.restartCounter();
    this.getTextFile();
  }

  getTextFileContent(): Observable<string>{
    return this.httpClient.get('assets/text.txt', { responseType: 'text' });
  }

  async getTextFile(): Promise<void> {
    await this.getTextFileContent()
    .subscribe(data => {
      this.text = data;
      this.ejecuteLogic();
    }, error => {
      this.text = this.defaultText;
      this.ejecuteLogic();
    });
  }

  ejecuteLogic(){
    this.myTrim()
    this.s_Idetify._arguments = this.argument;
    this.s_Idetify.identify();
    this.contador = this.s_Idetify.getCounter();
    console.log(this.s_Idetify.getCounter());
  }

  onTextChange(): void {
    // Lógica adicional que deseas ejecutar cuando cambia el texto
    console.log('El texto ha cambiado:', this.text);
    this.argument = [];
    this.s_Idetify.restartCounter();
    this.ejecuteLogic();
  }

  myTrim(){
    let value = ""
    for(let a in this.text as String){
      let char = this.text[a]
      if(char !== " " && char !== "\n" && char !== "\t" && char !== "\0" && char !== "\r" && char !== "\v" && char !== "\f"){
        value += char
        continue
      }

      if(value===""){
        continue
      }

      this.argument.push(value);
      value = ""
    }

    if(value!==""){
      this.argument.push(value)
      value=""
    }

    console.log(this.argument)
  }
}
