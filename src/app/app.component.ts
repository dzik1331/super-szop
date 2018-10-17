import {Component} from '@angular/core';
import {Article} from './article/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Test 1', 'http://test1.pl'),
      new Article('Test 2', 'http://test2.pl'),
      new Article('Test 3', 'http://test3.pl'),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
