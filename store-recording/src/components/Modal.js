import React, { Component } from 'react';
 import styled from 'styled-components';
 import {ProductConsumer} from '../context/context';
 import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() { 
        return (
            <ProductConsumer>
                {(value) => {
                        const {modalOpen, closeModal} = value;
                        const {img , title , price} = value.modalProduct;
                        if(!modalOpen){
                            return null;
                        }
                        else
                        {
                            return (
                                <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                            <div
                                                id="modal"
                                                className="col-8 mx-auto col-md-6 col-lg-4 pb-2 text-center text-capitalize"
                                            >
                                                <h4 className="pt-2">اضافه کردن به سبد</h4>
                                                <img
                                                    src={img}
                                                    className="img-fluid"
                                                    alt="product"
                                                />
                                                <h5>{title}</h5>
                                                <h6 className="text-muted">
                                                    قیمت : ریال {price}
                                                </h6>
                                                <Link to="/">
                                                    <ButtonContainer
                                                        onClick={() =>
                                                            closeModal()
                                                        }
                                                    >
                                                      ادامه خرید
                                                    </ButtonContainer>
                                                </Link>
                                                <Link to="/cart">
                                                    <ButtonContainer cart
                                                        onClick={() =>
                                                            closeModal()
                                                        }
                                                    >
                                                        رفتن به سید خرید 
                                                    </ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ModalContainer>
                            );
                        }
                }}

            </ProductConsumer>
        );
    }
}
 
const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    .img-fluid{
        padding: 10px;
    }
     #modal {
        background: var(--mainWhite);
        border-radius: 6px;
    }
`;