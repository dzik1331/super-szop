import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValidationInfoDirective} from '../../directives/validation-info.directive';

@NgModule({
  declarations: [
    ValidationInfoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ValidationInfoDirective]
})
export class ValidModule {
}
