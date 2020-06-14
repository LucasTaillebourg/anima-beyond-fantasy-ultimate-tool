import {Component, Input} from '@angular/core';
import {News} from '../../models/news';

@Component({
  selector: 'newsletter-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  @Input()
  news: News;
}
