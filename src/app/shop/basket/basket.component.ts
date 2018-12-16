import {Component, OnDestroy, OnInit} from '@angular/core';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  productsBasket: any = {};
  private deleteFromBasketListener;

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.deleteFromBasketListener = this.basketService.deleteFromBasketListen().subscribe(() => {
      this.groupProducts();
    });
    this.groupProducts();
  }

  ngOnDestroy() {
    if (this.deleteFromBasketListener) {
      this.deleteFromBasketListener.unsubscribe();
    }
  }

  getSellers() {
    return Object.keys(this.productsBasket);
  }

  groupProducts() {
    this.productsBasket = this.basketService.getProducts().reduce((a, data) => {
      if (a[data.seller]) {
        a[data.seller].push(data);
      } else {
        a[data.seller] = [data];
      }
      return a;
    }, {});
  }
}
