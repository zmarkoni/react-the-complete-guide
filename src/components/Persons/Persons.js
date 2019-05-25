// not using right now

import React, {PureComponent} from 'react';
import Person from './Person/Person';

//const persons = (props) => props.persons.map((person, index) => {

class Persons extends PureComponent {

    // PureComponent implement by default shouldComponentUpdate lifecycle hook
    // and it will check for all props inside this component

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
                        //isAuth={this.props.isAuthenticated} no need anymore since we are using context directly inside person component
                    />
                )
            })
        )
    };

}

export default Persons;
//export default persons;