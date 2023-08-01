import Navigation from './components/Navigation';
import {
  Outlet,
} from 'react-router-dom';

function App() {
  return (
    <div className="w-full h-screen">
      <Outlet/>
      <Navigation />
    </div>
  );
}

export default App;
