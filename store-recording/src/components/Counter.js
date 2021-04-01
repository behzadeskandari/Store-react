import React, { Component } from 'react';
import {connect} from 'react-redux';
import DropDown from './dropdown';
import countries from '../data/countries.json'
import * as CalendarContainer from './CalendarContainer';
import Logger from './ErrorLogger/logger';

export class Counter extends Component {
           constructor(props) {
               super(props);
               
           }

        //    callCall() {
        //        Logger`this is a sample :${(<CalendarContainer />)}`; // ${v} and antoher ${o}`;
        //        try {
        //           // return (<CalendarContainer></CalendarContainer>);
        //            //nothing
        //        } catch (err) {
        //            Logger`caught: ${err}`;
        //        }
        //    }

           render() {
               return (
                   <div className="Counter">
                       <div className="age-label">
                           your Age <span>{this.props.age}</span>
                       </div>
                       <button onClick={this.props.onAgeUp}>Age Up</button>
                       <button onClick={this.props.onAgeDown}>Age Down</button>
                       <DropDown countries={countries}></DropDown>
                   </div>
               );
           }
       }
 
const  mapStateToProps = state => {
    return {
        age: state.age
    }
}
const  mapDispatchToProps = dispatch => {
    return {
        onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
        onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);