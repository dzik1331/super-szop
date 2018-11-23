import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {StorageService} from '../services/storage.service';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {ModalService} from '../modals/modal.service';
import {RoleService} from '../services/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private userRestService: UserService,
              private storageService: StorageService,
              private router: Router,
              private modal: ModalService,
              private roleService: RoleService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login() {
    this.userRestService.login({
      login: this.form.get('login').value,
      password: this.form.get('password').value
    }).subscribe((dataResult: User) => {
        if (dataResult) {
          this.roleService.setRole(dataResult.role)
          this.storageService.add('currentUser', dataResult);
          this.router.navigate(['../shop']);
        }
      },
      (error) => {
        console.error(error);
        this.modal.showMessage('Błąd', 'Niepoprawny login lub hasło.');
      });
  }

}
