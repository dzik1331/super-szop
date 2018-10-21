import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productRestService: ProductService) {
  }

  ngOnInit() {
    this.productRestService.query().subscribe((products: Product[]) => {
      if (products) {
        this.products = products;
      }
    });
  }

}
