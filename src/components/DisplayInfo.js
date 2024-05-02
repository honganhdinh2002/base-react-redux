import React from "react";
import './DisplayInfo.scss';
import logo from "./../logo.svg";



// class DisplayInfo extends React.Component {
//     render() {
//         console.log("Render");
//         const name = "Hoi Dan IT";
//         const { listUsers } = this.props;

//         return (
//             <div className="display-info-conatainer">
//                 { name }
//                 <img src={logo} className="logo" />
//                     <div>
//                     {listUsers.map((user, index) => {
//                         return (
//                             <div key={user.id} >
//                                 {true &&
//                                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                         <div>
//                                         Họ và tên: {user.name}</div>
//                                         <div>Tuổi:{user.age}</div>
//                                         <div>Địa chỉ: {user.address}</div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                         <hr />
//                                     </div>
//                                 }
//                             </div>
//                         )

//                     })}
//                 </div>
//             </div>
//         )
//     }
// }



// Stateless vs Statefull
const DisplayInfo = (props) => {
        const { listUsers } = props;

        return (
            <div className="display-info-conatainer">
                <img src={logo} className="logo" />
                    <div>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} >
                                {true &&
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div>
                                        Họ và tên: {user.name}</div>
                                        <div>Tuổi:{user.age}</div>
                                        <div>Địa chỉ: {user.address}</div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                        <hr />
                                    </div>
                                }
                            </div>
                        )

                    })}
                </div>
            </div>
        )
}
export default DisplayInfo;