import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  productsBasket: Product[] = [];

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.productsBasket = this.basketService.getProducts();
  }

}
