import React, { Component } from 'react';


function Main () {

return(
    <div className='main'>
    <div className=' bg-[#F5F1EE] '>
    <h1 className='text-center pt-20 font-extrabold text-3xl '>La Tua <h1 className='text-cyan-400 font-bold text-3xl'>Digital Performance</h1> Agency  </h1>
    
    <h3 className='text-center pt-3 text-xl fontHead'>“Siamo quello che facciamo ripetutamente. L’eccellenza dunque non è un atto ma un’abitudine” (Aristotele)</h3>
    </div>
    <div className="flex w-full h-64 bg-[#F5F1EE] pt-10">
  <div className="grid w-1/3 h-20 flex-grow card rounded-box place-items-center">
    
    <h1 className='text-2xl font-bold'>Cosa</h1>
    {/* <h3 className=' text-center font-bold'>Troviamo la strategia online più efficace per ogni business e la rendiamo scalabile.</h3>
    <h3 className=' text-center'>Il tuo obiettivo è il nostro obiettivo.</h3> */}


  </div>
  
  <div className="divider divider-horizontal colorDiveder"></div>
  
  <div className="grid w-1/3 h-20 flex-grow card  rounded-box place-items-center">
    
    <h1 className='text-2xl font-bold'>Come</h1>
    {/* <h3 className=' text-center font-bold'>Formazione, aggiornamento ed esperienza sono nel nostro DNA.</h3>
    <h3 className=' text-center'>Non sono i settori di mercato o le piattaforme pubblicitarie a fare la differenza ma la nostra competenza.</h3> */}

    </div>
  <div className="divider divider-horizontal"></div>
  <div className="grid w-1/3 h-20 flex-grow card  rounded-box place-items-center">
    
    <h1 className='text-2xl font-bold'>Perchè</h1>

      {/* <h3 className=' text-center font-bold'>Crediamo nella trasparenza,
        in un rapporto di confronto
        e collaborazione continua con il cliente.</h3> */}

    {/* <h3>Ad ogni progetto diamo presenza, attenzione e cura.</h3>
    <h3>Da noi trovi sempre qualcuno che ti risponde quando chiami!</h3> */}
    
    
  </div>
</div>
   
    </div>
)


}

export default Main;