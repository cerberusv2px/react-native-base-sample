import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import {
  FirstScreenReducer
} from '../ui';

export default {
  form,
  first: FirstScreenReducer,
};
