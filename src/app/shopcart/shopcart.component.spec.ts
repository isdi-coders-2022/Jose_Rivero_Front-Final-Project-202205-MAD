import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CoreModule } from '../core/core.module';
import { mockInitialState } from '../mocks/initialMock';

import { ShopcartComponent } from './shopcart.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
