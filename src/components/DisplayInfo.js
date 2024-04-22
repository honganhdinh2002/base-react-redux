import React from "react";


class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState = ({
            isShowListUser: false
        })
    }
    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        console.table(listUsers);

        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div>
                            <div>
                                <span onClick={() => { this.handleShowHide() }}>Hide list user</span>
                            </div>

                            {this.state.isShowListUser &&
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            }

                        </div>
                    )

                })}
            </div>
        )
    }
}

export default DisplayInfo;