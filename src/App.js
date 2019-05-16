import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'; // need to be uppercase because lowercase elements are reserved for React

// https://reactjs.org/docs/events.html#supported-events

class App extends Component {

    state = {
        persons: [
            {name: 'Zoki', age: 36},
            {name: 'Jeka', age: 30},
            {name: 'Aki', age: 2}
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

    nameChangeHandler = (event) => {
        this.setState(
            {
                persons: [
                    {name: 'Zoran', age: 36},
                    {name: event.target.value, age: 31},
                    {name: 'Aki', age: 2}
                ]
            }
        )
    };

    render() {

        const buttonStyle = {
          backgroundColor: 'lightBlue',
          border:'1px solid blue',
          padding: '8px',
          cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>React complete guide</h1>
                <button style={buttonStyle} onClick={() => this.switchNameHandler('Zoran')}>Switch name</button>
                <Person
                    customClick={this.switchNameHandler.bind(this, 'Zokiiii!!!')}
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                >Moj hobi je trcanje</Person>
                <Person
                    changeOnInput={this.nameChangeHandler}
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
