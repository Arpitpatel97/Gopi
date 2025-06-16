import React, { useEffect } from 'react'
import { useContext,useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';
const RelatedProducts = ({category,subCategory}) => {

  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  

  useEffect(()=> {
         if(products.length > 0) {
            let productscCopy= products.slice();
            productscCopy = productscCopy.filter((item) => 
                category === item.category)
            productscCopy = productscCopy.filter((item) => 
                category === item.category)
            productscCopy = productscCopy.filter((item) => 
                subCategory === item.subCategory)
            setRelated(productscCopy.slice(0,5)); 
         }
  },[products])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
           {related.map((item,index)=> (
            <ProductItems key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
           ))}

       </div>
    </div>
  )
}

export default RelatedProducts
