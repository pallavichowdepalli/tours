import React from 'react'

function Title({title,subtitle}) {
  return (
    <div>
        <h1>
            {title} <span>{subtitle}</span>
        </h1>
    </div>
  )
}

export default Title