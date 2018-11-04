import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../models/product';
import {BasketService} from '../../../services/basket.service';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @Input() isBasket: boolean = false;
  @Output() currentBasket = new EventEmitter();

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
  }

  addToBasket(product: Product) {
    this.basketService.add(product);
  }

  removeFromBasket(product: Product) {
    const newList = this.basketService.removeFromBasket(product);
    this.currentBasket.emit(newList);

  }
}
