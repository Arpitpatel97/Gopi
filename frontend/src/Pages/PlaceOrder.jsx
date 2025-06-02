import React, {useState, useContext} from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'

const Placeorder = () => {

 const [method, setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between pt-5 sm:pt-14 min-h-[80vh] border-t gap-10'>

      {/* -----------left side: Delivery Info ----------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Email' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Zipcode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
        </div>
      </div>

      {/* -----------right side: Cart + Payment Method ----------- */}
      <div className='flex flex-col gap-8 w-full sm:max-w-[400px]'>
        <CartTotal />
        
        <div>
  <Title text1={'PAYMENT'} text2={'METHOD'} />
  <div className='flex gap-3 flex-col lg:flex-row mt-4'>
    
    <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-3 cursor-pointer rounded'>
      <p className={`w-4 h-4 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
      <img className='h-5 object-contain' src={assets.stripe_logo} alt='Stripe' />
    </div>
    
    <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-3 cursor-pointer rounded'>
      <p className={`w-4 h-4 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
      <img className='h-5 object-contain' src={assets.razorpay_logo} alt='Razorpay' />
    </div>
    
    <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-3 cursor-pointer rounded'>
      <p className={`w-4 h-4 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
      <p className='text-gray-500 text-sm font-medium'>Cash on Delivery</p>
    </div>

          </div>
          <div className='w-full text-end mt-8'>
           <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Placeorder
