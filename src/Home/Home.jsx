import React from 'react'
import './Home.css'
import Card from '../Card/Card'
import Gadget from '../configs/Gadget'


function Home(){
  return (
    <div className='card-container'>
        {Gadget.map((item)=>{
          const {id,title,image,description}=item;
            return(
            <Card
            key={id}
            id={id}
            title={title}
            image={image}
            description={description}
            />)
        })}
    </div>
  )

}
export default Home