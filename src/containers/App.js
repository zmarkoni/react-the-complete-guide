import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit"; // need to be uppercase because lowercase elements are reserved for React
// import WithClass from '../hoc/WithClass';
import withClass from '../hoc/withClass1';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context'; // can be used as Component and should wrap all parts which need access to that context

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
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        // uvek se opali cim se promeni state ili props
        // use only if we have state in this component
        return state;
    }

    // componentWillMount() {
    //     // will be removed in new React Versions react-scrips:3.0.0
    //     console.log('[App.js] componentWillMount');
    // }

    // Sad ide render()

    componentDidMount(nextProps, nextState) {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('[App.js] shouldComponentUpdate');
        // can catch snapShot
        //return false; // Now we will not render Persons component
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
        // can catch snapShot
    }


    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {...this.state.persons[personIndex]};
        // using destructuring to copy object, same like array, just with {...}
        // pay attention here when we compare objects and arrays which are reference type
        // means they have pointers to object/array so when we work with this, we need to
        // make sure to create new array/object when assign new values to it's properties

        person.name = event.target.value;

        // Sada treba da updejtujemo state sa novim array-em koji je updejtovan, ali samo za person koji smo menjali
        // pay attention here when we compare objects and arrays which are reference type
        // means they have pointers to object/array so when we work with this, we need to
        // make sure to create new array/object when assign new values to it's properties
        const newPersons = [...this.state.persons];
        newPersons[personIndex] = person; // ovde se u stvari odradjuje poso

        /*
        this.setState(
            {
                persons: newPersons,
                // changeCounter: this.changeCounter + 1 this is not a good way to update state based on previous state
            }
        );
        */

        // https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/13556334#overview
        // When we need to update state based on previous state, we need to use the function
        this.setState((prevState, props) => {
            return {
                persons: newPersons,
                changeCounter: prevState.changeCounter + 1
            };
        });

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

    loginHandler = () => {
        this.setState({authenticated:true});
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
                        isAuthenticated={this.state.authenticated}
                    />
                </div>
            );
        }

        //<WithClass classes={classes.App}>
        return (
            <Aux>
                <button onClick={() => (
                    this.setState({showCockpit: !this.state.showCockpit})
                )}>Toggle Cockpit
                </button>

                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login: this.loginHandler
                }}>
                {this.state.showCockpit ? (
                <Cockpit
                    title={this.props.appTitle} // this.props is used because we are inside Class
                    toggle={this.togglePersonsHandler}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    // login={this.loginHandler} no need anymore since we are using context directly inside person component
                />
                ): null}
                {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
