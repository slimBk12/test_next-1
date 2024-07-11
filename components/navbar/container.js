import React from 'react'
import Navbar from './navbar'

export default function Container(props) {
  return (
    <>

     <Navbar />  
     {props.children}
      
    </>
  )
}
