import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminMainPageComponent} from './admin-main-page/admin-main-page.component';
import {AdminRouting} from './admin.routing';
import {MainMenuTileComponent} from './admin-main-page/main-menu-tile/main-menu-tile.component';
import {UserService} from '../services/user.service';
import {UsersListComponent} from './admin-main-page/main-menu-tile/users-list/users-list.component';

@NgModule({
  declarations: [
    AdminMainPageComponent,
    MainMenuTileComponent,
    UsersListComponent],
  imports: [
    CommonModule,
    AdminRouting
  ],
  providers: [UserService]
})
export class AdminModule {
}
