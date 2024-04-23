import React from "react";
import './DisplayInfo.scss'


class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        console.table(listUsers);

        return (
            <div className="display-info-conatainer">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                    {this.state.isShowListUser === true ? "Hide list user": "Show list user"}
                    </span>
                </div>
                <div>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} >
                                {this.state.isShowListUser &&
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div>
                                        Họ và tên: {user.name}</div>
                                        <div>Tuổi:{user.age}</div>
                                        <div>Địa chỉ: {user.address}</div>
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
}

export default DisplayInfo;