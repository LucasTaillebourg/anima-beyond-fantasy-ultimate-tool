import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'abfut-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _router: Router) { }

  goToHome() {
    this._router.navigate(['/']);
  }

  goToLatest() {
    this._router.navigate(['/latest']);
  }

  gotoAllNews() {
    this._router.navigate(['/allnews']);
  }

  gotoAddNews() {
    this._router.navigate(['/addnews']);
  }
}
