import { useEffect } from 'react';
import Image from 'next/image';

const Detailmodal = ({ isOpen, onClose, users, userId }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const findUserById = (id) => users.find((user) => user.id === id);

  const user = findUserById(userId);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}>
      {user && (
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg transform transition-transform duration-300"
          onClick={(e) => e.stopPropagation()}>
          <h3 className="text-lg font-medium text-gray-900">User Detail</h3>
          <div className="flex flex-col items-center py-8">
            <Image
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/assests/images/profile-picture-3.jpg"
              alt="Bonnie image"
              width={96}
              height={96}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user.firstName} {user.lastName}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Age: {user.age}
            </span>
            <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
              <span className="font-bold text-black">Second Name:</span>
              <span>{user.lastName}</span>
            </div>
            <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
              <span className="font-bold text-black">Email:</span>
              <span>{user.email}</span>
            </div>
            <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
              <span className="font-bold text-black">Phone:</span>
              <span>{user.contactNumber}</span>
            </div>
            <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
              <span className="font-bold text-black">Address:</span>
              <span>{user.address}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Detailmodal;
