import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { mockInitialState } from '../mocks/initialMock';
import { iUser } from '../models/user.model';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],

      providers: [provideMockStore({ initialState: mockInitialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.userData = mockInitialState.users.user;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.handleSubmit();
    component.handleSesion();
    expect(component).toBeTruthy();
  });
  describe('When calling component.handleSubmit with present and correct registerData', () => {
    it('should call component store.dispatch, localStorage.saveToken and router.navigate', () => {
      component.userUpdate = {
        name: 'test',
        email: 'test@test.com',
        password: 'test',
        address: 'test',
        payMethod: 'test',
      };
      spyOn(component.userApi, 'updateUser').and.returnValue(
        of(component.userUpdate)
      );
      spyOn(component.store, 'dispatch');

      spyOn(component.router, 'navigate');
      fixture.detectChanges();

      component.handleSubmit();

      expect(component.store.dispatch).toHaveBeenCalled();

      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
});
