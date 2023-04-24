import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props)
    const { img, name, seller, quantity, ratings, price } = props.product
    // product cart add (onclick function) , rec from shop
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='shadow-lg rounded-xl mt-10 flex flex-col'>
            <img className='rounded-xl' src={img} alt="" />
            <div className='p-5'>
                <h6 className='text-xl font-semibold'>{name}</h6>
                <p className='font-semibold mt-1 text-red-600'>price: ${price}</p>
                <p className='font-semibold mt-1'>Manufacturer: {seller}</p>
                <p className='font-semibold mt-1 text-yellow-500'>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className=' bg-yellow-600 leading-normal w-full mt-auto text-lg font-semibold py-2 rounded-b-lg active:scale-50 duration-1000'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;