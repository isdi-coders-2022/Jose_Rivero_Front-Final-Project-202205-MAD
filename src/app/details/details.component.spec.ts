import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CoreModule } from '../core/core.module';
import { mockInitialState } from '../mocks/initialMock';
import { iProduct } from '../models/product.model';

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
      imports: [RouterTestingModule, CoreModule, CommonModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    component.saveHandle();
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
});
