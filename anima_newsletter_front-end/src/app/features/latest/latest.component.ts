import {Component, OnDestroy, OnInit} from '@angular/core';
import {LatestStore} from './latest.store';
import {Subscriptor} from '../../utils';
import {News} from '../../shared/models/news';

@Component({
  selector: 'latest-news',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit, OnDestroy {

  private _subscriptor: Subscriptor = new Subscriptor();

  constructor(private _latestStore: LatestStore) {}


  ngOnInit(): void {
    this._subscriptor.trigger(this._latestStore.fetchLatest());
  }

  ngOnDestroy(): void {
    this._subscriptor.unsubscribe();
  }

  get latest(): News {
    return this._latestStore.latest;
  }

}
