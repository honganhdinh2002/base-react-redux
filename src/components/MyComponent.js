import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState(
    [
      { id: "1", name: "Dinh Hong Anh", age: 21, address: "26 Nam Dan, 11, District Hai Ba Trung, Ha Noi Capital" },
      { id: "2", name: "Dinh Hoang Anh", age: 18, address: "288 Nam Ki Khoi Nghia, Vo Thi Sau, Dicstrict 3, Ho Chi Minh City" },
      { id: "3", name: "Pham Hai Nam", age: 18, address: "227 Thanh Xuan, Hang Xom, District Nam Tu Niem, Ha Noi Capital" }
    ]
  );
  const handleAddUserInfo = (userObj) => {
    setListUsers([userObj, ...listUsers])
    alert("Added successfully!");
  }
  const handleDeleteUser = (userID) => {
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter(item => item.id !== userID);
    setListUsers(listUserClone);
  }

  return (
    <div>
      <AddUserInfo handleAddUserInfo={handleAddUserInfo} />
      <br />
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  )
}
export default MyComponent;

