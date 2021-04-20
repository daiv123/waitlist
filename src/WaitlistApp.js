import Waitlist from './Waitlist';
import WaitlistQueue from './WaitlistQueue';
import React from 'react';
import firebase from './firebase.js';


export default class WaitlistApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {page: 0, email: '', exists: false, rank: null};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNotYou = this.handleNotYou.bind(this);
    }
    handleSubmit(m) {
      const emails = firebase.database().ref('emails');
      let exists = false;
      emails.orderByChild("email").equalTo(m).get().then((snapshot) => {
        exists = snapshot.exists();
        console.log(snapshot.val());
        console.log(exists);
        if (!exists) {
          emails.orderByChild("rank").limitToLast(1).get().then((snapshot) => {
            let name = Object.keys(snapshot.val())[0];
            let rank = snapshot.val()[name].rank;
            console.log(rank);
            const data = {
              email: m,
              rank: rank+1
            };
            emails.push(data);
            this.setState({page: 1, email: m, rank: rank+1, exists: false});
          });
        }
        else {
          let name = Object.keys(snapshot.val())[0];
          let rank = snapshot.val()[name].rank;
          console.log(rank);
          this.setState({page: 1, email: m, rank: rank, exists: true});
        }
      });
      // emails.orderByChild("email").equalTo(m).once("value", snapshot => {
      //   exists = snapshot.exists();
      //   console.log(exists);
      //   if (!exists) {
      //     emails.orderByChild("rank").limitToLast(1).get("value", snapshot => {
      //       let name = Object.keys(snapshot.val())[0];
      //       let rank = snapshot.val()[name].rank;
      //       console.log(rank);
      //       const data = {
      //         email: m,
      //         rank: rank+1
      //       };
      //       emails.push(data);
      //       this.setState({page: 1, email: m, rank: rank+1, exists: false});
      //     });
      //   }
      //   else {
      //     let name = Object.keys(snapshot.val())[0];
      //     let rank = snapshot.val()[name].rank;
      //     console.log(rank);
      //     this.setState({page: 1, email: m, rank: rank, exists: true});
      //   }
      // });
    }
    handleNotYou(m) {
      this.setState({page: 0, email: ''});
    }
    
    render() {
      if (this.state.page === 0) {
        return (<Waitlist onSubmit={this.handleSubmit} />);
      }
      else {
        return (<WaitlistQueue email={this.state.email} rank = {this.state.rank} onNotYou={this.handleNotYou} exists={this.state.exists} />);
      }
    }
  }
  
  