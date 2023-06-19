import React from 'react';

import ReactDOM from 'react-dom';

const App = () => {

  const people = [
    {
      name: 'Cyrus',
      age: 25
    },
    {
      name: 'james',
      age: 25
    },
    {
      name: 'clay',
      age: 27
    },
    {
      name: 'jordan',
      age: 27
    }
  ]

  console.log("got here bye", people)


  return (
    <div>

      {people.map(person => <Person person={person}/>)}


      {/* <div>Hello world {persons[0].name} </div> 
      <div>Hello world {persons[1].name} </div>
      <div>Hello world {persons[2].name} </div> */}
   </div>
  );
}


// person.js
const Person = (props) => {
  console.log(props)
  const {person} = props;
  return (
    <div>
         <div>Hello world {person.name}</div> 
         <div>age: {person.age}</div>
    </div>
 
  )
}

export default App;
