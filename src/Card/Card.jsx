import React from 'react'
import './Card.css'


function Card({ title, image, description,id }) {
  return (
    <div className='card'>
        <h1 className="title">{title}</h1>
        <img src={image} className="image"/>
        <h2 className="id">{id}</h2>
        <p className="discription">{description}</p>
    </div>
  )
}

export default Card