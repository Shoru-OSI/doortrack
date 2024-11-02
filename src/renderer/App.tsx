import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/splash/Splash';
import Home from './pages/home/Home';
import './App.css';
import About from './pages/about/About';
import License from './pages/about/license/License';
import Settings from './pages/settings/Settings';
import TaskListConfig from './pages/task_list_config/TaskListConfig';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'                 element={<Splash />}    />
        <Route path="/home"             element={<Home />}      />
        <Route path="/about"            element={<About />}     />
        <Route path='/about/license'    element={<License />}   />
        <Route path="/settings"         element={<Settings />}     />
        <Route path="/config"           element={<TaskListConfig />}     />
      </Routes>
    </Router>
  );
}
