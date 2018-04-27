import React from 'react';

class InviteForm extends React.Component{
  constructor(props){
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(field){
    return (e) => {
      console.log(e.target.value);
      this.setState({ [field]: e.target.value});
    };
  }

  render(){
    return(
      <div>
        <form>
          <h3></h3>
          <select>
            <option></option>
          </select>
        </form>
      </div>
    );
  }
}

export default InviteForm;
