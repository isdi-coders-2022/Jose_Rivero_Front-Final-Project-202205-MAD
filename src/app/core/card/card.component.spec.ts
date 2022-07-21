import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentRef, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { mockInitialState } from 'src/app/mocks/initialMock';

import { CoreModule } from '../core.module';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CoreModule,
        Input,
      ],
      providers: [provideMockStore({ initialState: mockInitialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.product = mockInitialState.products.products[0];

    component.aFavorite = mockInitialState.products.products;
    component.token = mockInitialState.users.token;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When call the function favoriteSubmit ', () => {
    it('should be function have been called', () => {
      const fixture = TestBed.createComponent(CardComponent);
      const component = fixture.componentInstance;

      spyOn(component.store, 'select');
      spyOn(component.userApi, 'updateUser');
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.favoriteSubmit();
      expect(component.router.navigate).not.toHaveBeenCalled();
    });
  });
});
