import React from 'react'
// import "../index.css"
import '../../App.css'

export const Student = ({stdName,stdAge,stdStatus}) => {
  return (
    <div className ="stdDiv">
        <h1>Student Name: {stdName}</h1>
        <h3>Student Age: {stdAge}</h3>
        <h5>Student Status: {stdStatus}</h5>
        

    </div>

  )
}
