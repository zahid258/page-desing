import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './components/nav/Navbar';
import { motion } from 'framer-motion';
import Detailmodal from './components/views/Detailmodal';
import { TopHeading } from './components/nav/TopHeading';
import { GridView } from './components/views/GridView';
import { TileView } from './components/views/TileView';
import { SwitchView } from './components/SwitchView';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('grid');
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Fetch data from the public API
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'
        ); // Replace with your actual API endpoint
        const data = await response.json();
        setUser(data);
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

        {view === 'grid' && user.length > 0 && !isLoading && (
          <GridView
            openModal={openModal}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            users={user}
          />
        )}
        {view === 'tile' && user.length > 0 && !isLoading && (
          <TileView
            openModal={openModal}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            users={user}
          />
        )}
      </div>
    </main>
  );
}
