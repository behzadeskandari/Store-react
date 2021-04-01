import React, { useState } from 'react';
import CheckBox from '../checkbox';
import DropDown from '../dropdown';
import EmailInput from '../FormValidation';
import TextField from '../TextField/index';


const defaultValues = {
    name: '',
    email: '',
};

const defaultErrors = {
    name: [],
    email: [],
};

function isRequired(val) {
        return val.length > 0 ? '' : 'نمیتواند خالی باشد'
}

function isEmail(val) {
    const ai = val.indexOf("@")
    const gdi = val
    .split("")
    .reduce((acc , char , i ) => char === "." ? i : acc, 0);
    return ai > -1 && gdi > ai ? '' : "باید ایمیل وارد کنید"
}

function CustomComponentExample () {
    state = { 

     }
     
    const [value, setValue] = useState(defaultValues);
    const [errors, setErrors] = useState(defaultErrors)
    const [inputchange, setinputChange] = useState(); 

    ///check box
    const [checked , setChecked] = useState(false)
    const HandleChange = (event) => {
        setinputChange({ email: event.target.value });
    };
        return (
            
            <div className={`custom`}>
                <DropDown></DropDown>
                <TextField
                    value={value.name}
                    onChange={(val) => {
                        const name = val;
                        setValue((prev) => ({
                            ...prev,
                            name,
                        }));
                    }}
                    validations={[isRequired]}
                    errors={errors.name}
                    setErrors={setErrors}
                ></TextField>
                <TextField
                    value={value.email}
                    onChange={(val) => {
                        const name = val;
                        setValue((prev) => ({
                            ...prev,
                            email,
                        }));
                    }}
                    validations={[isRequired, isEmail]}
                    errors={errors.email}
                    setErrors={setErrors}
                ></TextField>

                <CheckBox
                    Checked={Checked}
                    onChange={(val) => setChecked(val)}
                    label={'Count Me In'}
                ></CheckBox>

                {/* <EmailInput
                    value={state.email}
                    placeholder="your email address"
                    onChange={props.HandleChange}
                /> */}
            </div>
        );
    
}
 
export default CustomComponentExample;