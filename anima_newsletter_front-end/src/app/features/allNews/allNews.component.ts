import {Component, OnDestroy, OnInit} from '@angular/core';
import {AllNewsStore} from './allNews.store';
import {Subscriptor} from '../../utils';
import {News} from '../../shared/models/news';

@Component({
  selector: 'app-latest',
  templateUrl: './allNews.component.html',
  styleUrls: ['./allNews.component.scss']
})
export class AllNewsComponent implements OnInit, OnDestroy {

  private _subscriptor: Subscriptor = new Subscriptor();

  constructor(private _allNewsStore: AllNewsStore) {}

  ngOnInit(): void {
    this._subscriptor.trigger(this._allNewsStore.fetchAllNews());
  }

  ngOnDestroy(): void {
    this._subscriptor.unsubscribe();
  }

  get news(): News[] {
    return this._allNewsStore.news;
  }

}
