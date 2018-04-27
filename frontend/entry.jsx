// Import API calls to query database
import * as APIInvites from './utils/invites_api_utils';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';
import { fetchInvites, fetchSearchInvites } from './actions/invite_actions';

document.addEventListener('DOMContentLoaded',()=>{
  console.log("Working!");
  let store = configureStore();
  window.fetchInvites = APIInvites.fetchInvites;
  window.fetchSearchInvites = fetchSearchInvites;
  window.fetchInvites = fetchInvites;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
