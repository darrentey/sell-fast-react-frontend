import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.svg";

var showHTML;

class Navbar extends Component {

    state = {
        showHTML,
        refreshLogin: false
    }

    constructor(props) {
        super(props);
        this.load();
    }

    load = () => {
        const normal_HTML = [
            
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
    
            const loggedin_HTML = [
            <li><Link to="/post" className="ml-auto">
                <button className="nav-button">
                    <span>
                            Post
                    </span>   
                    </button>
            </Link></li>,
            <li className="nav-item">
                <a href="#" className="nav-link" onClick={this.logout}>
                Logout
                </a>
            </li>];
    
                // to check whether there is token in session
            if(localStorage.getItem('session') != null){
                showHTML = loggedin_HTML;
            }else{
                showHTML = normal_HTML;
            }

    }

    logout= (e) => {
        e.preventDefault();
        localStorage.removeItem('session');
        localStorage.removeItem('user_id');
        this.state.refreshLogin = true;
        window.location.reload();
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
                        {showHTML}
                </ul>
            </nav>
        );
    }
}

export default Navbar;