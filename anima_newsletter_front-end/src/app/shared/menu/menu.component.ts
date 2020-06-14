import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'newsletter-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private _router: Router) { }

  goToLatest() {
    this._router.navigate(['/latest']);
  }

  gotoAllNews() {
    this._router.navigate(['/allnews']);
  }
}
