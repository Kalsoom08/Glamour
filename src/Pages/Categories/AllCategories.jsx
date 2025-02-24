import { FetchCategory } from '../../Slices/CategorySlice';
import { useSelector, useDispatch } from 'react-redux';
import Jewellery from '../../assets/Home/acc3.jpg';
import Men from '../../assets/Home/men.jpg';
import Women from '../../assets/Home/women.jpg';
import { useEffect } from 'react';

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

  return (
    <div className="w-full p-5 md:p-10">
      {loading && <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>}
      {message && <p className="text-red-500">Error: {message}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {["jewelery", "women's clothing", "men's clothing"].map((category, index) => (
          <div key={index} className="relative h-[300px] md:h-[400px] group">
            <img 
              src={categoryImages[category]} 
              alt={category} 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 transition">
              <h3 className="text-white text-2xl font-semibold uppercase">{category}</h3>
              <p className="text-white mt-2">Lorem Ipsum is simply dummy</p>
              <button className="mt-4 border-2 border-white px-5 py-2 text-lg font-semibold text-white transition">
                Discover More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
