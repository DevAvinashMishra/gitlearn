import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { statusChange } from '../reducer/toDoApp';

const Complete = () => {
    const data = useSelector(state => state.toDo);
    // const completeData = data.filter(task => task.status === 'complete')
    const dispatch = useDispatch()
    return (
        <div>
            <ol>
                {
                    data.filter(task => task.status === 'complete').map( ({value,id,status}) => {
                        return(
                            <li key={id}>
                                <label> 
                                    {value}
                                </label> <button  onClick={()=>(dispatch(statusChange(id)))}>Complete Status</button>  <label> Current Status is <b>{status} </b></label>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Complete
