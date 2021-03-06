import React from 'react';

const Button=({secondary=false, classname="",children,onClick=()=>{}})=>{
    
    return (
        <div >
            <button className={`button ${secondary?'--secondary':'--primary'} ${classname} `} onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button;