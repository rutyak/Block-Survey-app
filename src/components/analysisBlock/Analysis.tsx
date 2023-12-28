import Navbar from '../Navbar/Navbar'
import './Analysis.css'
import searchIcon from '../../Asset/icons8-search-50.png'
import { useState } from 'react'

const Analysis = () => {

  const [search, setSearch] = useState<any>('');

  function handleSearchBlock(e: any){
    setSearch(e.target.value)
  }
  return (
    <div className='analysisContainer'>
      <Navbar/>
      <div className='analysis-container'>
        <div className='search-part'>
          <input type='text'
           className='search-block' 
           placeholder='Search block survey...'
           value={search}
           onChange={handleSearchBlock}
           />
          <img src={searchIcon} alt="icon" />
        </div>
        <div className='blocks'>
            <p>Todays survey this box contain more texts it is working but I want something different</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
    
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>

            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey this box contain more texts it is working but I want something different</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
    
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>

            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>

            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>

            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey this box contain more texts it is working but I want something different</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>

            <p>Todays survey</p>
            <p>Todays survey</p>
            <p>Todays survey</p>
        </div>
      </div>
    </div>
  )
}

export default Analysis
