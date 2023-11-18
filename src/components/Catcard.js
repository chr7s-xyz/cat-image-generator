import React from 'react'


export default function Catcard(props) {
return (
    <>
    <div className="catcard-div">
      <img className='cat-img' src={props.url}></img>
     <div className='cat-text'></div>
    </div>
    </>
  )
}
