import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

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
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.productRestService.tags().subscribe((tags) => {
        this.tags = tags.map((tag) => {
          return {value: tag};
        });
        this.form = this.fb.group({
          name: [null, [Validators.required]],
          description: [],
          img: [null, [Validators.required]],
          tags: [],
          price: [null, [Validators.required, Validators.min(0)]]
        });
        this.loaded = true;
      },
      (error) => {
        console.error(error);
      });
  }

  add() {
    if (this.form.valid) {
      this.productRestService.add(this.form.value).subscribe(() => {
        this.router.navigate(['../shop']);
      });
    }
  }

}
