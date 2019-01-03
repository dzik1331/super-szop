import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {ModalService} from '../../../../modals/modal.service';

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

  constructor(private userService: UserService,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe((result) => {
      this.users = result;
    }, (error) => {
      console.error(error);
    });
  }

  deleteUser(id) {
    const sub = this.modalService.showConfirm('Czy jesteś pewien, że chcesz usunąć tego użytkownika?').content.confirm.subscribe((confirm) => {
      if (confirm) {
        this.userService.deleteUser(id).subscribe(() => {
            sub.unsubscribe();
            this.ngOnInit();
          },
          (error) => {
            console.error(error);
          });
      }
    });
  }

}
