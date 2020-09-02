import { User } from './/model';
import { CONFIG,Config } from './../model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient:HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }
    getUser(email: string){
      return this.httpClient.get<User>(`${this.config.apiUrl}/login/${email}`)
    }
   createUser(user: User){
    return this.httpClient.post<User>(`${this.config.apiUrl}/register`, user)
   }
}
