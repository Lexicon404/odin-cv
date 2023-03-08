import React from 'react';

function Experience(props){

    const {id} = props


    return (
        <div>

        <form>
            <h2 id={id}>Experience</h2>
            <label>Position:</label>
            <input type="text" value={props.position} name='position' onChange={(e) => props.changePosition(e, id)}/>
            <label>Company:</label>
            <input type="text" value={props.company} name='company' onChange={(e) => props.changeCompany(e, id)}/>
            <label>City:</label>
            <input type="text" value={props.city} name='city' onChange={(e) => props.changeCity(e, id)}/>
            <label>From:</label>
            <input type="text" value={props.from} name='from' onChange={(e) => props.changeFrom(e, id)}/>
            <label>To:</label>
            <input type="text" value={props.to} name='to' onChange={(e) => props.changeTo(e, id)}/>
        </form>

        <button onClick={() => props.deleteExp(id)}>Delete</button>
        </div>

    )
}

export default Experience;