import React from 'react';

const cockpit = ( props ) => {
    const buttonStyle = {
        backgroundColor: 'green',
        color: 'white',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    props.showPersons ? buttonStyle.backgroundColor = 'red' : buttonStyle.backgroundColor= 'green';

    return (
        <div>
            <h1>React complete guide</h1>
            <button style={buttonStyle}
                    onClick={props.toggle}>
                    toggle persons
            </button>
        </div>
    )
};

export default cockpit;