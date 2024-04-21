import React from "react";


class UserInfo extends React.Component {
    state = {
        name: "Howl",
        address: "288 Nam Ki Khoi Nghia",
        age: 21
    }


    handleOnSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }

    handleOnChangName(event) {
        this.setState({
            name: event.target.value,
        })
    }
    handleOnChangAge(event) {
        this.setState({
            age: event.target.value,
        })
    }
    handleOnChangAddress(event) {
        this.setState({
            address: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <b>My name is: </b>{ this.state.name }, { this.state.age } <b>years old and i live in</b> { this.state.address }.
            <form onSubmit={(event) => this.handleOnSubmit(event)} >
                {/* Name */}
                <label>Name: </label>
                <input
                    value={this.state.name}
                    type="text"
                    onChange={(event) => this.handleOnChangName(event)}
                />

                {/* Age */}
                <label>Age: </label>
                <input
                    value={this.state.age}
                    type="number"
                    onChange={(event) => this.handleOnChangAge(event)}
                ></input>


                {/* Address */}
                <label>Address: </label>
                <input
                    value={this.state.address}
                    type="text"
                    onChange={(event) => this.handleOnChangAddress(event)}
                >
                </input>

                <button>Submit</button>
            </form>
            </div>
        )
    }

}

export default UserInfo;
