import React from 'react'
import "./PlantCard.css"

function PlantCard({_id, name, category, image, price, description}) {
  return (
    <div className='plant-card'>
        <h1 className='plant-title'>PlantName : {name}</h1>
        <p className='plant-info'>Price : {price}</p>
        <p className='plant-info'>Category : {category}</p>
        <p className='plant-info'>Description : {description}</p>
        <img src={image} className='plant-card-image'/>
    </div>
  )
}

export default PlantCard
