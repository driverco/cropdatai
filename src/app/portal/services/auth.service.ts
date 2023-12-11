import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UsersService } from './users.service';
import { User } from '../models/User';

@Injectable()
export class AuthService {
  private authenticatedSource = new Subject<boolean>();

  authenticated$ = this.authenticatedSource.asObservable();

  constructor(private usersService: UsersService) {}

  isAuthenticated() {
    if (localStorage.getItem('username')) {
      if (localStorage.getItem('username')!.length > 0) {
        return true;
      }
    }
    return false;
  }
  isAdmin() {
    if (localStorage.getItem('role')) {
      if (localStorage.getItem('role') === 'admin') {
        return true;
      }
    }
    return false;
  }

  authenticate(userName: String, passWord: String) {
    var users: User[];
    this.usersService.getUsers().then((data) => {
      users = data;
      let user = users!.filter(function (user: User) {
        return user.username === userName, user.password === passWord;
      });

      if (user.length > 0) {
        localStorage.setItem('username', user[0].username!);
        localStorage.setItem('role', user[0].role!);
        this.authenticatedSource.next(true);
        return true;
      }
      return false;
    });

    return false;
  }
  signout() {
    this.authenticatedSource.next(false);
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }
}
