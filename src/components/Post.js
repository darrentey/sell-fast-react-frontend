import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            successMessage: '',
            title:'',
            description:'',
            user_id:'',
    }}

    post = e => {
        e.preventDefault();
        axios.post('https://flask-backend-sellfast.herokuapp.com/product', {
            title:this.state.title,
            description:this.state.description,
            user_id:this.state.user_id            
        },{
            headers:{
                'x-access-token':localStorage.getItem('session')}
        })
        .then(res => {
            this.setState({successMessage: res.data['message']});
        }) 
    }

    render() {
        return (
            <div className="container">
                <span className="success">{this.state.successMessage}</span>
                <h2>Product Posting</h2>
                <div>
                    <form className="form-group">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="title"
                            name="title"
                            onChange={event => this.setState({title:event.target.value})}
                            required
                        />
                        <input 
                            className="form-control"
                            type="text"
                            name="description"
                            placeholder="description"
                            onChange={event => this.setState({description:event.target.value})}
                            required
                        />
                        <input 
                            className="form-control"
                            type="text"
                            name="user id"
                            placeholder="user id"
                            onChange={event => this.setState({user_id:event.target.value})}
                            required
                        />
                
                        <button onClick={(e) => this.post(e)}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post;