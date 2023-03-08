import React from 'react';
//import ReactDOM from 'react-dom/client';

function ExperienceView(props){

    return (
        <div>
            <p>Position: {props.position}</p>
            <p>Company: {props.company}</p>
            <p>City: {props.city}</p>
            <p>From: {props.from}</p>
            <p>To: {props.to}</p>
        </div>
    )

}




export default ExperienceView;