import React from 'react';

const userInput = (props) => {

    const style = {
        color: 'red',
        fontSize: '16px'
    }
    return (
        <div className="UserInput">
            <input 
              style={style}
              type="text"
              onChange={props.changeName}
              value={props.name}
            />
        </div>
    )
}

export default userInput;