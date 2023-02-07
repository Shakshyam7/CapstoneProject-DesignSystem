import React from 'react'
import "./Button.css"

function Button(props) {
  return (
    <>
      <button style={{margin:"10px"}} className={props.class}>{props.name}</button> 
    </>
  )
}

export default Button