import React, { useState } from 'react';
import './style.css';
export default function Formvalidation({}) {
   const formDefaultValues = {
       email :"",
       fullName : ""
   }
   const formDefaultErrors = {
       email :[],
       fullName : []
   }
   
   const [formValues , setFormValues] = useState(formDefaultValues)
    const [email,setEmail] = useState('');
    const [fullname, setFullName] = useState('');

    const [formErrors, setFormErrors] = useState(formDefaultErrors);
   const { email , fullName } = formValues;

    useEffect(() => {
        console.dir({
            email,
            fullName
        })
        return () => {
            email, fullName;
        }
    }, [email,fullName])


    useEffect(() => {
        console.dir("ComponentDidMount")
    }, [])

    function handleChange(e) {
           const target = e.target;
           setFormValues((prevState) => ({
               ...prevState,
               [e.target.value]: e.target.value,
           }));
           handleValidations(target, validators)
    }

    function handleValidations(target, validators) {
        validators.foreach(validation => {
            const result = validation(target.value)
            const errors = formErorrs[target.name];
            if(result.valid){
                    if(errors.include(result.message)){
                            setFormErrors(prevState => ({
                                ...prevState,
                                [target.name]: errors.filter(error => error !== result.message)
                            }))
                    }  
            }else{
                    if (errors.include(result.message)) {
                        setFormErrors((prevState) => ({
                            ...prevState,
                            [target.name]: [...errors,result.message]
                            
                        }));
                    }  
                
            }
        })
    }

    function noBlanks(value) {
        return {
            valid: value.replace(/\+s/,"").length > 0,
            message: 'نمیتواند خالی باشد '
        }
    }

function validEmail() {
    return {
        valid : value.split("@").length > 1,
        message : "must be a valid email"
    }
}


    return (
        <div>
            <div>
                <input
                    type="text"
                    value={email}
                    name={'email'}
                    onChange={(e) => {
                        handleChange(e, [noBlanks, validEmail]);
                    }}
                    placeholder={props.placeholder}
                />
                {formErrors['email'][0] ? (
                    <span>{formErrors['email'][0]}</span>
                ) : null}
                <div>
                    <input
                        type="text"
                        value={fullname}
                        name={'fullname'}
                        onChange={(e) => {
                            handleChange(e, [noBlanks]);
                        }}
                        placeholder={props.placeholder}
                    />
                    {formErrors['fullName'][0] ? (
                        <span>{formErrors['fullName'][0]}</span>
                    ) : null}
                </div>
            </div>
        </div>
    );
}