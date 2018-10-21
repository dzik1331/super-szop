import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {ShopComponent} from './shop/shop.component';
import {ProductListComponent} from './shop/product-list/product-list.component';
import {AddProductComponent} from './shop/add-product/add-product.component';
import {LoggedInGuardService} from './services/logged-in-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [LoggedInGuardService],
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'add',
        component: AddProductComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true,
  enableTracing: false
});
