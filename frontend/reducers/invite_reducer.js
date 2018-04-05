import merge from 'lodash/merge';
import { RECEIVE_ALL_INVITES } from '../actions/invite_actions';


const inviteReducer = (state={}, action) =>{
  let newState={};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_INVITES:
      return merge({},action.invites);
    default:
      return state;
  }
};

export default inviteReducer;
