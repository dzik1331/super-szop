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
  form: FormGroup;
  loaded: boolean = false;
  files: any[] = [];
  imageLoaded = false;

  constructor(private productRestService: ProductService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.productRestService.tags().subscribe((tags: any[]) => {
        this.tags = tags.map((tag) => {
          return {value: tag};
        });
        this.form = this.fb.group({
          name: [null, [Validators.required]],
          description: [],
          tags: [],
          price: [null, [Validators.required, Validators.min(0)]],
          producer: []
        });
        this.loaded = true;
      },
      (error) => {
        console.error(error);
      });
  }

  add() {
    if (this.form.valid) {
      const data = this.form.value;
      data['img'] = this.files;
      this.productRestService.add(this.form.value).subscribe(() => {
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

}
