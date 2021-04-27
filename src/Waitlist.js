import {MoneyGraphic} from './graphics';
import React from 'react';
import './Waitlist.css';


class Waitlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',emailIsValid:false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateEmail(email){
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase().trim());
  }
  handleChange(event) {
    let email = event.target.value;
    this.setState({email: String(email).toLowerCase().trim(), emailIsValid:this.validateEmail(email)});
  }

  handleSubmit(event) {
    //submit to server
    event.preventDefault();
    
    if (this.state.emailIsValid){
      this.props.onSubmit(this.state.email);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className = "waitlist">
            <h1 className="instant">Instant prizes for every time you shop</h1>

            <h2 className="stop">Stop spending months for a giftcard</h2>

            <MoneyGraphic />
            <h2 id="win_tesla">Win $30,000 in prizes & a trip to Hawaii</h2>
            <form onSubmit={this.handleSubmit}>
              <input id="email_input" placeholder="Enter Email Address" value={this.state.email} onChange={this.handleChange}/>
              <button id="submit_button" type="submit" value="Submit" disabled={!this.state.emailIsValid}>Get Early Access</button>
            </form>
          </div>
        </header>
      </div>
    );
  }
}
export default Waitlist;