import React from 'react'

export default function ImgHolder(props) {
  return (
    props.src && <>
    <img src={props.src} alt="Pokemon Image" className='w-1/5 h-1/5'/>
    </>
  )
}
