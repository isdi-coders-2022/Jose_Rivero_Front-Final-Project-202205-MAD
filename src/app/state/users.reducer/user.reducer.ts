import { createReducer, on } from '@ngrx/store';
import { iUser } from 'src/app/models/user.model';
import * as ac from './user.action.creators';

export const initialState = {
  user: {} as iUser,
  token: '',
};

export const usersReducer = createReducer(
  initialState,
  on(ac.loadUser, (state, { currentUser, token }) => ({
    user: currentUser,
    token: token,
  }))
);
