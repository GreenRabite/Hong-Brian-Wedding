// Import API calls to query database
import * as APIInvites from './utils/invites_api_utils';

document.addEventListener('DOMContentLoaded',()=>{
  console.log("Working!");
  window.getInvites = APIInvites.getInvites;
  window.getInvites().then((value) => {
    window.data = Object.values(value);
  });
});
