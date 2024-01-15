import React, { Component } from 'react';


function Header () {

return(

   <div className='columns-2 columns-md-1 flex flex-wrap justify-evenly'>
<div>
    <h1 className=' pl-7 font-bold text-7xl pt-10'>Click to</h1>
    <h2 className=' pl-7 font-bold text-6xl text-cyan-400'>GROW</h2>
    <h4 className=' pl-7 fontHead text-xl text-clip pt-8'>Esperienza, competenza, metodo per il tuo business </h4>
</div>
<div className=' flex'>
<img src="\GCM_Rosa.gif" className='pt-8 min-h-2 max-w-md ' alt="" />
</div>
   </div>



)


}

export default Header;