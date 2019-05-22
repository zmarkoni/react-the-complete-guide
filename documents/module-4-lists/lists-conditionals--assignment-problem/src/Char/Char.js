import React from 'react';

const char = (props) => {
    const charStyle = {
        display: 'inline-block',
        padding: '5px',
        textAlign: 'center',
        margin: '5px',
        border: '1px solid silver',
        minWidth: '8px',
        height: '18px',
        color: 'blue',
        verticalAlign: 'bottom'
    };

    return (
        <div style={charStyle} onClick={props.customClick}>
            {props.charLetter}
        </div>
    )
};

export default char;