import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setbestSeller] = useState([]);

  useEffect(() => {
    console.log('Products:', products); 
    const bestProduct = products.filter((item) => item.bestseller);
    console.log('Best Products:', bestProduct); 
    setbestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'BEST '} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.length > 0 ? (
          bestSeller.map((item, index) => (
            <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No best sellers available.</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;