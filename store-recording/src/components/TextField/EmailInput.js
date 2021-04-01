import React from 'react';

import './styles.css';
import TextInput from './TextInput';

export default function EmailInput(props) {
    return (
        <TextInput 
            type="text"
            value={props.value}
            className="__email-input"
            placeholder={props.placeholder}
            handleChange={props.handleChange}
        />
    )
}