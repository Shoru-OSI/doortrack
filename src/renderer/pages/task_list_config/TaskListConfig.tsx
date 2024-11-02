import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/page-title/PageTitle';
import './TaskListConfig.css';

function TaskListConfig() {

  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate('/' + url, {replace: true});
  }

  return (
    <div className='page-content'>
      <div>
        <PageTitle title='Configs' backpage='home' />
        <div className='detail-box'>
          <div>
            <p>
              <b>Configs</b> provide a template of tasks to be completed. <br/>
              Projects can be assigned a config upon creation.
            </p>
          </div>
        </div>

      </div>
    </div>
  )

}

export default TaskListConfig;