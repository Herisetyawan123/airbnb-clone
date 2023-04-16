import { FaUmbrellaBeach } from "react-icons/fa";

export default function BoxCategory(){
  return (
    <div className='flex flex-col min-w-max items-center px-3 py-4 max-w-fit border-b-2 border-[#717171] mx-2'>
      <FaUmbrellaBeach size={25} className="text-[#717171]" />
      <p className='mt-2 text-[10px] text-gray-400 font-medium'>Deket pantai</p>
    </div>
  )
}