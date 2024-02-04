import React from 'react'

const MySamp = (props) => {
    // console.log(props);
    return (
        <div style={{ backgroundColor: 'gray' }}>MySamp
        {props.setclr}
        {props.waga}
            <input type="color" onChange={(e) => props.setclr(e.target.value)}></input>
        </div>
    )
}

export default MySamp