import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
import { Link} from 'react-router-dom';
import axios from 'axios';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            title:'',
            description:'',
            product_id:'',
            successMessage: '',
            items: [],
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/product', {
        }).then(res => {
            //successful
            this.setState({items:res.data['products']});
        })
    }


    delete = e => {
        e.preventDefault();
        axios.delete('http://127.0.0.1:5000/product/'+this.state.product_id, {
            product_id: this.state.product_id,
        }).then(res => {
            //successful
            this.setState({successMessage: res.data['message']});    
        })
    }
    render() {
        
        var arr = [];
        Object.keys(this.state.items).map(
            i => arr.push(this.state.items[i])
        );

        console.log(arr);
        return (
            <div className="container">
                <h2>HomePost</h2>
                {arr.map(item => <MyAppChild key={item.label} date_posted={item.date_posted} title={item.title} description={item.description} user_name={item.user_name} product_id={item.product_id} />)}
                <form onSubmit={this.handleSubmit}>
                <label>
                    Product:
                    <input tpye="number" name="id" onChange={event => this.setState({product_id:event.target.value})}></input>
                    <button className="btn btn-danger" type="button" onClick={(e) => this.delete(e)}>Delete</button>
                </label>
            </form>
            </div>
        );
    }
}

class MyAppChild extends React.Component {

    render() {
        return (
            <div className="container">
                <Card>
                    <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardText>{this.props.description}</CardText>
                    <CardText>{this.props.product_id}</CardText>
                    <CardLink>{this.props.user_name}</CardLink>
                    <CardLink>{this.props.date_posted}</CardLink>
                    </CardBody>
                    
                    <Link to={'/update'}>
                    <button>Edit</button>
                    </Link>

                </Card>
            </div>
        );
    }
}

export default Homepage;