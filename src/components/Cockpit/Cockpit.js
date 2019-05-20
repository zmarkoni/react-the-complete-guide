import React from 'react';

const cockpit = ( props ) => {
    const buttonStyle = {
              backgroundColor: 'lightBlue',
              border:'1px solid blue',
              padding: '8px',
              cursor: 'pointer'
            };

    return (
        <div>
            <h1>React complete guide</h1>
            <button style={buttonStyle}
                    onClick={props.toggle}>
                    {props.showPersons ? 'hide' : 'show'} persons
            </button>
        </div>
    )
};

export default cockpit;