import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  tags: any[] = [];
  form: FormGroup;
  loaded: boolean = false;
  files: any[] = [];
  imageLoaded = false;
  editProductId: any;

  constructor(private productRestService: ProductService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.editProductId = this.route.snapshot.paramMap.get('productId');
    this.productRestService.tags().subscribe((tags: any[]) => {
        this.tags = tags.map((tag) => {
          return {value: tag};
        });
        if (this.isEdit) {
          this.productRestService.get(this.editProductId).subscribe(
            (product) => {
              product.tags = product.tags.split(',');
              this.initForm(product);
            }, (error) => {
              console.error(error);
            });
        } else {
          this.initForm(null);
        }
      },
      (error) => {
        console.error(error);
      });
  }

  private initForm(product: Product) {
    this.form = this.fb.group({
      name: [product ? product.name : null, [Validators.required]],
      description: [product ? product.description : null],
      tags: [product ? product.tags : null],
      price: [product ? product.price : null, [Validators.required, Validators.min(0)]],
      producer: [product ? product.producer : null]
    });
    this.loaded = true;
  }

  add() {
    if (this.form.valid) {
      const data = this.form.value;
      if (!this.isEdit) {
        data['img'] = this.files;
      }
      this.productRestService.add(this.form.value, this.editProductId).subscribe(() => {
        this.router.navigate(['../shop']);
      });
    }
  }

  onFileChange(event) {
    this.files = [];
    this.imageLoaded = false;
    const files = event.target.files;
    let count = 0;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const picReader = new FileReader();
      picReader.addEventListener('loadend', (e: any) => {
        const d = {};
        d['result'] = e.target.result.toString().split(',')[1];
        d['name'] = file.name;
        this.files.push(d);
        count += 1;
        this.imageLoaded = count >= files.length;
      });
      picReader.readAsDataURL(file);
    }

  }

  get isEdit(): boolean {
    return this.editProductId != null;
  }

}
