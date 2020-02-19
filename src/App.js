import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'qwe', name: 'Test', age: 26},
      {id: 'asd', name: 'Test1', age: 27},
      {id: 'zxc', name: 'Test2', age: 28}
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!!');
    // DONT DO THIS this.state.persons[0].name = 'Do not Test';
    this.setState({
      persons: [
        {name: 'Mutate Test', age: 26},
        {name: 'Mutate Test1', age: 27},
        {name: 'Mutate Test2', age: 28}
      ],
      showPerson: false
    });
  }

  nameChange = (event, id) => {
    //find index first
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //take a copy of that index
    const person = {
      ...this.state.persons[personIndex]
    };

    //assign typed value that object
    person.name = event.target.value;

    //take one more copy don't mutate
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const presentState = this.state.showPerson;
    this.setState({showPerson : !presentState});
  }

  deletePerson = (index) => {
    // const Person = this.state.persons.slice();
    const Person = [...this.state.persons];
    Person.splice(index,1);
    this.setState({persons: Person});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1 px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;
    if(this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePerson(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              change={(event) => this.nameChange(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Test Page</h1>
        <button onClick = {this.togglePersonHandler} style={style}>Test Button</button>
        {person}
      </div>
    );
  }
}

export default App;
