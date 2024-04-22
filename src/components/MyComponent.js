import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      {id: 1, name: "Howl", age: 21},
      {id: 2, name: "Anh", age: 16},
      {id: 3, name: "Popp", age: 23},

    ]
  }
    render() {
        return (
          <div>

            <UserInfo />
            <br/>
            <DisplayInfo listUsers = {this.state.listUsers} />
            
          </div>
        )
      }
}
export default MyComponent;

