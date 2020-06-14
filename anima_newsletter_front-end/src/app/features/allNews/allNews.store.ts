import {Injectable} from '@angular/core';
import {action, observable} from 'mobx';
import {News} from '../../shared/models/news';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {bindAction} from '../../utils';

@Injectable()
export class AllNewsStore {
  @observable
  news: News[] = null;

  constructor(private _http: HttpClient) {}

  @action
  fetchAllNews(): Observable<News[]> {
    return this._http
      .get<News[]>('http://localhost:7070/allNews')
      .pipe(bindAction( (res: News[] ) => (this.news = res)));
  }
}
