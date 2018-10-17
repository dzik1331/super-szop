import {Component, OnInit} from '@angular/core';
import {Article} from './article/Article';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UrlValidator} from './validators/url.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  articles: Article[];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articles = [
      new Article('Google', 'http://google.pl'),
      new Article('YouTube', 'http://youtube.pl'),
      new Article('Gmail', 'http://gmail.com'),
    ];
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(1)]],
      link: [null, [Validators.required, UrlValidator.url]]
    });
  }

  addArticle() {
    this.articles.push(new Article(this.form.get('title').value, this.form.get('link').value));
    this.form.reset();
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
