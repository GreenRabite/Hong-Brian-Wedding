import { combineReducers} from 'redux';
import inviteReducer from "./invite_reducer";

const entitiesReducer = combineReducers({
  invites: inviteReducer
});

export default entitiesReducer;
