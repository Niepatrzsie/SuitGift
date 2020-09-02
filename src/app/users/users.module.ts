import { UserService } from './user.service';
import { UserResolver } from './user-resolver.service';
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'

const routes: Routes = [
  {path:'register', component: RegisterComponent},
  {path: 'login', component: LogInComponent},
]
@NgModule({
  declarations: [LogInComponent, RegisterComponent, NavBarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
     LogInComponent,
     RegisterComponent
     
  ],
  providers:[ 
    MessageService,
    UserResolver,
    UserService
  ]

  })
export class UsersModule { }
