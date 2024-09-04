import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Detailmodal from "./components/Detailmodal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between font-mono">
        <div className="bg-blue-800 p-2 w-full text-white text-center">
          Thank you for visiting lets make something great together!
        </div>
        <Navbar />
        <div className="flex justify-end lg:w-5/6 mx-auto my-2 gap-2 px-4">
          <div className="border-2 outline-1 rounded-md items-center text-center p-2 cursor-pointer hover:bg-blue-800 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
              />
            </svg>
          </div>
          <div className="border-2 outline-1 rounded-md items-center text-center p-2 cursor-pointer hover:bg-blue-800 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
              />
            </svg>
          </div>
        </div>
        <div className="grid 3xl:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:w-5/6 sm:w-full mx-auto my-2 sm:px-4 gap-3">
          <div className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8 mx-auto">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/assests/images/profile-picture-3.jpg"
                alt="Bonnie image"
                width={96}
                height={96}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>

              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Second Name:</span>
                <span>Green Boinne</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Email:</span>
                <span>Youremail@gmail.com</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Phone:</span>
                <span>+91 8268 7878</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Address:</span>
                <span className="text-right">99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span className="text-right">BSIT Computer Science</span>
              </div>

              <div className="flex mt-4 md:mt-6">
                <a
                  onClick={openModal}
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  Delete
                </a>
                <Detailmodal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>

          <div className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8 mx-auto">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/assests/images/profile-picture-3.jpg"
                alt="Bonnie image"
                width={96}
                height={96}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>

              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Second Name:</span>
                <span>Green Boinne</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Email:</span>
                <span>Youremail@gmail.com</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Phone:</span>
                <span>+91 8268 7878</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Address:</span>
                <span className="text-right">99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span className="text-right">BSIT Computer Science</span>
              </div>

              <div className="flex mt-4 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>

          <div className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8 mx-auto">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/assests/images/profile-picture-3.jpg"
                alt="Bonnie image"
                width={96}
                height={96}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>

              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Second Name:</span>
                <span>Green Boinne</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Email:</span>
                <span>Youremail@gmail.com</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Phone:</span>
                <span>+91 8268 7878</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Address:</span>
                <span className="text-right">99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span className="text-right">BSIT Computer Science</span>
              </div>

              <div className="flex mt-4 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>

          <div className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8 mx-auto">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/assests/images/profile-picture-3.jpg"
                alt="Bonnie image"
                width={96}
                height={96}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>

              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Second Name:</span>
                <span>Green Boinne</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Email:</span>
                <span>Youremail@gmail.com</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Phone:</span>
                <span>+91 8268 7878</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Address:</span>
                <span className="text-right">99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span className="text-right">BSIT Computer Science</span>
              </div>

              <div className="flex mt-4 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-5/6 sm:w-full mx-auto">
          <div className="grid 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 my-2 sm:px-4 gap-3 justify-items-start">
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
                    className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
                  >
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
                        <td>
                          <p className="break-all">
                            99th, Around St, Pekanbaru
                          </p>
                        </td>
                        <td>BSIT Computer Science</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex gap-2 items-center mt-2">
                    <div><a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                          >
                            Edit
                          </a>
                          </div>
                          <div>
                          <a
                            href="#"
                            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                          >
                            Delete
                          </a>
                          </div>
                  </div>
                </div>
              </div>
            </div>

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
                    className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
                  >
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
                    <div><a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                          >
                            Edit
                          </a>
                          </div>
                          <div>
                          <a
                            href="#"
                            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                          >
                            Delete
                          </a>
                          </div>
                  </div>
                </div>
              </div>
            </div>

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
                    className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
                  >
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
                    <div><a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                          >
                            Edit
                          </a>
                          </div>
                          <div>
                          <a
                            href="#"
                            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                          >
                            Delete
                          </a>
                          </div>
                  </div>
                </div>
              </div>
            </div>

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
                    className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
                  >
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
                    <div><a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                          >
                            Edit
                          </a>
                          </div>
                          <div>
                          <a
                            href="#"
                            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                          >
                            Delete
                          </a>
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
