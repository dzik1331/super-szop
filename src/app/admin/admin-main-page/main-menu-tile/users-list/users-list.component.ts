import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';

export interface UserFromAdmin {
  id: number;
  name: string;
  lastName: string;
  login: string;
  role: number;
  roleName: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: UserFromAdmin[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe((result) => {
      this.users = result;
    }, (error) => {
      console.error(error);
    });
  }

}
