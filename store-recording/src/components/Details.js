import React, { Component } from 'react';
import { ProductConsumer } from '../context/context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    console.log(value.detailProduct);
                    const {
                        id,
                        company,
                        img,
                        info,
                        price,
                        title,
                        inCart,
                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img
                                        src={img}
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>نوع : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        <span className="text-uppercase"></span>

                                        <strong>
                                            قیمت : <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                       توضیحاتی در مورد محصول
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <Link to="/">
                                        <ButtonContainer>
                                           بازگشت به محصول
                                        </ButtonContainer>
                                        <ButtonContainer cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.AddToCart(id);
                                            }}
                                        >
                                            {inCart ? 'درسبد' : 'اضافه کن'}
                                        </ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}
