import React from 'react';
import InviteIndexItem from './invite_index_item';

class InviteIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount(){
    this.props.fetchInvites();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillMount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){
    let InviteIndexItems;
    if (this.props.invites) {
      let invites = Object.values(this.props.invites);
      if (invites.length > 0) {
        if (invites.length > 25 && this.state.width > 500) {
          invites = invites.slice(0,24);
        }else if (invites.length > 15 && this.state.width < 500) {
          invites = invites.slice(0,14);
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
