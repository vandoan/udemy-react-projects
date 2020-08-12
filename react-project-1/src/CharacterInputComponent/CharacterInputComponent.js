import React from 'react';

const characterInputComponent = (props) => {
    
    return (
        <div>
            <input 
              onChange={props.countInput}
              value={props.inputValue}
            />
            <p></p>
        </div>

    )

}

export default characterInputComponent;