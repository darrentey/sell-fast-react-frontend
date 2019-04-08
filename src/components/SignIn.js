import React, { Component } from 'react';
import { Link  , Redirect} from 'react-router-dom';
import axios from 'axios';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            password:'',
            redirect: false
        }
    }

    signIn = e => {
        e.preventDefault();
        axios.get('https://flask-backend-sellfast.herokuapp.com/login', {
            auth: {
                username: this.state.name,
                password: this.state.password
            }    
        
        })
        // store token in session
        .then(res => {
            localStorage.setItem('session', res.data['token']);
            localStorage.setItem('user_id', res.data['id']);
            this.setState({redirect: true});
        })
    }
    

    render() {
        if(this.state.redirect){
            localStorage.setItem('reload_home', true);
            return (<Redirect to={"/homepage"}/>)
        }
        return (
            <div className="container">
                <h2>Sign In</h2>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="name"
                        onChange={event => this.setState({name:event.target.value})}
                    />
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={event => this.setState({password:event.target.value})}
                    />
                    <button className="btn btn-primary" type="button" onClick={(e) => this.signIn(e)}>
                        Sign In
                    </button>
                    <div>
                        <Link to={'/signup'}>Sign Up instead ?</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
