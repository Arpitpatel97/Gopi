import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pl-[20%] pt-6 text-[15px]'>

        <NavLink to="/add" className='flex items-center gap-3 border border-gray-300 border-r-0 px-2 py-1'>
          <img className='w-5 h-5' src={assets.add_icon} alt="" />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink to="/list" className='flex items-center gap-3 border border-gray-300 border-r-0 px-2 py-1'>
          <img className='w-5 h-5' src={assets.order_icon} alt="" />
          <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink to="/orders" className='flex items-center gap-3 border border-gray-300 border-r-0 px-2 py-1'>
          <img className='w-5 h-5' src={assets.order_icon} alt="" />
          <p className='hidden md:block'>Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
