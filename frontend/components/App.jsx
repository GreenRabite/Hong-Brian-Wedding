import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

import InviteIndexContainer from './display/invite_index_container';

const App = () => {
  return(
    <div className="col-lg-6 col-sm-12">
      <Route path="/" component={InviteIndexContainer}/>
    </div>
  );
};

export default App;
