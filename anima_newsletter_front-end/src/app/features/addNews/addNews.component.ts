import {Component, OnDestroy, OnInit} from '@angular/core';
import {AddNewsStore} from './addNews.store';
import {Subscriptor} from '../../utils';
import {News} from '../../shared/models/news';

@Component({
  selector: 'add-news',
  templateUrl: './addNews.component.html',
  styleUrls: ['./addNews.component.scss']
})
export class AddNewsComponent implements OnInit, OnDestroy {

  private _subscriptor: Subscriptor = new Subscriptor();

  news: News = {
    id: 'NOT SET HERE',
    creationDate: 'Waiting applying',
    content: 'Content',
    author: 'Author',
    title: 'Title'
  };

  onKeyTitle(event: any) { // without type info
    this.news.title = event.target.value;
  }

  onKeyAuthor(event: any) { // without type info
    this.news.author = event.target.value;
  }

  onKeyContent(event: any) { // without type info
    this.news.content = event.target.value;
  }

  constructor(private addNewsStore: AddNewsStore) {}

  applyTheNews(): void {
    this.addNewsStore.sendTheNews(this.news);
  }

  ngOnInit(): void {
    this._subscriptor.trigger();
  }

  ngOnDestroy(): void {
    this._subscriptor.unsubscribe();
  }

}
