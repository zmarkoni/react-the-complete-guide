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

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus(); // need to use current!
    }

    render() {
        console.log('[Person.js] rendering...');
        // return (
        //     <Aux> use Fragment which is built in React
        return (
            <Fragment>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
                </AuthContext.Consumer>
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