import { CommonModule } from '@angular/common';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { CoreModule } from '../core/core.module';
import { mockInitialState } from '../mocks/initialMock';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '1',
              }),
            },
          },
        },
        provideMockStore({ initialState: mockInitialState }),
      ],
      imports: [
        RouterTestingModule,
        CoreModule,
        CommonModule,
        FormsModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When call the function with increase', () => {
    it('should first', () => {
      component.handleSubmit('increase');
      expect(component.quantity).toBe(2);
    });
  });
  describe('When call the function with decrease', () => {
    it('should first', () => {
      component.handleSubmit('decrease');
      expect(component.quantity).toBe(0);
    });
  });
  describe('When call the function saveHandle ', () => {
    it('should be shopcartapi have been called', () => {
      const fixture = TestBed.createComponent(DetailsComponent);
      const component = fixture.componentInstance;
      spyOn(component.shopCartApi, 'addProduct').and.returnValue(
        of(mockInitialState.shopcarts)
      );
      spyOn(component.store, 'dispatch');
      fixture.detectChanges();
      component.saveHandle();

      expect(component.shopCartApi.addProduct).toHaveBeenCalled();
    });
  });
});
