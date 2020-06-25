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
    UUID: 'NOT SET HERE',
    creationDate: 'Waiting applying',
    content: 'Content',
    about: 'About',
    author: 'Author',
    title: 'Title'
  };

  get generatedNews(): News {
    return this.addNewsStore.insertednews;
  }

  constructor(private addNewsStore: AddNewsStore) {}

  applyTheNews(): void {
    this.addNewsStore.sendTheNews(this.news).subscribe(res => this.news = {
      UUID: 'NOT SET HERE',
      creationDate: '',
      content: 'Content',
      about: 'About',
      author: 'Author',
      title: 'Title'
    });
  }

  ngOnInit(): void {
    this._subscriptor.trigger();
  }

  ngOnDestroy(): void {
    this._subscriptor.unsubscribe();
  }

}
