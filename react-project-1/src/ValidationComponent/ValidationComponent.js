import React from 'react';

const validationComponent = (props) => {
    let validationMessage = null;

    if( props.inputCount < 5 ) {
        validationMessage = 'Text too short';
    } else if( props.inputCount > 12 ) {
        validationMessage = 'Text too long';
    } else {
        validationMessage = null;
    }

    return (
        <div>
            <p>{props.inputCount}</p>
            <p>{validationMessage}</p>
        </div>
    )
}

export default validationComponent;