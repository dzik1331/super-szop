import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() isBasket: boolean = false;

  constructor(private productRestService: ProductService) {
  }

  ngOnInit() {
    if (!this.isBasket) {
      this.productRestService.query().subscribe((products: Product[]) => {
        if (products) {
          this.products = products;
        }
      });

    }
  }

  reloadList(products: Product[]) {
    this.products = products;
  }

}
