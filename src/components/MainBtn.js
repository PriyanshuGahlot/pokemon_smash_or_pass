import React from 'react'

export default function MainBtn(props) {
  return (
    <>
    <button onClick={props.onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-black border-2'>{props.txt}</button>
    </>
  )
}
