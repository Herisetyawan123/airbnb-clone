import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoPersonCircle } from 'react-icons/io5';
import { HiSearch } from 'react-icons/hi';
import { BiFilter } from 'react-icons/bi';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import BoxCategory from './box-category/box-category';

export default function Navbar() {
  const list = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0];
  return (
    <div>  
      <nav className="sm:px-20 py-4 px-3 flex sm:justify-between justify-center items-center border-b">
        <div className="lg:flex hidden">
          <h1 className="text-[#FF385C] text-lg font-bold">AirBnB</h1>
        </div>
        <div className="flex bg-white border w-max rounded-full p-2 items-center cursor-pointer divide-x shadow-md hover:shadow-lg">
          <div className="px-5">
            <h3 className="text-center font-medium text-sm">Ke mana saja</h3>
          </div>
          <div className="px-5 ">
            <h3 className="font-medium text-sm">Minggu mana pun</h3>
          </div>
          <div className="pl-5 flex items-center justify-end">
            <h3 className="font-medium text-sm text-gray-500 mr-5">tambahkan tamu</h3>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-red-500 border">
              <HiSearch className='text-white' />
            </div>
          </div>
        </div>
        <div className="md:flex hidden">
          <div className="py-1 px-2 gap-5 border rounded-full flex items-center justify-center">
            <HiOutlineBars3 className='ml-1' size={20} />
            <IoPersonCircle className='text-gray-400' size={35} />
          </div>
        </div>
      </nav>
      <div className='px-20 pt-5 flex items-center gap-5'>
        <div className='relative flex-1 overflow-hidden'>
          <div className='absolute cursor-pointer border-black w-8 h-8 border rounded-full bg-white top-[50%] -translate-y-[50%] flex justify-center items-center'>
            <IoIosArrowBack />
          </div>
          <div className='absolute cursor-pointer border-black w-8 h-8 border rounded-full bg-white top-[50%] -translate-y-[50%] flex justify-center items-center right-0'>
            <IoIosArrowForward />
          </div>
          <div className='flex'>
            {
              list.map((value) => <BoxCategory />)
            }
          </div>
        </div>
        <div className='basis-[fit-content] ml-5'>
          <div className='flex items-center gap-2 border px-3 py-1 rounded-md cursor-pointer'>
            <BiFilter />
            <p className='font-medium'>filter</p>
          </div>
        </div>
      </div>
    </div>
  );
}