import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {Product} from '../models/product';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  test = 10;
  public deleteSubject = new Subject<any>();

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
    if (this._basket) {
      return this._basket.length;
    }
    return 0;
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

  deleteFromBasketListen() {
    return this.deleteSubject;
  }

  deleteFromBasketMessage() {
    return this.deleteSubject.next(true);
  }
}
