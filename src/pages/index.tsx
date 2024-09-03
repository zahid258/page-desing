import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between font-mono">
        <div className="bg-blue-800 p-2 w-full text-white text-center">
          Thank you for visiting let's make something great together!
        </div>
        <Navbar />

        <div className="grid 3xl:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:w-5/6 sm:w-full mx-auto my-7 sm:px-4 gap-3">
          <motion.div
           whileHover={{ scale: 1.05, backgroundColor: '#eaf0ff' }}
           transition={{ type: "spring", stiffness: 300 }}
           
          className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8">
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
                <span>99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span>BSIT Computer Science</span>
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
          </motion.div>
          <motion.div
           whileHover={{ scale: 1.05, backgroundColor: '#eaf0ff' }}
           transition={{ type: "spring", stiffness: 300 }}
           
          className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8">
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
                <span>99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span>BSIT Computer Science</span>
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
          </motion.div>
          <motion.div
           whileHover={{ scale: 1.05, backgroundColor: '#eaf0ff' }}
           transition={{ type: "spring", stiffness: 300 }}
           
          className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8">
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
                <span>99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span>BSIT Computer Science</span>
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
          </motion.div>
          <motion.div
           whileHover={{ scale: 1.05, backgroundColor: '#eaf0ff' }}
           transition={{ type: "spring", stiffness: 300 }}
           
          className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8">
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
                <span>99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span>BSIT Computer Science</span>
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
          </motion.div>
          <motion.div
           whileHover={{ scale: 1.05, backgroundColor: '#eaf0ff' }}
           transition={{ type: "spring", stiffness: 300 }}
           
          className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8">
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
                <span>99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span>BSIT Computer Science</span>
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
          </motion.div>
          <motion.div
           whileHover={{ scale: 1.05, backgroundColor: '#eaf0ff' }}
           transition={{ type: "spring", stiffness: 300 }}
           
          className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8">
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
                <span>99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span>BSIT Computer Science</span>
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
          </motion.div>
          <motion.div
           whileHover={{ scale: 1.05, backgroundColor: '#eaf0ff' }}
           transition={{ type: "spring", stiffness: 300 }}
           
          className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8">
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
                <span>99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span>BSIT Computer Science</span>
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
          </motion.div>
          <motion.div
           whileHover={{ scale: 1.05, backgroundColor: '#eaf0ff' }}
           transition={{ type: "spring", stiffness: 300 }}
           
          className="w-full flex-wrap flex bg-white border border-gray-200 rounded-lg shadow border-t-8 border-t-blue-800 my-2">
            <div className="flex flex-col items-center py-8">
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
                <span>99th, Around St, Pekanbaru</span>
              </div>
              <div className="flex justify-between w-full px-7 py-2 border-b border-gray-200 hover:bg-blue-200 cursor-pointer">
                <span className="font-bold text-black">Qualification:</span>
                <span>BSIT Computer Science</span>
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
          </motion.div>
          
          
        </div>
      </div>
    </main>
  );
}
