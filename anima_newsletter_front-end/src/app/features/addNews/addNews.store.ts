import {Injectable} from '@angular/core';
import {action, observable} from 'mobx';
import {News} from '../../shared/models/news';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {bindAction} from '../../utils';

@Injectable()
export class AddNewsStore {
  @observable
  news: News = null;

  constructor(private _http: HttpClient) {}

  @action
  sendTheNews(news: News): Observable<News> {
    this.news = news;
    return this._http
      .post<News>('http://localhost:7070/addNews', this.news)
      .pipe(bindAction( (res: News ) => (this.news = res)));
  }
}
