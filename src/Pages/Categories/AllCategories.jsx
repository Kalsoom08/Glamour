
import { FetchCategory } from '../../Slices/CategorySlice';
import { useSelector, useDispatch } from 'react-redux';
import Jewellery from '../../assets/Home/acc.jpg';
import Men from '../../assets/Home/men.png';
import Women from '../../assets/Home/women.png';
import Women2 from '../../assets/Home/all.png'
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
    <div className="w-full p-10">
      {loading && <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>}
      {message && <p className="text-red-500">Error: {message}</p>}

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      
        <div className="md:col-span-2 relative h-[600px] bg-cover bg-center flex items-center justify-center"
             style={{ backgroundImage: `url(${Jewellery})` }}>
          <div className="absolute inset-0"></div>
          <div className="relative text-center  p-10">
            <h1 className="text-5xl font-bold">We Are Glamour</h1>
            <p className="mt-2 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className= "mt-5 border-2 border-white px-6 py-2 text-lg font-semibold  hover:text-black transition">
              Purchase Now
            </button>
          </div>
        </div>

  
        <div className="flex flex-col gap-4">
          {["women's clothing", "men's clothing"].map((category, index) => (
            <div key={index} className="relative h-[290px] group">
              <img src={categoryImages[category]} alt={category} className="w-full h-[100%] object-fill rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-2xl font-semibold">{category}</h3>
                <p className="text-white mt-2">Lorem Ipsum is simply dummy</p>
                <button className="mt-4 border-2 border-white px-5 py-2 text-lg font-semibold hover:bg-white hover:text-black transition">
                  Discover More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default AllCategories;
