import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentRef, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { mockInitialState } from 'src/app/mocks/initialMock';
import { iProduct } from 'src/app/models/product.model';

import { CoreModule } from '../core.module';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, CoreModule],
      providers: [provideMockStore({ initialState: mockInitialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    (component.product = {
      id: '1',
      _id: '1',
      name: 'fernando',
      price: 0,
      onSale: false,
      category: 'Tshirt',
      stock: 0,
      color: '',
      size: '',
      image: 'fernando',
    }),
      (component.aFavorite = mockInitialState.products.products);
    component.token = mockInitialState.users.token;
    component.user = {
      id: '1',
      _id: '1',
      name: 'fernando',
      email: 'confidencial@confidencial.com',
      password: 'confidencial',
      address: 'confidencial',
      payMethod: 'confidencial',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component.store, 'select').and.returnValue(
      of(mockInitialState.users.user)
    );
    spyOn(component.userApi, 'updateUser').and.returnValue(of(component.user));
    spyOn(component.router, 'navigate');
    fixture.detectChanges();
    component.favoriteSubmit();
    expect(component).toBeTruthy();
  });
});
