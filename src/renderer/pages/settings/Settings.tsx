import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/page-title/PageTitle';
import './Settings.css';
import LabelledInput from '../../components/labelled-input/LabelledInput';
import { useState } from 'react';

function Settings() {

  const [directory, setDirectory] = useState('');

  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate('/' + url, {replace: true});
  }

  return (
    <div className='page-content'>
      <div>
        <PageTitle title='Settings' backpage='home' />

        <LabelledInput label='Project Directory' placeholder='complete path to directory' value={directory} setValue={setDirectory} />
      </div>
    </div>
  )

}

export default Settings;