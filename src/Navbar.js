import { BoojLogo} from './graphics';
import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import {NavLink} from 'react-router-dom';
import './Navbar.css';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {
        return (
            <div id="navbar">
                <div id="booj_div">
                    <BoojLogo />
                </div>
                <div id="burger_div">
                    <HamburgerMenu
                        isOpen={this.state.isOpen}
                        menuClicked={this.handleClick}
                        width={18}
                        height={15}
                        strokeWidth={2}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </div>
                <Sidemenu isOpen={this.state.isOpen} handleClick={this.handleClick}/>
            </div>
        )
    }
}

class Sidemenu extends React.Component {
    render() {
        var visability = (this.props.isOpen  ? "show" : "hide");
        return(
            <div id="sidemenu_panel" className={visability} >
                <div className="vertical-menu">
                    <NavLink to="/waitlist" activeClassName="active" onClick={this.props.handleClick}>
                        Waitlist
                    </NavLink>
                    <NavLink to="/faq" activeClassName="active"  onClick={this.props.handleClick}>
                        FAQ
                    </NavLink>
                    <NavLink to="/termsandprivacy" activeClassName="active"  onClick={this.props.handleClick}>
                        Terms/Privacy
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;
