import React from 'react';
import './WaitlistQueue.css';
class WaitlistQueue extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className = "waitlist_queue" >
            <h1 class="thank">Thank You!</h1>
            <h2 class="added">We've added you to the sign up queue</h2>
            <QueuePosition number={500000} email={this.props.email} />
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
    </div>
  );
}

