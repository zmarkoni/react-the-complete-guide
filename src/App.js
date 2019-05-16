import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'; // need to be uppercase because lowercase elements are reserved for React

// https://reactjs.org/docs/events.html#supported-events

class App extends Component {

    state = {
        persons: [
            {name: 'Zoki', age: 36},
            {name: 'Jeka', age: 30},
        ]
    };

    switchNameHandler = () => {
        console.log('was clicked');
        this.setState(
            {
                persons: [
                    {name: 'Zoran', age: 36},
                    {name: 'Jeka', age: 31},
                    {name: 'Jeka1', age: 33}, //
                ]
            }
        )
    };

    render() {
        return (
            <div className="App">
                <h1>React complete guide</h1>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Moj hobi je trcanje</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            </div>
        );
    }
}

export default App;
