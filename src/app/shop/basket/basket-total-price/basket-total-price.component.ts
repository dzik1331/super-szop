import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-basket-total-price',
  templateUrl: './basket-total-price.component.html',
  styleUrls: ['./basket-total-price.component.scss']
})
export class BasketTotalPriceComponent implements OnInit, OnChanges {
  @Input() seller;
  @Input() products;
  public total: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calcPrice();
  }

  private calcPrice() {
    this.total = 0;
    this.products.forEach((p) => {
      this.total += p.price;
    });
    this.total = +this.total.toFixed(2);
  }


}
