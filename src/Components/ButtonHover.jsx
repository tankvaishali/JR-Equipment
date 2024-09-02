import React from 'react'
import { Link } from 'react-router-dom'

function ButtonHover(props) {

  return (
    <div className="elementor-button p-1 py-2">
      <Link to={props.to} className={`elementor-button-text text-white text-decoration-none  ${props.className}`} >
        {props.btnttitle}
      </Link>
    </div>
  )
}

export default ButtonHover