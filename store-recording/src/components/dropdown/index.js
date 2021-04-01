import React, { useState } from 'react';  
import './dropdown.css'
export default function DropDown({countries}) {  
    const [isActive, setActive] = useState('false');
    const [isSelect, setSelect] = useState('false')

     const handleToggle = () => {
         setActive(!isActive);
         console.log('test is active')
     };

     const HandleSelect = () => {
        setSelect(!isSelect);
     }
    return (
        <div className="dropdown" onClick={(handleToggle, HandleSelect)}>
            <div className="control">
                <div
                    className={
                        isSelect
                            ? `selected-value `
                            : `selected-value ${countries.map(
                                  (country) => country.name
                              )}`
                    }
                >
                    {!isSelect
                        ? 'Select country'
                        : countries.map((country) => country.name)}
                </div>
                <div className="arrow"></div>
            </div>
            <div className={isActive ? 'options-Show' : 'options'}>
                {countries.map((country) => (
                    <div className={`option ${country.code}`}>
                        {country.name}{' '}
                    </div>
                ))}
            </div>
        </div>
    );

}

