import React from 'react';

function Personal(props){

    return (
        <form>
            <h2>Personal Information</h2>
            <label>First Name:</label>
            <input type="text" value={props.firstName} name='firstName' onChange={(e) => props.changeFirstName(e)}/>
            <label>Last Name:</label>
            <input type="text" value={props.lastName} name='lastName' onChange={props.changeLastName}/>
            <label>Title:</label>
            <input type="text" value={props.title} name='title' onChange={props.changeTitle}/>
            <label>Address:</label>
            <input type="text" value={props.address} name='address' onChange={props.changeAddress}/>
            <label>Phone:</label>
            <input type="text" value={props.phone} name='phone' onChange={props.changePhone}/>
            <label>Email:</label>
            <input type="text" value={props.email} name='email' onChange={props.changeEmail}/>

        </form>
    )
}

export default Personal;