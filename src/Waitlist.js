import {MoneyGraphic} from './graphics';
import React from 'react';
import './Waitlist.css';


class Waitlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    //submit to server
    if (this.state.email !== ''){
      this.props.onSubmit(this.state.email);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className = "waitlist">
            <h1 className="instant">Instant prizes for every time you shop</h1>

            <h2 className="stop">Stop spending months for a $10 giftcard</h2>

            <MoneyGraphic />
            <h2 id="win_tesla">Win a Tesla and up to $50,000</h2>
            <form onSubmit={this.handleSubmit}>
              <input id="email_input" placeholder="Enter Email Address" value={this.state.email} onChange={this.handleChange}/>
              <button id="submit_button" type="submit" value="Submit" disabled={this.state.email===''}>Get Early Access</button>
            </form>
          </div>
        </header>
      </div>
    );
  }
}
export default Waitlist;