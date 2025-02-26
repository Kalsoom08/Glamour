import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMenData } from '../../Slices/MenSlice';

const Men = () => {
    const dispatch = useDispatch();
    const { loading, menProducts, error } = useSelector(state => state.mens);

    useEffect(() => {
        dispatch(FetchMenData());
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {menProducts.length === 0 && !loading && <p>No products found.</p>}
            {menProducts.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title} style={{ width: "150px", height: "150px" }} />
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Men;
