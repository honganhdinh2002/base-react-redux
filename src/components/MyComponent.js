import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    render() {
        return (
          <div>
            <DisplayInfo name="Nhism" age= "22" />
            <br/>
            <UserInfo />
          </div>
        )
      }
}
export default MyComponent;

