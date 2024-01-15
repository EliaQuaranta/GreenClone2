import React, { Component } from 'react';


function Navbar() {

    return(

        

<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="text-center px-2 mx-2 py-4 fontNav">Alsafi <img src="\simbolo-alsafi.png" className=' w-8 ' alt="" /></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal fontNav text-2xl">
          {/* Navbar menu content here */}
          <li><a>SEO</a></li>
          <li><a>TUTTI I SERVIZI</a></li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
     
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200  ">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>

    )

}

export default Navbar;