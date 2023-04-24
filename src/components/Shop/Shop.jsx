import React, { useContext, useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
const Shop = () => {


    //for fetch data
    const [products, setProduct] = useState([]);
    // console.log(products.length)

    //put data to cart
    const [cart, setCart] = useState([]);
    //core data
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    // local storage
    useEffect(() => {
        //console.log('products',products);
        const storedCart = getShoppingCart();

        const savedCart = [];
        //console.log(storedCart);
        // step 1 get id
        for (const id in storedCart) {
            //console.log(id);
            // step 2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            //console.log(addedProduct);
            // step 3: get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4" add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        //step 5 set the cart
        setCart(savedCart);
    }, [products]) // set dependency for async reload (fetch)


    // get data to cart from product
    const handleAddToCart = (product) => {
        // every time new cart
        const newCart = [...cart, product];
        setCart(newCart);
        // data to db
        addToDb(product.id)
    }


    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='flex  px-10'>
            <div className="grid grid-cols-3 gap-8 ">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        // push to cart
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="w-2/5 ml-8 bg-orange-200 ">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to ='/orders' className=''>
                    <button  className='bg-orange-500 text-white flex justify-between items-center mx-4 w-96 mb-96 p-3 rounded  active:scale-50 duration-1000'>
                        <span> Review Orders</span>
                        <FontAwesomeIcon className='h-6' icon={faArrowRight} />
                    </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;