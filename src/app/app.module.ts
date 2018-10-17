import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AppRouting} from './app.routing';
import {UserService} from './services/user.service';
import {StorageService} from './services/storage.service';
import {ProductListComponent} from './product-list/product-list.component';
import {ShopComponent} from './shop/shop.component';
import {ProductService} from './services/product.service';
import { ProductRowComponent } from './product-list/product-row/product-row.component';
import { ProductComponent } from './product-list/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ShopComponent,
    ProductRowComponent,
    ProductComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    StorageService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
