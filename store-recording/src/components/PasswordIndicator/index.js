import React from 'react';
import EmailInput from '../TextField/EmailInput';
import PassInput from '../TextField/PassInput';









class ContainerPassIndicator extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password :'',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event,attr){
        const newState = {...this.state}
        newState[attr]  = event.target.value
        this.setState( newState )    
        this.setState({email : event.target.value})
    }

    render(){
        return (
            <div>
                <EmailInput
                    value={this.state.email}
                    placeholder="your Email address"
                    handleChange={(e) => this.handleChange(e, 'email')}
                ></EmailInput>
                <PassInput
                    value={this.state.password}
                    placeholder="a secure password"
                    handleChange={(e) => this.handleChange(e, 'email')}
                ></PassInput>
            </div>
        );

    }


}