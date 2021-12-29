import React , {useState} from 'react';
import nextId from "react-id-generator";
import All from './All';
import Complete from './Complete';
import Pending from './Pending';

const Form = () => {
    const [toDo , setToDo] = useState('');
    const [toDoArray , setToDoArray] = useState([]);
    const [filterArray , setFilterArray] = useState([]);
    const [currentTab , setCurrentTab] = useState('all');

    // function for change input value
    const changeValue = ({target:{value}}) => setToDo(value);

    // function for save input data in array
    const saveToDo = () => {
        setToDoArray([...toDoArray,{
            id : nextId(),
            value : toDo ,
            status : 'incomplete'
        }])
        setFilterArray([...toDoArray])
        setToDo('')
    }
    
    const componentMapping =  {
        all: All,
        complete: Complete,
        incomplete: Pending
    }

    // function for filter as all data
    const all = () => {
        const allData = toDoArray.filter(task => task.status !== '')
        setFilterArray(allData)
        setCurrentTab('all')
    } 

    // function for filter as complete data
    const complete = () => {
        const completeData = toDoArray.filter(task => task.status === 'complete')
        setFilterArray(completeData)
        setCurrentTab('complete')
    }
    
    // function for filter as incomplete data
    const incomplete = () => {    
        const incompleteData = toDoArray.filter(task => task.status === 'incomplete')
        setFilterArray(incompleteData)
        setCurrentTab('incomplete')
    }
    
    // function for change data status
    const changeStatus = ({target: { value }}) => {
        const objIndex = toDoArray.findIndex((val => val.id === value));
        const newArray = [...toDoArray];
        const changedStaus = (newArray[objIndex].status === 'complete') ? 'incomplete' : 'complete';
        newArray[objIndex].status = changedStaus;
        setToDoArray(newArray)   
    }

    const ComponentToRender = componentMapping[currentTab];
    
    return (
        <div>
            <input type='text' placeholder='Enter here...' value={toDo} onChange={changeValue}/> <button onClick={saveToDo}>Add</button><br/>
            <button onClick={all}>All</button> <button onClick={complete}>Complete</button> <button onClick={incomplete}>Incomplete</button>
            <ComponentToRender data={filterArray} changeStatus={changeStatus}/>
        </div>
    )
}

export default Form
