import React, { Component } from 'react';


function Carousel() {

    return(

<div>
        <div className='columns-2 columns-md-1'>
            <div>
                <h1 className='font-bold text-6xl text-start pl-10  pt-20'>Casi di <span className='text-cyan-400'>successo</span></h1>
            
            <h2 className='font-bold text-xl text-start pl-10 fontHead pt-7'>Ti raccontiamo come è andata con la gestione Green.Click</h2>
                
                <h4 className='font-bold text-xl text-start pl-10 pt-7'>Giornalmente veniamo a contatto e ascoltiamo tante storie, progetti, idee. Ci occupiamo dello sviluppo di strategie con tante caratteristiche diverse. 
                <br />Siamo convinti che per ogni business online si possa trovare la strada giusta per crescere. <br /> In questo spazio ti proponiamo alcuni casi studio per mostrarti come lavoriamo.
                
                <button className='bg-cyan-400 p-6 mb-16 border-cyan-900 text-white font-bold rounded-md mt-3'> <h1 className='flex pl-4 items-center'>Scopri di più<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</h1> </button>
                
                </h4>

                
                
                <div className="carousel w-full h-96 pt-20">
  <div id="item1" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  
  <a href="#item1" className="btn btn-xs rounded-full bg-slate-600">1</a> 
  <a href="#item2" className="btn btn-xs rounded-full bg-slate-600">2</a> 
  <a href="#item3" className="btn btn-xs rounded-full bg-slate-600">3</a> 
  <a href="#item4" className="btn btn-xs rounded-full bg-slate-600">4</a>
  <a href="#item1" className="btn btn-xs rounded-full bg-slate-600"></a> 
  <a href="#item2" className="btn btn-xs rounded-full bg-slate-600"></a> 
  <a href="#item3" className="btn btn-xs rounded-full bg-slate-600"></a> 
  <a href="#item4" className="btn btn-xs rounded-full bg-slate-600"></a>
</div>
            </div>
        </div>


</div>
    )

}

export default Carousel;