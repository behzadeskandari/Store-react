import React, { Component } from 'react';
 
export default class Default extends Component {
    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3"> 404</h1>
                        <h2>ارور</h2>
                        <h3>page not found</h3>
                        <h2>صفحه مورد نظر یافت نشد</h2>
                        <span className="text-danger">
                            <span>{this.props.location.pathname}</span>
                            <br/>
                            <span>was not found</span>
                            <p>
                                مسیر مورد نظر شما یافت نشد از مسیر درست اطمینان
                                حاصل فرمایید
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
 