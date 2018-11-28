import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  test = 10;

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

  removeFromBasket(product: Product) {
    this._basket = this.storageService.get('basket');
    if (this._basket == null) {
      this._basket = [];
    }
    const index = this._basket.findIndex((p) => p.id == product.id);
    if (index != -1) {
      this._basket.splice(index, 1);
      this.saveBasket();
    }
    return this._basket;
  }

  getProducts() {
    this._basket = this.storageService.get('basket');
    return this._basket ? this._basket : [];
  }

  clear() {
    this._basket = [];
  }

  private saveBasket() {
    this.storageService.add('basket', this._basket);
  }
}
