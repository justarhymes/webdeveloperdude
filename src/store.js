import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export default createStore(
  reducers,
  undefined,
  applyMiddleware(thunkMiddleware),
);
