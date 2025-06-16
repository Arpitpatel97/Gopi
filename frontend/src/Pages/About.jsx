import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'
const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
       </div>
       <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='About Us' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
        <p>Gopi Ecommerce is a modern online shopping platform offering a seamless and intuitive user experience. It features fast checkout, secure payment methods, and a wide range of quality products tailored for everyday needs.</p>
        <p>Gopi has built an impressive ecommerce app that combines sleek design with powerful functionality. His attention to detail and user-friendly approach truly set the platform apart.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Gopi's mission is to make online shopping simple, accessible, and enjoyable for everyone. He strives to deliver quality products with reliable service and a customer-first mindset.</p>
        </div>

       </div>
       <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assurance:</b>  
           <p className='text-gray-600' >At Gopi Ecommerce, quality is at the heart of everything—from carefully curated products to a smooth user experience. Every feature is crafted to ensure trust, reliability, and customer satisfaction.</p>     
            </div>
            <div className='border  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience:</b>  
           <p className='text-gray-600'>Gopi Ecommerce is designed for ultimate convenience, allowing users to shop anytime, anywhere with ease. From quick navigation to hassle-free checkout, every step saves time and effort.

                   </p> 

            </div>
            <div className='border  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exceptional Customer  service:</b>  
           <p className='text-gray-600'>Gopi Ecommerce is committed to exceptional customer service, ensuring every query is handled with care and efficiency. Support is always just a click away, providing a smooth and satisfying shopping experience.
                  </p> 
                      
            </div>
       </div>
       <NewsletterBox/>
    </div>
  )
}

export default About
