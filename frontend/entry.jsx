// Import API calls to query database
import * as APIInvites from './utils/invites_api_utils';

document.addEventListener('DOMContentLoaded',()=>{
  console.log("It worked!");
  window.getInvites = APIInvites.getInvites;
});
