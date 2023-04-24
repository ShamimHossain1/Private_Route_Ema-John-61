import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveCart }) => {
    // console.log(product)
    const { img, name, price, shipping, id, quantity } = product;
    return (
        <div className='border-solid border rounded border-slate-300 flex p-3 gap-6 mb-4'>
            <img src={img} className='w-2/12 rounded-lg' alt="" />
            <div className='flex justify-between w-11/12 items-center '>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-lg'>{name}</h2>
                    <p>Price: <span className='text-yellow-500'>${price}</span></p>
                    <p>Shipping Charge: <span className='text-yellow-500'>${shipping}</span></p>
                    <p>Order Quantity: {quantity}</p>
                </div>

                <FontAwesomeIcon  onClick={() => handleRemoveCart(id)} className='bg-red-200 p-3 rounded-full w-6 h-6 active:scale-50 duration-2000  text-red-500' icon={faTrashAlt} />

            </div>
        </div>
    );
};

export default ReviewItem;