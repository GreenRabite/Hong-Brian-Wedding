export const fetchInvites = () =>(
  $.ajax({
    method: 'GET',
    url: 'api/invites'
  })
);

export const fetchInvite = (id) =>(
  $.ajax({
    method: 'GET',
    url: `api/invites/${id}`
  })
);

export const updateInvite = (invite) =>{
  return $.ajax({
    method: 'PATCH',
    url: `api/invites/${invite.id}`,
    data: {invite}
  });
};

export const fetchSearchInvites = ({fname,lname}) =>(
  $.ajax({
    method: 'GET',
    url: `api/searches?fname=${fname}&lname=${lname}`
  })
);
