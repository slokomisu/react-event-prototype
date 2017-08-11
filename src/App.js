import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import axios from 'axios';
import EventList from './components/EventList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      events: null
    }

  



  } 

  loginUser = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      this.setState({user: result.user});
      localStorage.setItem('access_token', result.credential.accessToken);
      console.log(result);
    } catch (error) {
      console.log(error);
    }

  }

  logoutUser = async () => {
    try {
      await firebase.auth().signOut();
      localStorage.removeItem('access_token');
      console.log('signed out')
    } catch (error) {
      console.log(error)
    }
  }

  getEvents = async () => {
    try {
      const token = localStorage.getItem('access_token')
      const { data } = await axios.get(`https://graph.facebook.com/v2.10/me/events?access_token=${token}`);
      this.setState({events: data.data});
    } catch (error) {
      console.log(error);
    }
  }

  getUser = () => {
    if (firebase.auth().currentUser) {
      this.setState({user: firebase.auth().currentUser});
    }
    console.log(this.state.user);
  } 



  render() {
    return (
      <div>
        <img src={this.state.user ? this.state.user.photoURL : ''} alt=""/>
        <button onClick={this.loginUser}>Login</button>
        <button onClick={this.logoutUser} >Logout</button>
        <button onClick={this.getEvents}>Get Events</button>
        <button onClick={this.getUser}>Get User</button>
        <h3>Event List</h3>
        {this.state.events && <EventList events={this.state.events} />}
      </div>
    );
  }
}

export default App;
