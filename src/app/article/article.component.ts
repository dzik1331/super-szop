import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from './Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ng-row';
  @Input() article: Article;

  constructor() {
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return true;
  }

  goToUrl(): boolean {
    window.open(this.article.link, '_blank');
    return false;
  }

}
