import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { iProduct } from '../models/product.model';
import { ProductsApiService } from './products.api.service';

describe('Given products api service', () => {
  let service: ProductsApiService;
  let httpTestingController: HttpTestingController;

  const mockProducts: iProduct = {
    name: '',
    price: 0,
    onSale: false,
    category: 'Tshirt',
    stock: 0,
    color: '',
    size: '',
    image: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When calling service.getProducts', () => {
    it('Should fetch the all products from the api', () => {
      service.getProducts().subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toEqual(JSON.stringify({}));
      });

      const req = httpTestingController.expectOne({
        method: 'GET',
        url: 'http://localhost:4500/products/',
      });

      expect(req.request.url).toBe('http://localhost:4500/products/');

      req.flush({});
    });
  });
  describe('When calling service.getproduct with an id', () => {
    it('Should fetch the matching product from the api', () => {
      service.getProduct('id').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toEqual(JSON.stringify({}));
      });

      const req = httpTestingController.expectOne({
        method: 'GET',
        url: 'http://localhost:4500/products/id',
      });

      expect(req.request.url).toBe('http://localhost:4500/products/id');

      req.flush({});
    });
  });
  describe('When calling service.addProduct with an id', () => {
    it('Should fetch the new products added to the api', () => {
      service.addProduct(mockProducts).subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toEqual(JSON.stringify({}));
      });

      const req = httpTestingController.expectOne({
        method: 'POST',
        url: 'http://localhost:4500/products/',
      });

      expect(req.request.url).toBe('http://localhost:4500/products/');

      req.flush({});
    });
  });

  describe('When calling service.updateproducts with an id', () => {
    it('Should fetch the updated products from the api', () => {
      service.updateProduct('id', mockProducts).subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toEqual(JSON.stringify({}));
      });

      const req = httpTestingController.expectOne({
        method: 'PATCH',
        url: 'http://localhost:4500/products/id',
      });

      expect(req.request.url).toBe('http://localhost:4500/products/id');

      req.flush({});
    });
  });
  describe('When calling service.deleteproducts with an id', () => {
    it('Should fetch the deleted products from the api', () => {
      service.deleteProduct('id').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toEqual(JSON.stringify({}));
      });

      const req = httpTestingController.expectOne({
        method: 'DELETE',
        url: 'http://localhost:4500/products/id',
      });

      expect(req.request.url).toBe('http://localhost:4500/products/id');

      req.flush({});
    });
  });
});
