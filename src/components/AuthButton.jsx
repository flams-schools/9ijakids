import React from 'react'

const AuthButton = (props) => {
  return (
    <button type='button' className={`btn ${props.styles}`} {...props}>
      {props.name}
    </button>
  )
}

export default AuthButton
