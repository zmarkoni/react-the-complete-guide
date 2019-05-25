import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css'

const cockpit = ( props ) => {

    const toggleBtnRef = useRef(null);

    // useEffect is React hook which combine all lifeCycle hooks
    // useEffect runs after RENDER
    // Can be used in components!!!
    // it runs for every update(every render)
    // We always need to pass function, and for second argument we pass data(props/state)
    // which we want to work with, and it will watch only changes for that data

    useEffect( () => {
        console.log('[Cockpit.js] useEffect');
        // So it runs when component is created, updated
        // Http request...
        //const timer = setTimeout(() => {
        // setTimeout(() => {
        //     alert('Saved data to the cloud');
        // }, 1000);
        toggleBtnRef.current.click();

        // It runs BEFORE the main useEffect, but AFTER (first) render cycle
        return () => {
            //clearInterval(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }

    }, [props.persons]); // will update now only when persons change! We can pass many second arguments[a,b,c]

    // Fire every time, since there is no second argument
    useEffect( () => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            // very useful to cancel something before component re-render,
            // works the same like shouldComponentUpdate()
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    // Fire only first time
    /*
    useEffect( () => {
        setTimeout(() => {
            alert('[Cockpit.js] useEffect first time only!');
        }, 1000);
    }, []);  // we can call it many times, if we pass empty array as second argument, than it will fire only first time
    */

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                    ref={toggleBtnRef}
                    className={btnClass}
                    onClick={props.toggle}>
                    toggle persons
            </button>
        </div>
    )
};

export default React.memo(cockpit);