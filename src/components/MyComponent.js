import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      {
        id: "1",
        name: "Howl",
        age: 21,
        address: "Ha Noi"
      },
      {
        id: "2",
        name: "Hank",
        age: 14,
        address: "Hai Duong"
      },
    ]
  }

  handleAddUserInfo = (userObj) => {
    console.log("Added successfully" ,userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers]
    })
    alert("Added successfully!");
  }

  handleDeleteUser = (userID) => {
    let listUserClone = this.state.listUsers;
    listUserClone = listUserClone.filter(item => item.id !== userID);
    this.setState({
      listUsers: listUserClone
    })
  }

  render() {
    return (
      <div>

        <AddUserInfo handleAddUserInfo={this.handleAddUserInfo} />
        <br/>
        <DisplayInfo listUsers = {this.state.listUsers} handleDeleteUser = {this.handleDeleteUser} />
        
      </div>
    )
  }
}
export default MyComponent;

