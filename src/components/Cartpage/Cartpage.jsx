import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartProduct } from '../CartProduct/CartProduct';
import { Navbar } from '../Navbar';

export  const Cartpage = () => {

    const [cartProducts, setCartProducts] = useState([]);

    console.log(cartProducts);

  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("punctureCart")));
  }, []);

  const handleDelete = (data) => {

    let cart = JSON.parse(localStorage.getItem("punctureCart"));

    let newCart = cart.filter((e) => e._id !== data._id);

    localStorage.setItem("punctureCart", JSON.stringify(newCart));

    setCartProducts(JSON.parse(localStorage.getItem("punctureCart")));
  };



  return (
      <>
    <Navbar />
    
{cartProducts === null ? (
        <div className="heading">Your Cart</div>
      ) : (
        <div>
          <div className="heading">Your Cart</div>
          <div className="btnDiv">
        <Link to="/login" className="checkOutBtn">
          Checkout
        </Link>
      </div>
          <div className="container">
            {cartProducts.map((e) => (
              <CartProduct key={e.id} product={e} handleDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    
</>
  )
}

