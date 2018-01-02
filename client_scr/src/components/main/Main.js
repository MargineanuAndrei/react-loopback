import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Meetups from '../meetups/Meetups';
import About from '../about/About';
import MeetupDetails from '../meetups/Meetupdetails';
import AddMeetup from '../meetups/Addmeetup';
import EditMeetup from '../meetups/Editmeetup';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Meetups}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/meetups/add' component={AddMeetup}/>
      <Route exact path='/meetups/edit/:id' component={EditMeetup}/>
      <Route exact path='/meetups/:id' component={MeetupDetails}/>
    </Switch>
  </main>
)

export default Main;
