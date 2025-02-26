import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchAccessories } from "../../Slices/AccessorySlice"; 
const Accessories = () => {
  const dispatch = useDispatch();
  const { loading, accessoriesArray, message } = useSelector((state) => state.accessories);
  
  useEffect(() => {
    dispatch(FetchAccessories());
  }, [dispatch]);


  return (
    <div id="accessories" className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Accessories</h1>
      
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {message && <p className="text-center text-red-500">{message}</p>}

      {accessoriesArray?  (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {accessoriesArray.slice(0,12).map((item) => (
            <div key={item.id} className="bg-white shadow-lg  rounded-2xl p-4 hover:shadow-2xl transition-all">
              <img 
                src={item.api_featured_image || "/placeholder-image.jpg"} 
                alt={item.title} 
                className="w-48 h-48  object-cover rounded-lg  "
              />
              <h2 className="text-lg font-semibold mt-3">{item.name}</h2>
              {/* <p className="text-gray-600 text-sm mt-1">{item.description}</p> */}
              <h3 className="text-lg font-bold mt-2 text-blue-600">${parseFloat(item.price).toFixed(2)}</h3>
               <p className="text-gray-600 text-sm mt-1">Rating: {item.rating}</p> 
              <button 
 
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Accessories are currently out of stock. Check back later!</p>
      )}
    </div>
  );
};

export default Accessories;
