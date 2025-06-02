import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import ProductItems from '../Components/ProductItems'

const Collection = () => {
  const { products,search,showSearch} = useContext(ShopContext)
  const [showFilters, setShowFilters] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    const value = e.target.value
    setCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    setSubCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  const applyFilters = () => {
    let productCopy = products.slice()

    if(showSearch && search) {
      productCopy = productCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item =>
        category.includes(item.category)
      )
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item =>
        subCategory
          .map(s => s.toLowerCase())
          .includes(item.subCategory?.toLowerCase())
      )
    }

    setFilterProducts(productCopy)
  }

  const sortProducts = (sortType) => {

     let fpcopy=filterProducts.slice();

     switch (sortType){
      case 'low-high':
        setFilterProducts(fpcopy.sort((a, b) => a.price - b.price))
        break;
        case 'high-low':
        setFilterProducts(fpcopy.sort((a, b) => b.price - a.price))
        break;
        default:
          applyFilters();
          break;
     }

  }

  useEffect(() => {
    if (products.length > 0) {
      applyFilters()
    }
  }, [category, subCategory,search,showSearch])
  useEffect(() => {
    sortProducts(sortType)
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=''
          />
        </p>

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label className='flex gap-2' key={cat}>
                <input type='checkbox' className='w-4' value={cat} onChange={toggleCategory} />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            {['TopWear', 'BottomWear', 'WinterWear'].map((type) => (
              <label className='flex gap-2' key={type}>
                <input type='checkbox' className='w-4' value={type} onChange={toggleSubCategory} />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex text-base justify-between sm:text-2xl mb-5'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value='relevant'>Sort By: Relevant</option>
            <option value='low-high'>Sort By: Low to High</option>
            <option value='high-low'>Sort By: High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItems
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
