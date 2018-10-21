import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {IUser} from '../../models/IUser';
import {Router} from '@angular/router';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {


  constructor(private storageService: StorageService,
              private router: Router,
              private basketService: BasketService) {
  }

  ngOnInit() {
  }

  get user(): IUser {
    return this.storageService.get('currentUser');
  }

  logout() {
    this.storageService.clear();
    this.basketService.clear();
    this.router.navigate(['/login']);
  }

  get productsCount() {
    return this.basketService.productsCount;
  }

}
