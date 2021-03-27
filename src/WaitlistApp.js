import Waitlist from './Waitlist';
import WaitlistQueue from './WaitlistQueue';
import React from 'react';

export default class WaitlistApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {page: 0, email: ''};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNotYou = this.handleNotYou.bind(this);
    }
    handleSubmit(m) {
      this.setState({page: 1, email: m});
    }
    handleNotYou(m) {
      this.setState({page: 0, email: ''});
    }
    
    render() {
      if (this.state.page === 0) {
        return (<Waitlist onSubmit={this.handleSubmit} />);
      }
      else {
        return (<WaitlistQueue email={this.state.email} onNotYou={this.handleNotYou} />);
      }
    }
  }
  
  