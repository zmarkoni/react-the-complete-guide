import React from 'react';

// https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/13556330#overview

// this is Higher order component which will just render div with class
// Basically Higher order component wrap some other component with some functionality
// For example error handling for Https calls

// Second way of writing HOC component
// Here we have a function which return function
// Lowercase first letter means it is regular function
const withClass = (WrappedComponent, className) => {
    return (props) => (
        // here we return directly JSX
        <div className={className}>
            <WrappedComponent/>
        </div>
    );
};

export default withClass;