import React from 'react'

export const Card = ({imgSrc,title,desc}) => {
  return (
    <div>
        <img  src={imgSrc}  />
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}


