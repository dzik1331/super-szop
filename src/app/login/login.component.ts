import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {StorageService} from '../services/storage.service';
import {User} from '../models/user';
import {Router} from '@angular/router';

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
              private router: Router) {
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
    }).subscribe((dataResult: { result: User }) => {
        if (dataResult) {
          this.storageService.add('currentUser', dataResult.result);
          this.router.navigate(['../shop']);
        }
      },
      (error) => {
        console.error(error);
      });
  }

}
