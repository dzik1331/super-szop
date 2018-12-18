import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../models/product';
import {BasketService} from '../../../services/basket.service';
import {RoleService} from '../../../services/role.service';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @Input() isBasket: boolean = false;
  @Output() delete = new EventEmitter();

  constructor(private basketService: BasketService,
              public roleService: RoleService,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.basketService.test += 10;
  }

  addToBasket(product: Product) {
    this.basketService.add(product);
  }

  removeFromBasket(product: Product) {
    const newList = this.basketService.removeFromBasket(product);
    this.basketService.deleteFromBasketMessage();
  }

  deleteProduct(product: Product) {
    if (this.roleService.isSeller) {
      this.productService.delete(product.id).subscribe((result) => {
        this.delete.emit(true);
      }, (error) => {
        console.error(error);
      });
    }
  }
}
