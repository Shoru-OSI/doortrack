import './PageTitle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface PageTitleProps {
  title: string,
  backpage: string
}

function PageTitle({ title, backpage }: PageTitleProps) {

  const navigate = useNavigate();

  const handleBackButtonClicked = () => {
    navigate('/' + backpage, {replace: true});
  }

  return (
    <div className='page-title'>
      {backpage !== null && <FontAwesomeIcon className='page-title-back-button' icon={faChevronLeft} onClick={handleBackButtonClicked} /> }
      <h1>{title}</h1>
    </div>
  )

}

export default PageTitle;