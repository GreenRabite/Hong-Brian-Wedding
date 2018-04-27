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
    console.log(this.state);
    let fname = this.state.firstName;
    let lname = this.state.lastName;
    this.props.fetchSearchInvites({fname,lname});
  }

  handleUpdate(field){
    return (e) => {
      console.log(e.target.value);
      this.setState({ [field]: e.target.value});
    };
  }

  render(){
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
          <button onClick={this.handleSubmit}>Search</button>
        </form>
      </div>
    );
  }
}

export default InviteSearchBar;
