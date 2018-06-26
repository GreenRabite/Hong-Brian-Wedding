import React from 'react';
import InviteIndexItem from './invite_index_item';

class InviteIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchInvites();
  }

  render(){
    let InviteIndexItems;
    if (this.props.invites) {
      let invites = Object.values(this.props.invites);
      if (invites.length > 0) {
        if (invites.length > 25) {
          invites = invites.slice(0,24);
        }
        InviteIndexItems = invites.map((invite)=>{
          return <InviteIndexItem key = {invite.id} invite={invite} />;
        });
      }
    }
    return(
      <div className="col-lg-6 col-sm-12">
        <h3>RSVP List</h3>
        <div className="app-container">
          {InviteIndexItems}
        </div>
      </div>
    );
  }

}

export default InviteIndex;
