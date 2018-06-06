import React from 'react';
import { Link } from 'react-router-dom';

class InviteSearchBar extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let fname = this.state.firstName;
    let lname = this.state.lastName;
    this.props.fetchSearchInvites({fname,lname});
  }

  handleUpdate(field){
    return (e) => {
      this.setState({ [field]: e.target.value});
    };
  }

  render(){
    if (!this.props.match.isExact) {
      return(
        <div className="col-lg-6 col-sm-12">
          <Link to="/"><h4>Make another search</h4></Link>
        </div>
      );
    }else {
      return(
        <div className="col-lg-6 col-sm-12">
          <form>
            <div className="form-group rsvp-input">
              <label htmlFor="firstNameInput">First Name</label>
              <input type="text"
                onChange={this.handleUpdate("firstName")}
                className="form-control"
                id="firstNameInput"
                placeholder="John"
                value={this.state.firstName ? this.state.firstName : ""}/>
            </div>
            <div className="form-group rsvp-input">
              <label htmlFor="lastNameInput">Last Name</label>
              <input type="text"
                onChange={this.handleUpdate("lastName")}
                className="form-control"
                id="lastNameInput"
                placeholder="Smith"
                value={this.state.lastName ? this.state.lastName : ""}/>
            </div>
            <div className="btn" onClick={this.handleSubmit}>Search</div>
          </form>
        </div>
      );
    }
  }
}

export default InviteSearchBar;
