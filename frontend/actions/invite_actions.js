import * as APIInvites from "./../utils/invites_api_utils";

export const RECEIVE_ALL_INVITES = "RECEIVE_ALL_INVITES";
export const RECEIVE_INVITES = "RECEIVE_INVITES";

export const receiveAllInvites = (invites) => {
  return {
    type: RECEIVE_ALL_INVITES,
    invites
  };
};

export const receiveInvites = (invites) => {
  return {
    type: RECEIVE_INVITES,
    invites
  };
};

export const fetchSearchInvites = (fname,lname) => (dispatch) =>{
  return APIInvites.fetchSearchInvites(fname,lname)
  .then((invites)=>dispatch(receiveAllInvites(invites)));
};

export const fetchInvites = () => (dispatch) => {
  return APIInvites.fetchInvites().then((invites)=>{
    return dispatch(receiveAllInvites(invites));
  });
};
