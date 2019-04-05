import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.svg";

var showHTML;

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHTML
        }
        this.load();
    }

    load = () => {
        const loggedin_HTML = [
            <li className="nav-item">
                <Link to="signin" className="nav-link">
                Sign In
                </Link>
            </li>,
    
            <li className="nav-item">
                <Link to="signup" className="nav-link">
                Sign Up
                </Link>
            </li>];
    
            const normal_HTML = (
            <li className="nav-item">
                <a href="#" className="nav-link" onClick={this.logout}>
                Logout
                </a>
            </li>);
    
                // to check whether there is token in session
            if(localStorage.getItem('session') != null){
                showHTML = normal_HTML;
            }else{
                showHTML = loggedin_HTML;
            }
    }

    logout(e){
        e.preventDefault();
        localStorage.removeItem('session');

    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"></img>
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Homepage
                        </Link>
                    </li>
                        <Link to="/post" className="ml-auto">
                            <button className="nav-button">
                                <span>
                                     Post
                                </span>   
                            </button>
                        </Link>
                        {showHTML}
                </ul>
            </nav>
        );
    }
}

export default Navbar;