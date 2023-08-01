import { createContext, useState } from 'react';

import Modal from './components/Modal';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

type modalOpen = {
  isModalOpen: boolean;
  setOpenModal: (value: boolean) => void;
};

export const ModalContext = createContext<modalOpen | null>(
  null
);

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen: modalOpen,
        setOpenModal: setModalOpen,
      }}
    >
      <div className="w-full h-screen">
        <Modal />
        <Outlet />
        <Navigation />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
