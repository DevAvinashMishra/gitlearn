import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { statusChange } from '../reducer/toDoApp';

const Incomplete = ({changeStatus}) => {
    const data = useSelector(state => state.toDo);
    const incompleteData = data.filter(task => task.status === 'incomplete')
    const dispatch = useDispatch()
    return (
        <div>
            <ol>
                {
                    incompleteData.map( ({value,id,status}) => {
                        return(
                            <li key={id}>
                                <label>
                                    {value}
                                </label> <button onClick={()=>(dispatch(statusChange(id)))}>{(status ==='incomplete') ? 'Complete': 'Incomplete'} Status</button>  <label>Current Status is <b>{status} </b></label>
                            </li>
                        ) 
                    })
                }
            </ol>
        </div>
    )
}

export default Incomplete
