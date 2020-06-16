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

  @observable
  insertednews: News = null;

  constructor(private _http: HttpClient) {}

  @action
  sendTheNews(news: News): Observable<News> {
    this.insertednews = null;
    news.creationDate = null;
    return this._http
      .put<News>('http://localhost:7070/addNews', news)
      .pipe(bindAction( (res: News ) => (this.insertednews = res)));
  }
}
