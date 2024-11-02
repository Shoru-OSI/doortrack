import './Splash.css';
import Logo from '../../../../assets/icon.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Splash() {

  const navigate = useNavigate();

  const startTimer = () => {
    setTimeout(() => {
      navigate('/home', {replace: true})
    }, 4500);
  }

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className='splash-page'>
      <div className='splash-contents'>
        <img className='splash-logo' src={Logo} width='200px' />
        <div className='splash-name'>
          <h1>DoorTrack</h1>
          <h2>shoru osi</h2>
        </div>
      </div>
    </div>
  )
}

export default Splash;