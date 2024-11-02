import './Home.css';
import Logo from '../../../../assets/icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faInfo, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <div className='home-page'>
      <div className='home-header'>
        <div className='home-header-section'>
          <img className='app-logo' src={Logo} alt='DoorTrack logo' />
          <h1>DoorTrack</h1>
          <h2>shoru osi</h2>
        </div>

        <div className='home-header-section'>
          <div className='home-header-button' title='About DoorTrack' onClick={() => navigate('/about', {replace: true})}>
            <FontAwesomeIcon icon={faInfo} />
          </div>
          <div className='home-header-button' title='Settings' onClick={() => navigate('/settings', {replace: true})}>
            <FontAwesomeIcon icon={faGear} />
          </div>
          <div className='home-header-button' title='Edit Configs' onClick={() => navigate('/config', {replace: true})}>
            <FontAwesomeIcon icon={faListCheck} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;