import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit"; // need to be uppercase because lowercase elements are reserved for React

// https://reactjs.org/docs/events.html#supported-events

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            {id:"id1", name: 'Zoki', age: 36},
            {id:"id2", name: 'Jeka', age: 30},
            {id:"id3", name: 'Aki', age: 2}
        ],
        otherState: 'some other test will not be changed!',
        showPersons: false
    };

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[App.js] getDerivedStateFromProps');
    //     // use only if we have state in this component
    //     return state;
    // }

    componentWillMount() {
        // will be removed in new React Versions
        console.log('[App.js] componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {...this.state.persons[personIndex]}; // using destructuring to copy object, same like array, just with {...}
        person.name = event.target.value;

        // Sada treba da updejtujemo state sa novim array-em koji je updejtovan, ali samo za person koji smo menjali
        const newPersons = [...this.state.persons];
        newPersons[personIndex] = person; // ovde se u stvari odradjuje poso

        this.setState( {persons: newPersons} );

    };

    deletePersonHandler = (personIndex) => {
        //const newPersons = this.state.persons; // ne sme ovako da se radi posto ovako kreiramo pointer na array i menjamo orginalni persons
        //const newPersons = this.state.persons.slice(); // slice pravi kopiju
        // ili destructuring
        const newPersons = [...this.state.persons];
        newPersons.splice(personIndex, 1);
        this.setState({
            persons: newPersons
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            //showPersons: this.state.showPersons ? false : true
            showPersons: !doesShow // ovako je bolje, radi isto
        })
    };

    render() {
        console.log('[App.js] render');
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler}
                    />
                </div>
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                title={this.props.appTitle} // this.props is used because we are inside Class
                toggle={this.togglePersonsHandler}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                />
                {persons}
            </div>
        );
    }
}

export default App;
