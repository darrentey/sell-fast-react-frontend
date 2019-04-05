import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import { stringify } from 'querystring';

class Homepage extends Component {
        state = {
            products: [],
            product_id:'',
            refresh: false
        }

        constructor(props) {
            super(props);
        }

    componentDidMount(){
        axios.get('http://localhost:5000/product').then((response) => {
            console.log(response.data)
            this.setState({
                products: response.data.products
            })
        });
    }

    delete = (e, id) => {
        e.preventDefault();
        axios.delete('http://127.0.0.1:5000/product/'+id, {
            product_id: id,
            headers:{
                'x-access-token':localStorage.getItem('session')}
        }).then(res => {
            //successful
            this.setState({successMessage: res.data['message']});   
            this.setState({refresh: true});
        })
    }

    render() {
        if(this.state.refresh || localStorage.getItem('reload_home') == 'true'){
            this.setState({refresh: false});
            localStorage.removeItem('reload_home');
            window.location.reload();
        }
        let products = this.state.products.map((product) => {

            if (product.user_id == localStorage.getItem('user_id')){
                return (
                    <Card key={product.id}>
                        <CardBody>
                        <CardTitle>{product.title}</CardTitle>
                        <CardSubtitle>Product ID: {product.id}</CardSubtitle>
                        </CardBody>
                        {product.image_file}
                        <CardBody>
                        <CardText>{product.description}</CardText>
                        <CardLink>{product.user_name}</CardLink>
                        <CardLink>{product.date_posted}</CardLink>
                        </CardBody>
                        
                        <Link to={'/update'}>
                        <button>Edit</button>
                        </Link>
                        <button className="btn btn-danger" type="button" onClick={(e) => this.delete(e, product.id)}>Delete</button>
                    </Card>
                )
            }else{
                return (
                    <Card key={product.id}>
                        <CardBody>
                        <CardTitle>{product.title}</CardTitle>
                        <CardSubtitle>Product ID: {product.id}</CardSubtitle>
                        </CardBody>
                        {product.image_file}
                        <CardBody>
                        <CardText>{product.description}</CardText>
                        <CardLink>{product.user_name}</CardLink>
                        <CardLink>{product.date_posted}</CardLink>
                        </CardBody>
                    </Card>
                )
            }

        });

    return (
        <div className="container">
            {products}
            <label>
                    Product:
                    <input tpye="number" name="id" onChange={event => this.setState({product_id:event.target.value})}></input>
                    <button className="btn btn-danger" type="button" onClick={(e) => this.delete(e, this.state.product_id)}>Delete</button>
            </label>
        </div>
        );
    }
}

export default Homepage;
