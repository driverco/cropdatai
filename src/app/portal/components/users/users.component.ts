import { Component } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';
import { AddRowDirective } from './users.addRowDirective';

@Component({
  selector: 'portal-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent {
  users!: User[];

  statuses!: SelectItem[];

  clonedUsers: { [s: string]: User } = {};

  constructor(
    private usersService: UsersService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.usersService.getUsers().then((data) => {
      this.users = data;
    });

    this.statuses = [
      { label: 'Usuario', value: 'user' },
      { label: 'Administrador', value: 'admin' },
    ];
  }

  onRowEditInit(user: User) {
    this.clonedUsers[user.username as string] = { ...user };
  }

  onRowEditSave(user: User) {
    if (user.username !== undefined) {
      if (user.fullname !== undefined) {
        delete this.clonedUsers[user.username as string];
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'user is updated',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid username',
        });
      }
    }
  }

  onRowEditCancel(user: User, index: number) {
    this.users[index] = this.clonedUsers[user.username as string];
    delete this.clonedUsers[user.username as string];
  }

  newRow(){
    return {"username":"", "fullname":"", "role":"user","password":""};
  }
}
