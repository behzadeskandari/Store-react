import React, { Fragment, Component } from 'react';
import Product from './Product';
import Title from './Title';
import { StoreProducts } from '../data';
import { ProductConsumer } from '../context/context';

export default class ProductList extends Component {
    state = {
        products: StoreProducts,
    };

    render() {
        console.log(this.state.products);
        return (
            <Fragment>
                <Title name="our" title="products" />
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map((product) => {
                                        return (
                                            <Product
                                                key={product.id}
                                                product={product}
                                            />
                                        );
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
