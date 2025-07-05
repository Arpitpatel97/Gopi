import {assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div  className='flex items-center justify-between bg-gray-300 text-white px-5 py-3 sm:px-10 sm:py-4'>
      <img 
       className='w-[max(10%,80px)]'
       src={assets.logo} alt="" />
      <button onClick={()=> setToken('')} className='bg-gray-400 text-white px-5 py-2 sm:px-7 sm:y-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
