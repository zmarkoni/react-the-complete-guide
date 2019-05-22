import React, {Component} from 'react';

//const person = ( props ) => {
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className="">
                <p onClick={this.props.customClick}>
                    I am {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeOnInput} value={this.props.name}/>
            </div>
        )
    };
}
export default Person;
//export default person;