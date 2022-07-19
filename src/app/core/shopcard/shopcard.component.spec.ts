import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { mockInitialState } from 'src/app/mocks/initialMock';
import { shopProduct } from 'src/app/models/shopcart.model';
import { CoreModule } from '../core.module';

import { ShopCardComponent } from './shopcard.component';

describe('CardComponent', () => {
  let component: ShopCardComponent;
  let fixture: ComponentFixture<ShopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopCardComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, CoreModule],
      providers: [provideMockStore({ initialState: mockInitialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    component.product = {
      quantity: 0,
      product: {
        name: '',
        price: 0,
        onSale: false,
        category: 'Tshirt',
        stock: 0,
        color: '',
        size: '',
        image: '',
      },
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
