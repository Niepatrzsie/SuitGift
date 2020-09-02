import { Config } from './model';
import { UsersModule } from './users/users.module';
import { RouterModule, Routes} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

const config: Config = {
  customerLimit: 10,
  apiUrl:'localhost:63631/api/users'
}
const routes: Routes = [
  {path: 'register', loadChildren: 'app/users/users.module#UsersModule'},
  {path: '' , redirectTo: 'login', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
