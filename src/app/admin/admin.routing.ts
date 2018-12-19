import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AdminMainPageComponent} from './admin-main-page/admin-main-page.component';
import {MainMenuTileComponent} from './admin-main-page/main-menu-tile/main-menu-tile.component';
import {UsersListComponent} from './admin-main-page/main-menu-tile/users-list/users-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: AdminMainPageComponent,
    children: [
      {
        path: '',
        component: MainMenuTileComponent
      },
      {
        path: 'users-list',
        component: UsersListComponent
      }
    ]
  }
];

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(routes);
