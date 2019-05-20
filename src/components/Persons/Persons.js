import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        changeOnInput={(event) => props.changed(event, person.id)}
        customClick={() => props.clicked(index)}
    />
});


export default persons;