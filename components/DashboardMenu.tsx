import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const DashboardMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState('Menu 1');
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className='h-full w-full flex gap-3 pt-28'>
      <div className='w-[30%] bg-white rounded-md p-8 border drop-shadow-lg'>
        <div className='flex flex-col gap-3'>
          <button className='text-start' onClick={() => handleMenuClick('Menu 1')}>
            <div
              className={`px-4 py-2 rounded-md ${selectedMenu === 'Menu 1' ? 'bg-slate-800 text-white' : 'hover:bg-slate-600 hover:text-white'} duration-300`}
            >
              Menu 1
            </div>
          </button>

          <button className='text-start' onClick={() => handleMenuClick('Menu 2')}>
            <div
              className={`px-4 py-2 rounded-md ${selectedMenu === 'Menu 2' ? 'bg-slate-800 text-white' : 'hover:bg-slate-600 hover:text-white'} duration-300`}
            >
              Menu 2
            </div>
          </button>

          <button className='text-start' onClick={() => handleMenuClick('Menu 3')}>
            <div
              className={`px-4 py-2 rounded-md ${selectedMenu === 'Menu 3' ? 'bg-slate-800 text-white' : 'hover:bg-slate-600 hover:text-white'} duration-300`}
            >
              Menu 3
            </div>
          </button>

          <button className='text-start' onClick={() => handleMenuClick('Menu 4')}>
            <div
              className={`px-4 py-2 rounded-md ${selectedMenu === 'Menu 4' ? 'bg-slate-800 text-white' : 'hover:bg-slate-600 hover:text-white'} duration-300`}
            >
              Menu 4
            </div>
          </button>
        </div>
      </div>
      <div className='w-[70%] bg-white rounded-md border drop-shadow-lg p-8'>
        <div className='flex flex-col gap-5'>
        <AnimatePresence mode='wait'>
          {selectedMenu === 'Menu 1' ? (
            <motion.div
              key={selectedMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Content</h1>
              <h1 className='text-4xl font-semibold'>Menu 1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque eius ducimus laudantium incidunt. Quia necessitatibus alias expedita? Nesciunt repellat reprehenderit mollitia provident praesentium laudantium fugit, quidem ex ullam ducimus.</p>
            </motion.div>
          ) : selectedMenu === 'Menu 2' ? (
            <motion.div
              key={selectedMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Content</h1>
              <h1 className='text-4xl font-semibold'>Menu 2</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque eius ducimus laudantium incidunt. Quia necessitatibus alias expedita? Nesciunt repellat reprehenderit mollitia provident praesentium laudantium fugit, quidem ex ullam ducimus.</p>
            </motion.div>
          ) : selectedMenu === 'Menu 3' ? (
            <motion.div
              key={selectedMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Content</h1>
              <h1 className='text-4xl font-semibold'>Menu 3</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque eius ducimus laudantium incidunt. Quia necessitatibus alias expedita? Nesciunt repellat reprehenderit mollitia provident praesentium laudantium fugit, quidem ex ullam ducimus.</p>
            </motion.div>
          ) : selectedMenu === 'Menu 4' ? (
            <motion.div
              key={selectedMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Content</h1>
              <h1 className='text-4xl font-semibold'>Menu 4</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque eius ducimus laudantium incidunt. Quia necessitatibus alias expedita? Nesciunt repellat reprehenderit mollitia provident praesentium laudantium fugit, quidem ex ullam ducimus.</p>
            </motion.div>
          ) : (
            ''
          )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
