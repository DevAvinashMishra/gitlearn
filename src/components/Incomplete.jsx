import React from 'react'

const Incomplete = ({data , changeStatus}) => {
    return (
        <div>
            <ol>
                {
                    data.map( ({value,id,status}) => {
                        return(
                            <li key={id}>
                                <label>
                                    {value}
                                </label> <button onClick={changeStatus} value={id}>{(status ==='incomplete') ? 'Complete': 'Incomplete'} Status</button>  <label>Current Status is <b>{status} </b></label>
                            </li>
                        ) 
                    })
                }
            </ol>
        </div>
    )
}

export default Incomplete
