import { createStore } from 'redux';
import authReducer from './reducers/authReducer';

const store = createStore(authReducer);

// Subscribe to Redux store changes and save state to session storage
store.subscribe(() => {
  sessionStorage.setItem('authState', JSON.stringify(store.getState()));
});

export default store;
