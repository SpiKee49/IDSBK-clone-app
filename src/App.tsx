import MainBody from './layouts/MainBody';
import Navigation from './components/Navigation';
import WaletHeader from './components/WaletHeader';

function App() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col justify-center bg-white pb-40">
        <WaletHeader />
        <MainBody />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
