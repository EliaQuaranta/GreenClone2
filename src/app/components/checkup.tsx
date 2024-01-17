import React, { Component } from 'react';


function Checkup() {

    return(

        
<div className=' columns-1 columns-md-1'>
<div className='bg-[#E3DCD7] text-center'>
<h1 className=' p-16 font-bold text-4xl '>Contattaci per un CheckUp <h1 className='text-cyan-400'>Gratuito</h1></h1>
<button className='bg-cyan-400 p-6 mb-16 border-cyan-900 text-white font-bold rounded-md'> <h1 className='flex pl-4'>Scrivici <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</h1> </button>
</div>

<img src="\foto-def-logo.jpg" className='imgTeam' alt="" />

</div>


    )

}

export default Checkup;