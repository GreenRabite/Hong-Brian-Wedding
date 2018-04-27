import React from 'react';
import { Link } from 'react-router-dom';

const InviteIndexItem =({invite})=> {
  return(
    <div className="invite-item">
      <Link to={`/rsvp/${invite.id}`}>
        <ul>
          <li>{invite.username}</li>
        </ul>
      </Link>
    </div>
  );
};

export default InviteIndexItem;
