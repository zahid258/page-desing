import React, { useState, FC } from 'react';
import Image from 'next/image';
import Detailmodal from './Detailmodal';
interface User {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  contactNumber: string;
  address: string;
  salary: string;
}
// Define types for the props
interface GridViewProps {
  openModal: () => void;
  isModalOpen: boolean;
  closeModal: () => void;
  users: User[];
}

// Convert the component to TypeScript by adding type annotations
const GridView: FC<GridViewProps> = ({
  openModal,
  isModalOpen,
  closeModal,
  users,
}) => {
  const [userId, setUserId] = useState<string>('');

  return (
    <div className="grid 3xl:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:w-5/6 sm:w-full mx-auto my-2 sm:px-4 gap-3">
      {users.map((user) => (
        <div
          key={user.id}
          className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
          <div className="flex flex-col items-center py-8 mx-auto">
            <Image
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/assests/images/profile-picture-3.jpg"
              alt={`${user.firstName} ${user.lastName}`}
              width={96}
              height={96}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user.firstName} {user.lastName}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>

            <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
              <span className="font-bold text-black">Second Name:</span>
              <span>{user.lastName}</span>
            </div>
            <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
              <span className="font-bold text-black">DOB:</span>
              <span>{user.dob}</span>
            </div>
            <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
              <span className="font-bold text-black">Phone:</span>
              <span>{user.contactNumber}</span>
            </div>
            <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
              <span className="font-bold text-black">Address:</span>
              <span className="text-right">{user.address}</span>
            </div>
            <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
              <span className="font-bold text-black">Salary:</span>
              <span className="text-right">{user.salary}</span>
            </div>

            <div className="flex mt-4 md:mt-6">
              <a
                onClick={() => {
                  openModal();
                  setUserId(user.id);
                }}
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Edit
              </a>
              <a
                href="#"
                onClick={() => {
                  openModal();
                  setUserId(user.id);
                }}
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                Delete
              </a>
              <Detailmodal
                isOpen={isModalOpen}
                onClose={closeModal}
                users={users}
                userId={userId}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
