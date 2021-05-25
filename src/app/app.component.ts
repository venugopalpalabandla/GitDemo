import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SampleApp';
firstName:string="Ranjith";
lastName:string="Paleti";
age:number=29;
receiveNewsLetter:boolean=true;
gender:string="male";
country:string="india";
address:string="https://www.facebook.com";
changeData(){

this.firstName="Kumar";
this.lastName="Jhon";
this.age=33;
this.receiveNewsLetter=false;
this.gender="male";
this.country="US";
this.address="https://mail.google.com/";

}

}
