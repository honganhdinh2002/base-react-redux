import './App.css';
import React from 'react';
import MyComponent from './components/MyComponent';


class App extends React.Component {
  state = {
    name: "Howl",
    address: "288 Nam Ki Khoi Nghia",
    age: 21
  }

  
  handleOnChangeInput(event) {
    this.setState({
      name: event.target.value
    })
  }
  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state.name)
  }

  render() {
    return (
      <div>
        My name is {this.state.name}, {this.state.age} years old and i live in {this.state.address}.
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
            <input 
            type="text" 
            onChange={(event) => this.handleOnChangeInput(event)} 
            />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}


export default App;
