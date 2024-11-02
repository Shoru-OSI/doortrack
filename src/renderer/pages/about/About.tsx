import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/page-title/PageTitle';
import './About.css';

function About() {

  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate('/' + url, {replace: true});
  }

  return (
    <div className='page-content'>
      <div>
        <PageTitle title='About DoorTrack' backpage='home' />
        <div className='detail-box'>
          <div>
            <p>
              <b>DoorTrack v.1.0.0</b> <br/>
              Keep your venue on-track. An app from Shoru's Open-Source Initiative. <br/>
              <i>Designed & developed by Thomas McCarthy</i>
            </p>
            <button onClick={() => {handleNavigate('about/license')}}>MIT License</button>
          </div>
        </div>

        <h3>DoorTrack</h3>
        <p>
          A project management tool for small performance venues. DoorTrack is a system for building production timelines. These 
          timelines, made up of completable tasks (forms, tick-lists, must-read documents, etc.), can be easily updated to reflect 
          progress. With an intuitive and fully-customisable configuration system, DoorTrack is the perfect choice for keeping on 
          top of your productions' admin. <br/><br/>
          DoorTrack was initially developed and installed for the University of York Drama Society, to reduce paper waste at their venue.
        </p>
        <h3>Shoru OSI</h3>
        <p>
          The Shoru Open-Source Initiative aims to provide small, offline, and oftentimes bespoke applications for amateur 
          performance groups. Like all Shoru applications, providing services that can be adapted to suit your exact needs 
          is our upmost priority. Released under an MIT License, our OSI apps are free to use, download, edit, and 
          reupload - all as part of our commitment to improving the amateur performance scene.
        </p>
      </div>
    </div>
  )

}

export default About;