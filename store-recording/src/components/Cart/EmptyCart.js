import React from 'react';
import PropTypes from 'prop-types';
 
export default function EmptyCart(){
    return (
        <div className="container mt-5">
            <div className="col-10 mx-auto text-center text-title">
                <h1>سبد خرید شما خالی میباشد</h1>
            </div>
        </div>
    );
}
 
EmptyCart.propTypes = {};
 