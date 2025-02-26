import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchWomenData } from '../../Slices/WomenSlice';

const Women = () => {
    const dispatch = useDispatch();
    const { loading, WomenProducts, error } = useSelector(state => state.womens);

    useEffect(() => {
        dispatch(FetchWomenData());
    }, [dispatch]);

    return (
        <div className='bg-red-300'>
          <h1>Women's Clothing</h1>

            
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {WomenProducts.length === 0 && !loading && <p>No products found.</p>}
            {WomenProducts.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title} style={{ width: "150px", height: "150px" }} />
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Women;
