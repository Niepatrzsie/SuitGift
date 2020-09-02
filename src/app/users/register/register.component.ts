import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgForm } from '@angular/forms';
import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 name: string;
 surname: string;
 birthdate: Date;
 email: string;
 password: string;
  constructor(private userService: UserService,  private messageService: MessageService) { }

  ngOnInit(): void {
  }
  add(form: NgForm){
    this.userService.createUser({
      name: this.name,
      surname: this.surname,
      birthdate: this.birthdate,
      email: this.email,
      password: this.password
    }).subscribe( 
      () => {
        this.messageService.success("Dane zostały poprawnie wypełnione");
        form.resetForm();
      }
    )
  }
}
