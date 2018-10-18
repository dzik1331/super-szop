import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ShopComponent,
    ProductRowComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [
    UserService,
    StorageService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
