import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'; // need to be uppercase because lowercase elements are reserved for React

// https://reactjs.org/docs/events.html#supported-events

class App extends Component {

    state = {
        persons: [
            { name: 'Zoki', age: 36 },
            { name: 'Jeka', age: 30 },
            { name: 'Aki', age: 2 }
        ]
    };

    switchNameHandler = (newName) => {
        //console.log('was clicked');
        this.setState(
            {
                persons: [
                    {name: newName, age: 36},
                    {name: 'Jeka', age: 31},
                    {name: 'Aki', age: 2}
                ]
            }
        )
    };

    render() {
        return (
            <div className="App">
                <h1>React complete guide</h1>
                <button onClick={() => this.switchNameHandler('Zoran')}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    >Moj hobi je trcanje</Person>
                <Person
                    click={this.switchNameHandler.bind(this, 'Zoran!!!')} // more click
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}/>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
