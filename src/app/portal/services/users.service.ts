import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  getUsersData() {
    return [
      {
        username: 'crops',
        fullname: 'Usuario normal',
        password: 'crops',
        role: 'user',
      },
      {
        username: 'super',
        fullname: 'Usuario Administrador',
        password: 'super',
        role: 'admin',
      },
    ];
  }

  getUsers() {
    return Promise.resolve(this.getUsersData());
  }
}
