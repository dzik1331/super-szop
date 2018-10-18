import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  tags: any[] = [];
  selectTags: any[] = [];
  form: FormGroup;
  loaded: boolean = false;

  constructor(private productRestService: ProductService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.productRestService.tags().subscribe((tags) => {
        this.tags = tags.map((tag) => {
          return {value: tag};
        });
        console.debug(this.tags);
        this.form = this.fb.group({
          name: [],
          description: [],
          img: [],
          tags: [],
          price: []
        });
        this.loaded = true;
      },
      (error) => {
        console.error(error);
      });
  }

  add() {
    console.debug(this.selectTags);
    console.debug(this.form);

    this.productRestService.add(this.form.value).subscribe();
  }

}
