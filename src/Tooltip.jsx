import React, { useState } from 'react'
import './TooltipStyle.css';

export default function Tooltip({text}) {

    const [visible , setVisible] = useState(false);

  return (
    <div className='tool-container'>

   
      <button

      onMouseEnter={()=>{
        setVisible(true);
      }}

      onMouseLeave={()=>{
        setVisible(false)
      }}
      className='tool-button'

      >Hover Over Me !!</button>
      <br></br>
     {
        visible&& <span className='hover-text'>{text}</span>
     }

    </div>
  )
}
