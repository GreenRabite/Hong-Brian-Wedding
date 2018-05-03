import merge from 'lodash/merge';
import { RECEIVE_ALL_INVITES, RECEIVE_INVITE } from '../actions/invite_actions';

const inviteReducer = (state={}, action) =>{
  let newState={};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_INVITES:
      return merge({},action.invites);
    case RECEIVE_INVITE:
      newState = merge({},state);
      newState[action.invite.id] = action.invite;
      return newState;
    default:
      return state;
  }
};

export default inviteReducer;
