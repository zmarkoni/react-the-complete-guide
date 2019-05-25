import React from 'react';
// this is Higher order component which will just render div with class

// Basically Higher order component wrap some other component with some functionality
// Usually to add Styles, HTML, or JS logic
// For example error handling for Https calls

// Uppercase first letter means it is component
const WithClass = props => (
    // here we return directly JSX
    <div className={props.classes}>
        {props.children}
    </div>
);

export default WithClass;