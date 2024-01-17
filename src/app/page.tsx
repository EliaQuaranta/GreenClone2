import Image from 'next/image'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Checkup from './components/checkup';
import Analisi from './components/Analisi';
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
<div>
  <Checkup/>
</div>
<div>
  <Analisi/>
</div>

      </div>
      )
}
