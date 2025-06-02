import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';
const Product = () => {
  const { productId } = useParams();
 
  
  const { products,currency,addToCart } = useContext(ShopContext);
 
  const [productData, setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');
  const fetchProductData = async () => {
    products.map((item)=> {
        if(item._id === (productId)){
           setProductData(item);
           setImage(item.image[0]);
          
           return null;
        }
    })
   
 };

  useEffect(() =>{
    fetchProductData();

  },[productId,products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100' >
      {/* {Product Data} */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/* product images */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
             <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item,index)=>(
                  <img src={item} key={index} className='w-20 sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' onClick={()=>setImage(item)} alt="" />
                ))
              }
             </div>
              <div className='w-full sm:w-[80%]'>
            <img  className='w-full h-auto' src={image} alt="" />
              </div>
          </div>
          {/* product info */}
          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex item-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className='w-3 5' />
              <img src={assets.star_icon} alt="" className='w-3 5' />
              <img src={assets.star_icon} alt="" className='w-3 5' />
              <img src={assets.star_icon} alt="" className='w-3 5' />
              <img src={assets.star_dull_icon} alt="" className='w-3 5' />
              <p className='pl-2 '>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index) => (
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' :' '}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button  onClick={()=>addToCart(productData._id,size)}  className='bg-black rounded-full text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
           <hr className='mt-8 sm:w-3/4' />
           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
             <p>100% original product</p>
             <p> Cash On Delivery Available</p>
             <p>Easy return and exchange policy within 7 days</p>
           </div>
          </div>
      </div>

      {/* description and review section */}
       <div className='mt-20'>
         <div className='flex'>
            <p className='border px-5 py-3 text-sm '>Description</p>
            <p className='border px-5 py-3 text-sm '> Reviews(122)</p>
         </div>
         <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                     <p>Gopi E-Commerce App offers a seamless online shopping experience with a wide range of products at your fingertips. Discover top deals, secure payments, and fast delivery—all in one place.</p>
         <p>Shop smart and easy with the Gopi E-Commerce App, where quality meets convenience. Enjoy user-friendly navigation, exclusive offers, and reliable customer support every step of the way.
</p>
         </div>
       </div>
       {/* ----display related product -------- */}

        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ): <div className='opacity-0'></div>;
}

export default Product
