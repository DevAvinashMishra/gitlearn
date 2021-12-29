import React from 'react'

const Complete = ({data , changeStatus}) => {
    return (
        <div>
            <ol>
                {
                    data.map( ({value,id,status}) => {
                        return(
                            <li>
                                <label> 
                                    {value}
                                </label> <button onClick={changeStatus} value={id}>{(status ==='incomplete') ? 'Complete': 'Incomplete'} Status</button>  <label> Current Status is <b>{status} </b></label>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}
export default Complete
