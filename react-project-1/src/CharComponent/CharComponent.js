import React from 'react';

const charStyle = {
    backgroundColor: 'white',
    border: '1px solid black',
    color: 'black',
    display: 'inline-block',
    margin: '16px',
    padding: '16px',
    textAlign: 'center'
}

const charComponent = (props) => {
    return (
        <div style={charStyle} datatype-index={props.charIndex} onClick={props.click} >
            {props.char}
        </div>
    )
}

export default charComponent;