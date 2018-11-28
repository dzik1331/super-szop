import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {CustomValidators} from '../custom-validators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  roles = [];
  loaded: boolean = false;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {

    this.userService.roles().subscribe((result) => {
      this.roles = result;
      this.form = this.fb.group({
        login: [null, [Validators.required]],
        name: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required]],
        role: [this.roles[1].id, [Validators.required]]
      }, {validator: CustomValidators.validPassword});
      this.loaded = true;
    });

  }

  addUser() {
    this.userService.addUser(this.form.value).subscribe((result) => {
      this.router.navigate(['../login']);
    });
  }

}
