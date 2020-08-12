import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.name}</p>
            <p>Paragraph 2</p>
        </div>
    )
}

export default userOutput;