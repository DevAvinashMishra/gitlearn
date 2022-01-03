import React from 'react'

const Complete = ({data , changeStatus}) => {
    console.log(data);
    return (
        <div>
            <ol>
                {
                    data.map( ({value,id,status}) => {
                        return(
                            <li key={id}>
                                <label> 
                                    {value}
                                </label> <button onClick={changeStatus} value={id}>Complete Status</button>  <label> Current Status is <b>{status} </b></label>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Complete
