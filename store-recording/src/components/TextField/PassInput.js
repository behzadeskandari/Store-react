import React from 'react';
import { strengthIndicator } from '../PasswordIndicator/strength';

import './styles.css';
import TextInput from './TextInput';
export default function PassInput(props) {
    const strength = strengthIndicator(props.value)
    const colro = strengthColor(strength);
    return (
        <TextInput
            type="password"
            value={props.value}
            className="__password-input"
            placeholder={props.placeholder}
            handleChange={props.handleChange}
            style={{
                border : `1px solid ${color}`
            }}
        />
    );
}
