
import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Registration Page] Register',
  props<{ name: string; lastname: string; email: string; password: string }>()
);

export const registerSuccess = createAction('[Registration API] Register Success');

export const registerFailure = createAction('[Registration API] Register Failure', props<{ error: any }>());
