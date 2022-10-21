import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { CartConText, ProductConText } from './Root';
import CartItem from './CartItem';
import { deleteShoppingCart, removeFromDb } from '../utils/fakeDB';
import { toast } from 'react-toastify';

const Cart = () => {
  const [cart, setCart] = useContext(CartConText)
  const removeItem = id =>{
    const remaing = cart.filter(product=>product.id !== id)
    setCart(remaing)
    removeFromDb(id)

    toast.warning('Product Removed', {autoClose: 500})
  }

  let total = 0;
  for(const product of cart){
    total = total + product.price * product.quantity 
  }
  const orderPlace = ()=>{
   if(cart.length){
    setCart([])
    deleteShoppingCart()
    return toast.success('Order Place',{aotoClose: 500})
   }
   else{
    return toast.error('Cart is Empty',{aotoClose: 500})
   }
  }

  return (
    <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
      <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
        <h2 className='text-xl font-semibold'>
          {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
        </h2>
        <ul className='flex flex-col divide-y divide-gray-700'>

        {
          cart.map(product => <CartItem
                    key={product.id}
                    product={product}
                    removeItem={removeItem}
                    ></CartItem>)
        }

        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total amount: <span className='font-semibold'>{total}$</span>
          </p>
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className='flex justify-end space-x-4'>
          <Link to='/shop'>
            <button
              type='button'
              className='px-6 py-2 border rounded-full border-cyan-400'
            >
              Back <span className='sr-only sm:not-sr-only'>to shop</span>
            </button>
          </Link>
          <button
          onClick={orderPlace}
            type='button'
            className='px-6 py-2 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800'
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
