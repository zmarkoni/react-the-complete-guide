import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'; // need to be uppercase because lowercase elements are reserved for React

// https://reactjs.org/docs/events.html#supported-events

class App extends Component {

    state = {
        persons: [
            {id:"id1", name: 'Zoki', age: 36},
            {id:"id2", name: 'Jeka', age: 30},
            {id:"id3", name: 'Aki', age: 2}
        ],
        otherState: 'some other test will not be changed!',
        showPersons: false
    };

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
        const buttonStyle = {
          backgroundColor: 'lightBlue',
          border:'1px solid blue',
          padding: '8px',
          cursor: 'pointer'
        };

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                customClick={() => this.deletePersonHandler(index)}
                                changeOnInput={(event) => this.nameChangeHandler(event, person.id)}
                            />
                        })
                    }
                </div>
            );
        }

        return (
            <div className="App">
                <h1>React complete guide</h1>
                <button style={buttonStyle}
                        onClick={this.togglePersonsHandler}>
                        {this.state.showPersons ? 'hide' : 'show'} persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
