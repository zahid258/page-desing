import React, { useEffect, useState } from 'react';

import Navbar from './components/nav/Navbar';
import { motion } from 'framer-motion';
import TopHeading from './components/nav/TopHeading';
import SwitchView from './components/SwitchView';
import GridView from './components/views/GridView';
import TileView from './components/views/TileView';
import User from './components/types';

// Define a TypeScript interface for user datad
// Define the type for the View state
type ViewType = 'grid' | 'tile';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [view, setView] = useState<ViewType>('grid');
  const [users, setUsers] = useState<User[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Fetch data from the public API
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'
        );
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between font-mono">
        <TopHeading />
        <Navbar />
        <SwitchView setView={setView} view={view} />

        {view === 'grid' && users.length > 0 && !isLoading && (
          <GridView
            openModal={openModal}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            //@ts-ignore
            users={users}
          />
        )}
        {view === 'tile' && users.length > 0 && !isLoading && (
          <TileView
            openModal={openModal}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            //@ts-ignore
            users={users}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
