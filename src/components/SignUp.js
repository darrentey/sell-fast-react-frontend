import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            password:'',
            successMessage: ''
        }
    }

    signUp = e => {
        e.preventDefault();
        axios.post('https://flask-backend-sellfast.herokuapp.com/user', {
            name: this.state.name,
            password: this.state.password
        }).then(res => {
            //successful
            this.setState({successMessage: res.data['message']});  
        })
    }
    render() {
        return (
            <div className="container">
                <h2>Sign Up</h2>
                <span className="success">{this.state.successMessage}</span>
                <form className="form-group">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="name"
                        onChange={event => this.setState({name:event.target.value})}
                        required
                    />
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={event => this.setState({password:event.target.value})}
                        required
                        minLength="8" maxLength="21"
                    />
                    <button className="btn btn-primary" type="button" onClick={(e) => this.signUp(e)}>
                        Sign Up
                    </button>
                    <div>
                        <Link to={'/signin'}>Already a user? Sign In instead</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;