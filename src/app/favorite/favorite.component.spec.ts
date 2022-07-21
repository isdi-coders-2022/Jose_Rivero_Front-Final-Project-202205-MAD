import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from '../core/core.module';
import { mockInitialState } from '../mocks/initialMock';

import { FavoriteComponent } from './favorite.component';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteComponent],
      providers: [provideMockStore({ initialState: mockInitialState })],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CoreModule,
        CommonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component.userApi, 'getUser').and.returnValue(
      of(mockInitialState.users.user)
    );
    fixture.detectChanges();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
