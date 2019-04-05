import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            successMessage: '',
            title:'',
            description:'',
            product_id:''
    }}

    update = e => {
        e.preventDefault();
        axios.put('http://127.0.0.1:5000/product/'+this.state.product_id, {
            product_id: this.state.product_id,
            title:this.state.title,
            description:this.state.description
        }).then(res => {
            //successful
            this.setState({successMessage: res.data['message']});    
        })
    }

    render() {
        return (
            <div className="container">
                <span className="success">{this.state.successMessage}</span>
                <h2>Update Product</h2>
                <div>
                    <form className="form-group">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="product id"
                            name="product id"
                            onChange={event => this.setState({product_id:event.target.value})}
                            required
                        />
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
                
                        <button onClick={(e) => this.update(e)}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post;