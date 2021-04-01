import React, {useState} from 'react';






export default function CheckBox({checked , onChange , label}) {
    return (    
            <div className="CheckBox">
                    <div className="border" onClick={() => onChange(!checked)}>
                        <div className={`indicator ${checked ? "checked" : ""}`}>

                        </div>
                    </div>
                    <div className="label">
                        {label}
                    </div>
            </div> 
    )

}