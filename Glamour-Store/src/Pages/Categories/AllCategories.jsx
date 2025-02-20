import React, { useEffect } from 'react';
import { FetchCategory } from '../../Slices/CategorySlice';
import { useSelector, useDispatch } from 'react-redux';
import Jewellery from '../../assets/Home/accessories.png';
import Men from '../../assets/Home/men.png';
import Women from '../../assets/Home/women.png';

const categoryImages = {
  jewelery: Jewellery,
  "men's clothing": Men,
  "women's clothing": Women,
};

const AllCategories = () => {
  const dispatch = useDispatch();
  const { CategoriesArray, loading, message } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(FetchCategory());
  }, [dispatch]);

  console.log(CategoriesArray);


  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {message && <p>Error: {message}</p>}
      
      {CategoriesArray.slice(1,4).map((category, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    
          <img src={categoryImages[category]} alt={category} width={50} height={50} />

          <h3 className='uppercase'
          >{category}</h3>
        </div>
      ))}
    </div>
  );
};

export default AllCategories;
