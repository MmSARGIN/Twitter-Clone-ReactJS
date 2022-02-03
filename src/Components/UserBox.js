import React from 'react';

function UserBox() {


  return <div className='flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200' >
      <img className='w-11 h-11 rounded-full' src="https://pbs.twimg.com/profile_images/1485700823627837444/31Ks1frh_400x400.jpg" alt="Profile" />
      <div className='flex flex-col'>
          <span className='font-bold text-md text-black'>Mehmet Melih Sargın</span>
          <span className='text-sm text-gray-dark'>@MehmetMelihSargın</span>
      </div>
      <div className='flex space-x-1'>
          <div className='w-1 h-1 bg-gray-900 rounded-full' />
          <div className='w-1 h-1 bg-gray-900 rounded-full' />
          <div className='w-1 h-1 bg-gray-900 rounded-full' />
      </div>
  </div>;
}

export default UserBox;
