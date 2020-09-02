import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { User } from './model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | import("rxjs").Observable<User> | Promise<User> {
    const email = route.params['email'];
    return this.userService.getUser(email);
  }
  
}
