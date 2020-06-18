import {Injectable} from '@angular/core';
import {action, observable} from 'mobx';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../../shared/models';
import {bindAction} from '../../utils';
import {environment} from '../../../environments/environment';

@Injectable()
export class LatestStore {

  @observable
  latest: News = null;

  constructor(private _http: HttpClient) {}

  @action
  fetchLatest(): Observable<News> {
    return this._http
      .get<News>('http://' + environment.newsletter_backend + '/latestNews')
      .pipe(bindAction( (res: News ) => (this.latest = res)));
  }
}
