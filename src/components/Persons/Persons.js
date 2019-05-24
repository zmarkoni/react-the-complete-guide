import React, {Component} from 'react';
import Person from './Person/Person';

//const persons = (props) => props.persons.map((person, index) => {

class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     // use only if we have state in this component
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     // will be removed in new React Versions react-scrips:3.0.0
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // here we need to return true or false if we want to allow React to continue
        // usually we compare props here or state
        console.log('[Persons.js] shouldComponentUpdate');
        // pay attention here when we compare objects and arrays which are reference type
        // means they have pointers to object/array so when we work with this, we need to
        // make sure to create new array/object when assign new values to it's properties
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }

    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        // got to catch user scroll, so we can go back to same position when re-render component
        // usually we store coordinates
        return {message: 'Snapshot'};
    }

    // componentWillUpdate() {
    //     // will be removed in new React Versions react-scrips:3.0.0
    //     console.log('[Persons.js] componentWillUpdate');
    // }

    // Than render() is called

    componentDidUpdate(previousProps, previousState, snapShot) {
        console.log('[Persons.js] componentDidUpdate', snapShot);
        // got for http requests,
        // do not update state here, only in callback of promise/request is ok to update state!
        // to not went in infinite loop
    }

    // for cleanUp will run right before component is removed
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return (
            this.props.persons.map((person, index) => {
                return (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        changeOnInput={(event) => this.props.changed(event, person.id)}
                        customClick={() => this.props.clicked(index)}
                    />
                )
            })
        )
    };

}

export default Persons;
//export default persons;