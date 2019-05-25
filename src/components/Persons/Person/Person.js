import React, {Component, Fragment} from 'react';
// import Aux from '../../../hoc/Aux'; will use Fragment instead
import withClass from '../../../hoc/withClass1';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

//const person = ( props ) => {
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/13556346#overview
    // To access contextAPI outside JSP we need to use contextType (need to be exactly the this name), and need to be static
    static contextType = AuthContext; // from import AuthContext from '../../../context/auth-context';
    // Like this, React will connect our context with this whole component, so we have access in methods as well
    // We can access to it with (this.context) - need to be written like this
    // Can be used only in CLASS based Components

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus(); // need to use current!

        // Accessing contextType
        console.log('contextType: ', this.context);
    }

    render() {
        console.log('[Person.js] rendering...');
        // return (
        //     <Aux> use Fragment which is built in React
        return (
            <Fragment>
                {/* Old way of using Context
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
                </AuthContext.Consumer>
                */}

                {this.context.authenticated ?
                    <p>Authenticated!</p> :
                    <p>Please log in!</p>
                }
                <p onClick={this.props.customClick}>
                    I am {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input type="text"
                       onChange={this.props.changeOnInput}
                       value={this.props.name}
                        //ref={(inputEl) => {this.inputElement = inputEl}}  Old way
                        ref={this.inputElementRef}  // new way with constructor
                />
            </Fragment>
        )
    };
}
export default withClass(Person, classes.Person);
//export default person;