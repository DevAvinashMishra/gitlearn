import React from 'react'
import {Link } from "react-router-dom";

const Form = ({parentCallback,toDo,save}) => {

    const changeValue = ({target:{value}}) => parentCallback(value);
    const saveToDo = ({target:{value}}) => save(value);
    
    return (
        <div>
            <input type='text' placeholder='Enter here...' value={toDo} onChange={changeValue}/> <button onClick={saveToDo}>Add</button><br/>
            <Link to="all"><button>All</button></Link> 
            <Link to="complete"><button >Complete</button></Link> 
            <Link to="incomplete"><button >Incomplete</button></Link>
        </div>
    )
}

export default Form
