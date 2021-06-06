import React from 'react'



const Button = ({text,color, onClick}) => {
  return(
   <button onClick={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
  )
}

Button.defaultProps = {
  color: 'green',
  text: 'Add'
}

export default Button