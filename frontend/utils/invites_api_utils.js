export const fetchInvites = () =>(
  $.ajax({
    method: 'GET',
    url: 'api/invites'
  })
);
