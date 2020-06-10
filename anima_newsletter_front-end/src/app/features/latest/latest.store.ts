import {Injectable} from '@angular/core';
import {action, observable} from 'mobx';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../../shared/models';
import {bindAction} from '../../utils';

@Injectable()
export class LatestStore {

  @observable
  latest: News = null;

  constructor(private _http: HttpClient) {}

  @action
  fetchLatest(): Observable<News> {
    return this._http
      .get<News>('http://localhost:7070/latestTest')
      .pipe(bindAction( (res: News ) => (this.latest = res)));
  }
}
