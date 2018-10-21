import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {Product} from '../models/product';

@Injectable()
export class BasketService {

  constructor(private storageService: StorageService) {
  }

  private _basket: Product[] = [];

  add(data: Product) {
    this._basket = this.storageService.get('basket');
    if (this._basket == null) {
      this._basket = [];
    }
    this._basket.push(data);
    this.saveBasket();
  }

  get productsCount() {
    return this._basket.length;
  }

  clear() {
    this._basket = [];
  }

  private saveBasket() {
    this.storageService.add('basket', this._basket);
  }
}
