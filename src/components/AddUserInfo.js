import React, { useState } from "react";

const AddUserInfo = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('Ho Chi Minh City');
    const [age, setAge] = useState('');

    
    const handleOnChangName = (event) => {
        setName(event.target.value);
    }
    const handleOnChangAge = (event) => {
        setAge(event.target.value);
    }
    const handleOnChangAddress = (event) => {
        setAddress(event.target.value);
    }
    
    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddUserInfo({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age,   
            address: address
        });
    }
    return (
        <div>
            <form onSubmit={(event) => handleOnSubmit(event)} >
                {/* Name */}
                <label>Name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangName(event)}
                />

                {/* Age */}
                <label>Age: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangAge(event)}
                ></input>


                {/* Address */}
                <label>Address: </label>
                <input
                    value={address}
                    type="text"
                    onChange={(event) => handleOnChangAddress(event)}
                >
                </input>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo;
