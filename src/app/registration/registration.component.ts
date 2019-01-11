import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {CustomValidators} from '../custom-validators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  roles = [];
  loaded: boolean = false;
  id: any;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.debug('Route', this.route.snapshot.data['type']);
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.roles().subscribe((result) => {
      this.roles = result;
      if (!!this.id) {
        this.userService.getUser(this.id).subscribe((user) => {
          console.debug('user', user);
          this.initForm(user);
        }, (error) => console.error(error));
      } else {
        this.initForm();
      }
    });

  }

  initForm(data?) {
    if (data) {
      this.form = this.fb.group({
        login: [data.login, [Validators.required]],
        name: [data.name, [Validators.required]],
        lastName: [data.lastName, [Validators.required]],
        role: [this.roles[data.role - 1].id, [Validators.required]]
      });
    } else {
      this.form = this.fb.group({
        login: [null, [Validators.required]],
        name: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required]],
        role: [this.roles[1].id, [Validators.required]]
      }, {validator: CustomValidators.validPassword});
    }
    this.loaded = true;
  }

  addUser() {
    if (!!this.id) {
      this.userService.editUser(this.form.value, this.id).subscribe((result) => {
        if (this.route.snapshot.data['type'] == 'Administration') {
          console.debug('Hej');
          this.router.navigate(['admin/main/users-list']);
        } else {
          this.router.navigate(['../login']);
        }
      });
    } else {
      this.userService.addUser(this.form.value).subscribe((result) => {
        if (this.route.snapshot.data['type'] == 'Administration') {
          console.debug('Hej');
          this.router.navigate(['admin/main/users-list']);
        } else {
          this.router.navigate(['../login']);
        }
      });
    }
  }

}
