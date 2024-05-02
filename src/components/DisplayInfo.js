import React, { useState } from "react";
import './DisplayInfo.scss';



const DisplayInfo = (props) => {
    const { listUsers } = props;
    const [isActive, setActive] = useState(true);

    const handleActive = () => {
        setActive(!isActive);
    }

    return (
        <div className="display-info-conatainer">
            <div>
                <span onClick={() => handleActive()}>
                    {isActive === true ? "Hide" : "Show"}
                </span>
            </div>

            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id} >
                            {isActive &&
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>Họ và tên: {user.name}</div>
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