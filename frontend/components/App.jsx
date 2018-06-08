import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

import InviteIndexContainer from './display/invite_index_container';
import InviteSearchContainer from './display/invite_search_container';
import InviteFormContainer from './display/invite_form_container';

const App = () => {
  return(
    <div>
      <div>
        <Route path="/" component={InviteSearchContainer}/>
      </div>
      <div className="col-lg-6 col-sm-12">
        <Route exact path="/" component={InviteIndexContainer}/>
        <Route exact path="/intro" component={InviteIndexContainer}/>
        <Route exact path="/story" component={InviteIndexContainer}/>
        <Route exact path="/service" component={InviteIndexContainer}/>
        <Route exact path="/rsvp" component={InviteIndexContainer}/>
        <Route exact path="/registry" component={InviteIndexContainer}/>
        <Route exact path="/gallery" component={InviteIndexContainer}/>
        <Route exact path="/rsvp/:inviteId" component={InviteFormContainer}/>
      </div>
    </div>
  );
};

export default App;
