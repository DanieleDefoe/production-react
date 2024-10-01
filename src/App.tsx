import { Link, Outlet } from 'react-router-dom';
import './index.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Hello</h1>
      <div>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
