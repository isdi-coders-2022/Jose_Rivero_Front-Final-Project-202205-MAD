import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { mockInitialState } from 'src/app/mocks/initialMock';
import { CoreModule } from '../core.module';

import { FavCardComponent } from './favcard.component';

describe('FavCardComponent', () => {
  let component: FavCardComponent;
  let fixture: ComponentFixture<FavCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavCardComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, CoreModule],
      providers: [provideMockStore({ initialState: mockInitialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(FavCardComponent);
    component = fixture.componentInstance;
    component.product = mockInitialState.products.products[0];
    component.aFavorite = mockInitialState.products.products;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When call the function favoriteSubmit', () => {
    it('should first', () => {
      component.favoriteSubmit();
      spyOn(component.store, 'select').and.returnValue(
        of(mockInitialState.users)
      );
      spyOn(component.userApi, 'updateUser').and.returnValue(
        of(mockInitialState.users.user)
      );
      spyOn(component.router, 'navigate');

      fixture.detectChanges();

      expect(component.router.navigate).not.toHaveBeenCalled();
    });
  });
});
