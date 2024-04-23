import React from "react";


class AddUserInfo extends React.Component {
    state = {
        name: "",
        address: "",
        age: ""
    }


    handleOnSubmit(event) {
        event.preventDefault();
        this.props.handleAddUserInfo({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age,
            address: this.state.address
        });


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

export default AddUserInfo;
