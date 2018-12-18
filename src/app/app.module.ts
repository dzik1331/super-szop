import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AppRouting} from './app.routing';
import {UserService} from './services/user.service';
import {StorageService} from './services/storage.service';
import {ProductListComponent} from './shop/product-list/product-list.component';
import {ShopComponent} from './shop/shop.component';
import {ProductService} from './services/product.service';
import {ProductRowComponent} from './shop/product-list/product-row/product-row.component';
import {ProductComponent} from './shop/product-list/product/product.component';
import {AddProductComponent} from './shop/add-product/add-product.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {UserInfoComponent} from './shop/user-info/user-info.component';
import {LoggedInGuardService} from './services/logged-in-guard.service';
import {BasketComponent} from './shop/basket/basket.component';
import {RegistrationComponent} from './registration/registration.component';
import {ModalService} from './modals/modal.service';
import {ModalModule} from 'ngx-bootstrap';
import {MessageModalComponent} from './modals/message-modal/message-modal.component';
import {ValidationInfoDirective} from './directives/validation-info.directive';
import {RoleService} from './services/role.service';
import {InterceptorService} from './services/interceptor';
import {NgxUploaderModule} from 'ngx-uploader';
import { BasketTotalPriceComponent } from './shop/basket/basket-total-price/basket-total-price.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ShopComponent,
    ProductRowComponent,
    ProductComponent,
    AddProductComponent,
    UserInfoComponent,
    BasketComponent,
    RegistrationComponent,
    MessageModalComponent,
    ValidationInfoDirective,
    BasketTotalPriceComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    ModalModule.forRoot(),
    NgxUploaderModule
  ],
  providers: [
    UserService,
    StorageService,
    ProductService,
    LoggedInGuardService,
    ModalService,
    RoleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  entryComponents: [MessageModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
