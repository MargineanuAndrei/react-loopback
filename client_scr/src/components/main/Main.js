import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Meetups from '../meetups/Meetups';
import About from '../about/About';
import MeetupDetails from '../meetups/Meetupdetails';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Meetups}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/meetups/:id' component={MeetupDetails}/>
    </Switch>
  </main>
)

export default Main;
