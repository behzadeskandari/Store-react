import React ,{Fragment} from 'react';
import PropTypes from 'prop-types';
 import {Link} from 'react-router-dom';
export default  function CartTotals(value) {
                    const {
                        cartSubTotal,
                        cartTax,
                        cartTotal,
                        clearCart,
                    } = value;
                    return (
                        <Fragment>
                            <div className="container">
                                <div className="row">
                                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right ">
                                        <Link to="/">
                                            <button
                                                className="btn btn-outline-danger text-uppercase mb-3 px-5 "
                                                type="button"
                                                onClick={() => clearCart()}
                                            >
                                               پاک کردن سبد خرید
                                            </button>
                                        </Link>
                                        <h5>
                                            <span className="text-title">
                                                مبلغ خرید ساب توتال :
                                            </span>
                                            <strong>${cartSubTotal}</strong>
                                        </h5>
                                        <h5>
                                            <span className="text-title">
                                                مالیات :
                                            </span>
                                            <strong>${cartTax}</strong>
                                        </h5>
                                        <h5>
                                            <span className="text-title">
                                                جمع:
                                            </span>
                                            <strong>${cartTotal}</strong>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    );                
                };
 
 