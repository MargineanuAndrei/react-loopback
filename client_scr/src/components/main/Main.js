import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Meetups from '../meetups/Meetups';
import About from '../about/About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Meetups}/>
      <Route exact path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main;
