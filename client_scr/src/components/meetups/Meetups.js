import React, {Component} from 'react';
import axios from 'axios';
class Meetups extends Component{

  constructor(){
    super();
    this.state ={
      meetups:[]
    }
  }

  componentWillMount(){
    this.getMeetuos();
  }

  getMeetuos(){
    axios.get('http://localhost:3000/api/meetups')
      .then(response => {
        this.setState({meetups:response.data}, ()=>{})
      })
  }

  render(){

    const meetupItems = this.state.meetups.map((meetup,i) => {
      return(
        <li>{meetup.name}</li>
      )
    })

    return(
      <div>
        <h1>Meetups</h1>
        <ul>
          {meetupItems}
        </ul>
      </div>
    )
  }
}

export default Meetups;
