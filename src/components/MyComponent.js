import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: []
  }

  handleAddUserInfo = (userObj) => {
    console.log("Added successfully" ,userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers]
    })
    alert("Added successfully!");
  }

  render() {
    return (
      <div>

        <AddUserInfo handleAddUserInfo={this.handleAddUserInfo} />
        <br/>
        <DisplayInfo listUsers = {this.state.listUsers}/>
        
      </div>
    )
  }
}
export default MyComponent;

