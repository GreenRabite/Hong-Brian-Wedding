import React from 'react';
import { Link } from 'react-router-dom';

const InviteIndexItem =({invite})=> {
  let parseInvite;
  if (invite.plusone && invite.plusone.length > 0) {
    parseInvite = <li>{invite.username} / {invite.plusone}</li>;
  }else {
    parseInvite = <li>{invite.username}</li>;
  }
  return(
    <div className="invite-item">
      <Link to={`/rsvp/${invite.id}`}>
        <ul>
          {parseInvite}
        </ul>
      </Link>
    </div>
  );
};

export default InviteIndexItem;
