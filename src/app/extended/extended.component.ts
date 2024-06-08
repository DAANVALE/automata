import { Component } from '@angular/core';
import { ServiceIdentify } from './extended.service';
import { HttpClient } from '@angular/common/http';
import { Conter } from './extended.service';
import { Cont } from './states';

@Component({
  selector: 'app-extended',
  templateUrl: './extended.component.html',
  styleUrls: ['./extended.component.css']
})
export class ExtendedComponent {

  contador: Cont = Conter;
  argument: string[] = []
  text: string = ""
  httpClient : HttpClient;
  s_Idetify: ServiceIdentify;

  constructor(s_Idetify: ServiceIdentify, private http: HttpClient){
    this.httpClient = http;
    this.s_Idetify = s_Idetify;
  }

  ngOnInit(): void {
    this.restartCounter();
  }



  restartCounter(){
    this.httpClient.get('assets/text.txt', {responseType: 'text'}).subscribe(data => {
      this.text = data;
    }).add(() => {
      this.myTrim()
      this.s_Idetify._arguments = this.argument;
      this.s_Idetify.identify();
      this.contador = this.s_Idetify.getCounter();
      console.log(this.contador)
    });
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
