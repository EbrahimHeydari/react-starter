import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h2>I'm {props.person.name} and I am {props.person.age} years old!</h2>
        </div>
    )
}


const PersonList = () => {

    const persons = [
        {
            name: 'Ali',
            age: 19,
            id: 6542901
        },

        {
            name: 'komeil',
            age: 29,
            id: 7652398
        },

        {
            name: 'Ebrahim',
            age: 25,
            id: 54276453378
        }
    ]

    const personList = persons.map(person => <Person key={person.id} person={person}/>)

    return (
        <div>
            {personList}
        </div>
    )
}

export default PersonList;