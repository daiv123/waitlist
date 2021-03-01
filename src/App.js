
import './App.css';
import Waitlist from './Waitlist';
import WaitlistQueue from './WaitlistQueue';
import React from 'react';

function App() {
  return (
    <WaitlistApp />
  );
}

class WaitlistApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 0, email: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(m) {
    this.setState({page: 1, email: m});
    console.log(m);
  }
  
  render() {
    if (this.state.page === 0) {
      return (<Waitlist onSubmit={this.handleSubmit} />);
    }
    else {
      return (<WaitlistQueue email={this.state.email} />);
    }
  }
}


export default App;
