import './App.css';
import React from 'react';
import MyComponent from './components/MyComponent';


class App extends React.Component {
  state = {
    name: "Howl",
    address: "288 Nam Ki Khoi Nghia",
    age: 21
  }
  
  render() {
    return (
      <div>
        My name is {this.state.name} , age is {this.state.age} and i am from {this.state.address}

      </div>
    )
  }
}


export default App;
