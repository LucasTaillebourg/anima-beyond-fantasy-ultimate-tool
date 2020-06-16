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
    console.log('coucou');
    this.news = news;
    const body = { news: news};
    return this._http
      .put<News>('http://localhost:7070/addNews', body)
      .pipe(bindAction( (res: News ) => (this.news = res)));
  }
}
