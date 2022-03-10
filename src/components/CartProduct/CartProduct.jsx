import React from 'react'
import { Button } from "antd/lib/radio";
import { AiFillStar } from 'react-icons/ai';
import { Navbar } from '../Navbar';

export const CartProduct = ({ product, handleDelete }) =>  {
  const addToWishlist = (data) => {
    if (localStorage.getItem("WishList") === null) {
      localStorage.setItem("WishList", JSON.stringify([]));
    }

    let wishlistPro = JSON.parse(localStorage.getItem("WishList"));
    wishlistPro.push(data);
    localStorage.setItem("WishList", JSON.stringify(wishlistPro));
  };

  return (    
        <>
                <div className='box'>
                        <img src={product.image} alt={product.shopName}/>
                        <p >{product.shopName}</p>
                        <p>Ratings : {product.ratings} <AiFillStar /> </p>
                        <Button onClick={() => addToWishlist(product)}>
       Add to Wishlist
       </Button>
     <Button onClick={() => handleDelete(product)}>Delete</Button>
                </div>  
                </>  
  
  );
}
