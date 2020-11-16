import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {

  placeholders = {
    username:'introduce tu usuario',
    password:'introduce tu password'
  }
  receivedName:string = '';
  receivedPassword:string = '';

  constructor() { }

  recibirDatos(user, password){
    this.receivedName = user.value;
    this.receivedPassword = password.value;
  }

  ngOnInit(): void {
  }

}
