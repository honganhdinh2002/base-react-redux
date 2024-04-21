import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      {id: 1, name: "Howl", age: 21},
      {id: 2, name: "Anh", age: 21},
      {id: 3, name: "Popp", age: 21},

    ]
  }
    render() {
        return (
          <div>
            <DisplayInfo listUsers = {this.state.listUsers} />
            
            <br/>

            <UserInfo />
          </div>
        )
      }
}
export default MyComponent;

