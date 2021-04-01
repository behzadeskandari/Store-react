import React from 'react';
import PropTypes from 'prop-types';
 import {withRouter} from 'react-router-dom';

 function goto({ history }, step) {
     //    window.location.href = `/step-${step}`;
     history.pushState(`/step-${step}`);
 }
export default function CartColumns(){

    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div classname="row">
                <div className="col-10 col-sm-12 col-md-12  mx-auto col-lg-12">
                    <span className="text-uppercase col-sm-2 col-md-2 col-lg-2">
                        نوع کلا
                    </span>
                    <span className="text-uppercase col-sm-2 col-md-2 col-lg-2">
                        اسم کالا
                    </span>
                    <span className="text-uppercase col-sm-2 col-md-2 col-lg-2">
                        مبلغ
                    </span>
                    <span className="text-uppercase col-sm-2 col-md-2 col-lg-2">
                        مقدار
                    </span>
                    <span className="text-uppercase col-sm-2 col-md-2 col-lg-2">
                        پاک کردن
                    </span>
                    <span className="text-uppercase col-sm-2 col-md-2 col-lg-12">
                        جمع کل
                    </span>
                </div>
            </div>
            <button onClick={() => goto(2)}>step2</button>
        </div>
    );
};
 
CartColumns.propTypes = {};
 
