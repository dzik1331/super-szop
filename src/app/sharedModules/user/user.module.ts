import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from '../../registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidModule} from '../valid/valid.module';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ValidModule,
    NgSelectModule
  ],
  exports: [RegistrationComponent]
})
export class UserModule {
}
