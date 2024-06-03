
import { createReducer, on } from '@ngrx/store';
import * as RegistrationActions from './registration.actions';

export interface RegistrationState {
  loading: boolean;
  error: any;
}

export const initialState: RegistrationState = {
  loading: false,
  error: null,
};

export const registrationReducer = createReducer(
  initialState,
  on(RegistrationActions.register, (state) => ({ ...state, loading: true })),
  on(RegistrationActions.registerSuccess, (state) => ({ ...state, loading: false, error: null })),
  on(RegistrationActions.registerFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
