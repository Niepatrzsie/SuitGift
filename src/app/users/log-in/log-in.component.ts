import { User } from '../model';

import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;
  user: User;
  isLogged: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  //tu musi poleciec get do bazy danych przez httpClient get, i zwrócić użytkownika o podanym mailu i hasle
  logIn(form: NgForm){
    this.user ={
      id : 1,
      name: 'Adam',
      surname: 'Kowalski',
      email: 'adamKowalski',
      password: 'test',
      birthdate: new Date('6/15/10'),
    };
    if(this.user.email ==="adamKowalski" && this.user.password ==='test'){
      this.isLogged = true;
      console.log(this.isLogged);
    }
    form.resetForm();
  }

}
