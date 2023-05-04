"use client";

import Image from 'next/image';
import {HiOutlineMenu} from 'react-icons/hi';
import User from './User';

const Search = () => {
  return ( 
    <div>
      <div
        className="
          flex
          flex-row
          items-center
          justify-between
          py-2
          gap-6
          cursor-pointer
        "
      >
        <div className="text-sm hidden sm:block">Home</div>
        <div className="text-sm hidden sm:block">Search Car</div>
        <div className="text-sm hidden sm:block">Add Car</div>
        <div className="hidden sm:block">
          <User />
        </div>
        <div className='md:hidden'>
          <HiOutlineMenu />
        </div>
      </div>
    </div>
   );
}
 
export default Search;