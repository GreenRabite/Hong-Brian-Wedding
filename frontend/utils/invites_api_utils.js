export const getInvites = () =>(
  $.ajax({
    method: 'GET',
    url: 'api/invites'
  })
);
