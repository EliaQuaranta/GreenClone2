import Image from 'next/image'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
export default function Home() {
  return (
    <div className='page'>
    <div className='nav '>
      <Navbar/>
      </div>
     
     <div>
      <Header/>
      </div>

    <div>
      <Main/>
    </div>

      </div>
      )
}
