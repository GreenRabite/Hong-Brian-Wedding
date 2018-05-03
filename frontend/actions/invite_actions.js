import * as APIInvites from "./../utils/invites_api_utils";

export const RECEIVE_ALL_INVITES = "RECEIVE_ALL_INVITES";
export const RECEIVE_INVITE = "RECEIVE_INVITE";

export const receiveAllInvites = (invites) => {
  return {
    type: RECEIVE_ALL_INVITES,
    invites
  };
};

export const receiveInvite = (invite) => {
  return {
    type: RECEIVE_INVITE,
    invite
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

export const fetchInvite = (id) => (dispatch) => {
  return APIInvites.fetchInvite(id).then((invite)=>{
    return dispatch(receiveInvite(invite));
  });
};

export const updateInvite = (invite) => (dispatch) => (
  APIInvites.updateInvite(invite).then(upInvite=>dispatch(receiveInvite(upInvite)))
);
