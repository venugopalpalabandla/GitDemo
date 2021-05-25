import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SampleApp';
  userName:string="";
  password:string="";
  confirmPassword:string='';
  acceptlicenceagreement:boolean=false;
  gender:string='';
  country:string='';
  msg:string="";
  checkLogin(){
   
      this.msg="userName:"+this.userName+ '<break>Password:'+this.password+'<br>confirmpassword:'+this.confirmPassword+
      "<br>acceptlicenceagreement"+this.acceptlicenceagreement+"<br>gender"+this.gender+"<br>country"+this.country;
    
  
  }

}
