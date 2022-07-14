import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iUser } from './models/user.model';
import { LocalStorageService } from './services/local.storage.service';
import { AppState } from './state/app.state';
import { loadUser } from './state/users.reducer/user.action.creators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'drtfm';
  constructor(
    public localStorage: LocalStorageService,
    public store: Store<AppState>
  ) {}
  ngOnInit(): void {
    let token = this.localStorage.getToken();
    if (token)
      this.store.dispatch(loadUser({ currentUser: {} as iUser, token }));
  }
}
