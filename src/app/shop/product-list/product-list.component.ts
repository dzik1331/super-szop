import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {RoleService} from '../../services/role.service';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() isBasket: boolean = false;

  constructor(private productRestService: ProductService,
              private roleService: RoleService,
              private storageService: StorageService) {
  }

  ngOnInit() {
    if (!this.isBasket) {
      this.productRestService.query(this.roleService.isSeller ? this.storageService.currentUserId() : null).subscribe((products: Product[]) => {
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
