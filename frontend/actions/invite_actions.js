import * as APIInvites from "./../utils/invites_api_utils";

export const RECEIVE_ALL_INVITES = "RECEIVE_ALL_INVITES";

export const receiveAllInvites = (invites) => {
  debugger;
  return {
    type: RECEIVE_ALL_INVITES,
    invites
  };
};

export const fetchInvites = () => (dispatch) => {
  return APIInvites.fetchInvites().then((invites)=>{
    return dispatch(receiveAllInvites(invites));
  });
};
