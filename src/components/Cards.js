import React from 'react'
import Card from 'react-bootstrap/Card';
const Cards = ({data}) => {
  return (
    <>
    {
      data.map((element,k)=>{
        return(
         <>
         <Card style={{ width: '22rem', border:"none" , marginBottom:"30px" }}>
      <Card.Img variant="top" className='cd' src={element.imgdata} />

      <div className='card_body'>
        <div className='upper_data d-flex justify-content-between align-items-center'>
          <h4>{element.rname}</h4>
          <span >{element.rating} </span>
        </div>
      </div>
      </Card>
         </>
        )
      })
    }
   
    </>
  )
}

export default Cards