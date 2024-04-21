import React from "react";


class DisplayInfo extends React.Component {
    render() {
        const {name, age} = this.props;
        return(
            <div>
                <p>My name is {name}</p>
                <p>Age is {age}</p>
            </div>
            

        )
    }
}

export default DisplayInfo;