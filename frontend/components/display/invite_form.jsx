import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class InviteForm extends React.Component{
  constructor(props){
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      didUpdate : false
    };
  }

  componentDidMount(){
    this.props.fetchInvite(this.props.match.params.inviteId);
  }

  handleUpdate(field){
    console.log(field);
    return (e) => {
      this.setState({ [field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let invite = this.props.invite;
    invite = merge({},invite,this.state);
    this.props.updateInvite(invite).then(()=>this.setState({didUpdate:true}));
  }

  render(){
    if (!this.props.invite) {
      return null;
    }else {
      const invite = this.props.invite;
      let OptionItems = [];
      for (let i = 0; i <= invite.capacity; i++) {
          OptionItems.push(
            <option key={i} value={i}>{i}</option>
          );
      }
      let updateMsg =
        <div id="updateMsg">
          <h4>Your choice has been updated successfully! Thank you!</h4>
          <Link to="/"><h4>Go Back To Main Page Here</h4></Link>
        </div>;
      let plusOneLabel = <label>Plus One Name</label>;
      let plusOne =
          <input onChange={this.handleUpdate('plusone')}
                 value={this.state.plusone}/>;
      let plusOneBtn;
      if (this.props.invite.plus_one_bool) {
        plusOneBtn = <div className="btn" id="btn-round" onClick={(e)=>this.handleSubmit(e)}>Update</div>;
      }else {
        plusOneBtn = <div className="btn"
                          onClick={(e)=>this.handleSubmit(e)}>Update</div>;
      }
      return(
        <div>
          <form id="rsvp-form" onSubmit={this.handleSubmit}>
            <h3>{`${invite.username}`}</h3>
            <h3>{this.props.invite.plusone ? `${invite.plusone}` : ''}</h3>
            <label>Attending</label>
            <select onChange={this.handleUpdate("attending")} defaultValue={this.props.invite.attending}>
              {OptionItems}
            </select>
            {this.props.invite.plus_one_bool ? plusOneLabel : ''}
            <div className="form-value">
              <div className="form-btn-container">
                {this.props.invite.plus_one_bool ? plusOne : ''}
                {plusOneBtn}
              </div>
            </div>
          </form>
          {this.state.didUpdate ? updateMsg : ""}
        </div>
      );
    }
  }
}

export default InviteForm;
