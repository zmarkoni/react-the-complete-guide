import React, {Component, Fragment} from 'react';
// import Aux from '../../../hoc/Aux'; will use Fragment instead
import withClass from '../../../hoc/withClass1';
import classes from './Person.css';


//const person = ( props ) => {
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        // return (
        //     <Aux> use Fragment which is built in React
        return (
            <Fragment>
                <p onClick={this.props.customClick}>
                    I am {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeOnInput} value={this.props.name}/>
            </Fragment>
        )
    };
}
export default withClass(Person, classes.Person);
//export default person;