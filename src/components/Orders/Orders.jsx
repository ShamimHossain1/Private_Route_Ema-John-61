import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItems/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState(products);

    const handleRemoveCart = (id) => {
            const remaining= cart.filter(product => product.id !==id);
            setCart(remaining);
            removeFromDb(id);


    }
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    // console.log(products);
    return (
        <div className='flex mt-10 px-52'>
            <div className='w-6/12 mx-auto '>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveCart={handleRemoveCart}

                    ></ReviewItem>)
                }
            </div>
            <div className=" w-4/12  bg-yellow-200 rounded-lg ">
                <Cart

                cart={cart}
                handleClearCart={handleClearCart}
                 > 
                 <Link to ='/checkout' className='pr-8'>
                    <button  className='bg-orange-500 text-white flex justify-between items-center mx-4 w-full mb-96 p-3 rounded  active:scale-50 duration-1000'>
                        <span> Proceed CheckOut</span>
                        <FontAwesomeIcon className='h-6' icon={faShoppingBasket} />
                    </button>
                    </Link>
                   
                 </Cart>
            </div>
        </div>
    );
};

export default Orders;