import { Component } from '@angular/core';
import { ServiceIdentify } from './extended.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-extended',
  templateUrl: './extended.component.html',
  styleUrls: ['./extended.component.css']
})
export class ExtendedComponent {

  constructor(s_Idetify: ServiceIdentify, http: HttpClient){
    this.myTrim()
    s_Idetify._arguments = this.argument;
    s_Idetify.identify();
  }

  text: string = "int main string \n args \t nono 34 -- \n //   -  908"
  argument: string[] = []

  myTrim(){
    let value = ""
    for(let a in this.text as String){
      let char = this.text[a]
      if(char !== " " && char !== "\n" && char !== "\t" && char !== "\0"){
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
