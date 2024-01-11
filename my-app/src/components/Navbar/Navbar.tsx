import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faPoll, faVideo, faImage} from '@fortawesome/free-solid-svg-icons'
import analytics from '../../Asset/data-analytics.png'
import './Navbar.css'

const Home = () => {
  return (
    <div className='container'>
        <h1>Analysis</h1>
        <div className='nav'>
          <Link to='/'><FontAwesomeIcon icon={faUsers} className='icon users'/></Link> 
          <Link to='/form'><FontAwesomeIcon icon={faPoll} className='icon'/></Link>
          <Link to='/video'><FontAwesomeIcon icon={faVideo} className='icon'/></Link>
          <Link to='/image'><FontAwesomeIcon icon={faImage} className='icon'/></Link>
          <Link to='/analysis'><img className='analytics' src={analytics} alt='analytics'/></Link>
        </div>
    </div>
  )
}

export default Home
