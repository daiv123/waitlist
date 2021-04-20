import React from 'react';
import './WaitlistQueue.css';
class WaitlistQueue extends React.Component {
  getMessage(){
    if(this.props.exists){
      return "You are already in the sign up queue";
    }
    else {
      return "We've added you to the sign up queue";
    }
  }
  render() {
    let message=this.getMessage();
    return (
      <div className="App">
        <header className="App-header">
          <div className = "waitlist_queue" >
            <h1 class="thank">Thank You!</h1>
            <h2 class="added">{message}</h2>
            <QueuePosition number={this.props.rank} email={this.props.email} onNotYou={this.props.onNotYou} />
          </div>
        </header>
      </div>
    );
  }
}
export default WaitlistQueue;

function QueuePosition(props) {
  return (
    <div class="queue_position_div">
      <p class="people">People ahead of you</p>
      <p class="number">{props.number.toLocaleString()}</p>
      <p class="email">{props.email}</p>
      <p class="notyou" onClick={props.onNotYou}>Not you?</p>
    </div>
  );
}

