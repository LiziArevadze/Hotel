import { createReducer, on, Action } from '@ngrx/store';
import { setLanguage, setCurrency } from './language-currency.actions';

export interface State {
  language: string;
  currency: string;
}

export const initialState: State = {
  language: 'English',
  currency: 'USD'
};

const languageCurrencyReducer = createReducer(
  initialState,
  on(setLanguage, (state, { language }) => ({ ...state, language })),
  on(setCurrency, (state, { currency }) => ({ ...state, currency }))
);

export function reducer(state: State | undefined, action: Action) {
  return languageCurrencyReducer(state, action);
}
