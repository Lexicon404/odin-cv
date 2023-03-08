import React from 'react';
//import ReactDOM from 'react-dom/client';

function PersonalView(props){
    return (
        <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Title: {props.title}</p>
            <p>Address: {props.address}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )

}

export default PersonalView;