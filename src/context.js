// 

import React, { Component } from 'react';



const ProductContext = React.createContext();
// Provider (Provide all information)
// Consumer

class ProductProvider extends Component {

    render() {
        return (
            <ProductContext.Provider value="hello from contex">
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};