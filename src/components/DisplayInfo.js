import React from "react";


class DisplayInfo extends React.Component {
    render() {
        const {listUsers} = this.props;
        return(
            <div>
                { listUsers.map((user, index) => {
                    return(
                        <div key={user.id}>
                            <p> My name's {user.name} </p>
                            <p> My age's {user.age} </p>
                        </div>
                    )
                }) }
            </div>
        )
    }
}

export default DisplayInfo;