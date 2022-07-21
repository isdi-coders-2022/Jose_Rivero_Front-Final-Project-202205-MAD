import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CoreModule } from '../core/core.module';
import { mockInitialState } from '../mocks/initialMock';

import { ShopcartComponent } from './shopcart.component';
import { of } from 'rxjs';

describe('ShopcartComponent', () => {
  let component: ShopcartComponent;
  let fixture: ComponentFixture<ShopcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopcartComponent],
      providers: [provideMockStore({ initialState: mockInitialState })],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CoreModule,
        CommonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopcartComponent);
    component = fixture.componentInstance;
    component.user = mockInitialState.users.user;
    component.token = mockInitialState.users.token;
    component.shopcart = [
      {
        quantity: 10,
        product: {
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
        },
      },
    ];
    component.newShopcart = mockInitialState.shopcarts;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component.store, 'select').and.returnValue(
      of(mockInitialState.shopcarts)
    );
    spyOn(component.shopCartApi, 'getShopcart').and.returnValue(
      of(mockInitialState.shopcarts)
    );
    spyOn(component.shopCartApi, 'updateProduct').and.returnValue(
      of(mockInitialState.shopcarts)
    );
    fixture.detectChanges();
    component.ngOnInit();
    component.checkOut();

    expect(component).toBeTruthy();
  });
});
