import {MoneyGraphic, SwipesGraphic} from './graphics';
import React from 'react';


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
    if (this.state.email != ''){
      alert(this.state.email);
      this.props.onSubmit(this.state.email);
    }
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <SwipesGraphic />
          <h1>Instant prizes for everyday shopping</h1>

          <h2>Stop spending months for a $10 giftcard</h2>

          <MoneyGraphic />
          <form onSubmit={this.handleSubmit}>
            <input id="email_input" placeholder="Enter Email Address" value={this.state.email} onChange={this.handleChange}/>
            <button id="submit_button" type="submit" value="Submit">Get Early Access</button>
          </form>
          
          
        </header>
      </div>
    );
  }
}
export default Waitlist;