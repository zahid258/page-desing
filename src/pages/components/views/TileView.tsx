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
// Define types for the propsd
interface TileViewProps {
  openModal: () => void;
  isModalOpen: boolean;
  closeModal: () => void;
  users: User[];
}

// Convert the component to TypeScript by adding type annotations
const TileView: FC<TileViewProps> = ({
  openModal,
  isModalOpen,
  closeModal,
  users,
}) => {
  const [userId, setUserId] = useState<string>('');

  return (
    <div className="lg:w-5/6 sm:w-full mx-auto">
      <div className="grid 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 my-2 sm:px-4 gap-3 justify-items-start">
        {users?.length >= 1 &&
          users?.map((user) => (
            <div
              className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden"
              key={user.id}>
              <div className="flex">
                <div className="shrink-0 xs:hidden lg:block md:block">
                  <Image
                    className="3xl:w-56 2xl:w-40 xl:w-40 lg:w-48 md:w-56 sm:w-full xs:w-full xxs:w-full object-cover"
                    width={134}
                    height={134}
                    src="/assests/images/profile-picture-3.jpg"
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                </div>
                <div className="p-2">
                  <div className="uppercase tracking-wide text-md text-indigo-800 font-semibold">
                    Visual Designer
                  </div>
                  <a
                    href="#"
                    className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                    {user.firstName} {user.lastName}
                  </a>
                  <table className="table-auto text-left text-sm">
                    <thead>
                      <tr>
                        <th>Second Name:</th>
                        <th>DOB:</th>
                        <th>Phone:</th>
                      </tr>
                      <tr>
                        <td>{user.lastName}</td>
                        <td>{user.dob}</td>
                        <td>{user.contactNumber}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Address:</th>
                        <th>Salary:</th>
                      </tr>
                      <tr>
                        <td>
                          <p className="break-all">{user.address}</p>
                        </td>
                        <td>{user.salary}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex gap-2 items-center mt-2">
                    <div>
                      <a
                        href="#"
                        onClick={() => {
                          openModal();
                          setUserId(user.id);
                        }}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Edit
                      </a>
                    </div>
                    <div>
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
              </div>
            </div>
          ))}

        {/* Example user card (remove or replace with dynamic content as needed) */}
        <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex">
            <div className="shrink-0 xs:hidden lg:block md:block">
              <Image
                className="3xl:w-56 2xl:w-40 xl:w-40 lg:w-48 md:w-56 sm:w-full xs:w-full xxs:w-full object-cover"
                width={134}
                height={134}
                src="/assests/images/profile-picture-3.jpg"
                alt="user image"
              />
            </div>
            <div className="p-2">
              <div className="uppercase tracking-wide text-md text-indigo-800 font-semibold">
                Visual Designer
              </div>
              <a
                href="#"
                className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                Bonnie Green
              </a>
              <table className="table-auto text-left text-sm">
                <thead>
                  <tr>
                    <th>Second Name:</th>
                    <th>Email:</th>
                    <th>Phone:</th>
                  </tr>
                  <tr>
                    <td>Bonnie Green</td>
                    <td>email2gmail.com</td>
                    <td>+93-394-3876</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Address:</th>
                    <th>Qualification:</th>
                  </tr>
                  <tr>
                    <td>99th, Around St, Pekanbaru</td>
                    <td>BSIT Computer Science</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex gap-2 items-center mt-2">
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Edit
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileView;
