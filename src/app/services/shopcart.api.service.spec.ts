import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockInitialState } from '../mocks/initialMock';

import { iShopCart, shopProduct } from '../models/shopcart.model';
import { ShopcartsApiService } from './shopcart.api.service';

describe('Given products api service', () => {
  let service: ShopcartsApiService;
  let httpTestingController: HttpTestingController;

  const mockShopcart: iShopCart = {
    id: 'test',
    owner: {
      name: 'fernando',
      email: 'confidencial@confidencial.com',
      password: 'confidencial',
      address: 'confidencial',
      payMethod: 'confidencial',
    },
    products: [
      {
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
      },
    ],
  };
  const mockShopProduct: shopProduct = {
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ShopcartsApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('When calling service.getShopcart with an id', () => {
    it('Should fetch the matching shopcart from the api', () => {
      service.getShopcart('id', 'token').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toEqual(JSON.stringify({}));
      });

      const req = httpTestingController.expectOne({
        method: 'GET',
        url: 'http://localhost:4500/shopcart/id',
      });

      expect(req.request.url).toBe('http://localhost:4500/shopcart/id');

      req.flush({});
    });
  });
  describe('When calling service.addProduct with an id', () => {
    it('Should fetch the updated products from the api', () => {
      service.addProduct(mockShopProduct, 'id', 'token').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toEqual(JSON.stringify({}));
      });

      const req = httpTestingController.expectOne({
        method: 'PATCH',
        url: 'http://localhost:4500/shopcart/add/id',
      });

      expect(req.request.url).toBe('http://localhost:4500/shopcart/add/id');

      req.flush({});
    });
  });
  describe('When calling service.removeProduct with an id', () => {
    it('Should fetch the updated products in the shopcart from the api', () => {
      service.removeProduct(mockShopProduct, 'id', 'token').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toEqual(JSON.stringify({}));
      });

      const req = httpTestingController.expectOne({
        method: 'PATCH',
        url: 'http://localhost:4500/shopcart/remove/id',
      });

      expect(req.request.url).toBe('http://localhost:4500/shopcart/remove/id');

      req.flush({});
    });
  });
  describe('When calling service.updateProduct with an id', () => {
    it('Should fetch the updated products in the shopcart from the api', () => {
      service
        .updateProduct(
          mockInitialState.shopcarts.products as shopProduct[],
          'id',
          'token'
        )
        .subscribe((res) => {
          expect(res).not.toBeNull();
          expect(JSON.stringify(res)).toEqual(JSON.stringify({}));
        });

      const req = httpTestingController.expectOne({
        method: 'PATCH',
        url: 'http://localhost:4500/shopcart/id',
      });

      expect(req.request.url).toBe('http://localhost:4500/shopcart/id');

      req.flush({});
    });
  });
});
