import { Component } from '@angular/core';
import { ServiceIndentify } from './extended.service';

@Component({
  selector: 'app-extended',
  templateUrl: './extended.component.html',
  styleUrls: ['./extended.component.css']
})
export class ExtendedComponent {

  constructor(s_Indetify: ServiceIndentify){
    this.myTrim()
    s_Indetify._arguments = this.argument;
  }

  text: String = "int main string \n args \t nono 34 -- \n //   -  908"
  argument: string[] = []

  myTrim(){
    let value = ""
    for(let a in this.text){
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
