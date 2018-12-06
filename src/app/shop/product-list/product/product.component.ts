import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  urlImages: string = environment.urlToImages;
  imgIndex: number = 0;

  constructor() {
  }

  ngOnInit() {
    if (this.product) {
      this.product.img = !Array.isArray(this.product.img) ? this.product.img.split(',') : this.product.img;
    }
  }

  public setImage(index) {
    this.imgIndex = index;
  }

}
