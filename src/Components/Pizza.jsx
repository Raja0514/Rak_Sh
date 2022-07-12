import React from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import { useState } from 'react'

const Pizza = ({pizza}) => {
const[varient,setVarient]=useState('small')
const[quantity,setQuantity]=useState(1)

  return (
    <>
     <Card style={{ width: '18rem' ,marginTop:'30px' }}>
      <Card.Img variant="top" src={pizza.image} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Varients</h6>
                <select

value={varient}

                onChange={e=>setVarient(e.target.value)}

                >
                    {pizza.varients.map((varient)=>{
                        return(
                            <>
                            <option 
                             
                             
                            >{varient}</option>
                            </>
                        )

                    })}
                </select>
            </Col>
            <Col md={6}>
                <h6>Quantitity</h6>
                <select value={quantity}
                onChange={e=>setQuantity(e.target.value)}
                >
                {[...Array(10).keys()].map((v,i)=>{
                    return(
                        <>
                        <option value={i+1}
                        
                        >
                        {i+1}
                        </option>
                        </>
                    )
                })}

                </select>
                
            </Col>
          </Row>
        </Card.Text>
        <Row>
            <Col md={6}>price:{pizza.prices[0][varient]*quantity}</Col>
            <Col>
            </Col>
        </Row>
      </Card.Body>
    </Card>
    </>
  )
}

export default Pizza
