import React, {Component} from 'react';
import Person from './Person/Person';

//const persons = (props) => props.persons.map((person, index) => {

class Persons extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        // use only if we have state in this component
        return state;
    }

    componentWillReceiveProps(props) {
        // will be removed in new React Versions
        console.log('[Persons.js] componentWillReceiveProps', props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // here we need to return true or false if we want to allow React to continue
        // usually we compare props here or state
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        // got to catch user scroll, so we can go back to same position when re-render component
        // usually we store coordinates
        return {message: 'Snapshot'};
    }

    componentWillUpdate() {
        // will be removed in new React Versions
        console.log('[Persons.js] componentWillUpdate');
    }

    // Than render() is called

    componentDidUpdate(previousProps, previousState, snapShot) {
        console.log('[Persons.js] componentDidUpdate', snapShot);
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