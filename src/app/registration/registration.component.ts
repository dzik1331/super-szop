import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  selectRole;
  roles = [];

  constructor(private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit() {

    this.userService.roles().subscribe((result) => {
      this.roles = result;
    });

    this.form = this.fb.group({
      login: [],
      name: [],
      lastName: [],
      password: [],
      confirmPassword: [],
      role: []
    });
  }

  addUser() {
    this.userService.addUser(this.form.value).subscribe();
  }

}
