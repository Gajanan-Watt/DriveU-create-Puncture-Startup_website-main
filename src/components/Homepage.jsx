import React, { useEffect, useState } from 'react'
import {array} from "../data/data" 
import {AiFillStar} from "react-icons/ai"
import {Select,Button} from "antd"
import { Navbar } from './Navbar';
const {Option} = Select;

export const  Homepage = () =>  {
    const [state,setState] = useState();
    const [data,setData] = useState([]);
    const [rating,setRating] = useState([]);
    const [discount,setDiscount] = useState([]);
    
    const handleSubmit = (value) => {
        let radiusArr;
            if(value === "500m") {
                 radiusArr = array.filter((ele) => ele.radius === 500);
            } else  if(value === "1000m") {
                radiusArr = array.filter((ele) => ele.radius === 1000);
            } else  if(value === "1500m") {
                 radiusArr = array.filter((ele) => ele.radius === 1500);
            } 
      setState(radiusArr);
      console.log(radiusArr);
    }

    const handleRating = (value) => {
        let ratingArr;
            if(value === "5") {
                 ratingArr = array.filter((ele) => ele.ratings === 5);
            } else  if(value === "8") {
                ratingArr = array.filter((ele) => ele.ratings === 8);
            } else  if(value === "9") {
                ratingArr = array.filter((ele) => ele.ratings === 9);
            } 
      setRating(ratingArr);
      console.log(ratingArr);
    }
    const handleDiscount = (value) => {
        let discountArr;
            if(value === "10") {
                 discountArr = array.filter((ele) => ele.discount === 10);
            } else  if(value === "12") {
                discountArr = array.filter((ele) => ele.discount === 12);
            } else  if(value === "15") {
                discountArr = array.filter((ele) => ele.discount === 15);
            } else  if(value === "18") {
                discountArr = array.filter((ele) => ele.discount === 18);
            } 
      setDiscount(discountArr);
      console.log(discountArr);
    }

    useEffect (() => {
        setData(state?.length > 0 ?rating?.length > 0 ? rating :state : array ); 
       }
    ,[state,rating])

    useEffect (() => {
        setData(state?.length > 0 ?discount?.length > 0 ? discount :state : array ); 
       }
    ,[state,discount])

    const handleCart = (data) => {
        if (localStorage.getItem("punctureCart") === null) {
            localStorage.setItem("punctureCart", JSON.stringify([]));
          }
      
          let basket = JSON.parse(localStorage.getItem("punctureCart"));
          basket.push(data);
          localStorage.setItem("punctureCart", JSON.stringify(basket));
      
    }

  return (
      <div>
      <Navbar />
      <div className='filter'>
        <div>
            <Select placeholder="Filter By Radius" onChange={handleSubmit}>
                <Option value="500m">Around 500m</Option>
                <Option value="1000m">Around 1000m</Option>
                <Option value="1500m">Around 1500m</Option>
            </Select>
        </div>
        <div>
            <Select placeholder="Filter By Rating" onChange={handleRating}>
                <Option value="5">rating 5</Option>
                <Option value="8">rating 8</Option>
                <Option value="9">rating 9</Option>
            </Select>
        </div>
        <div>
            <Select placeholder="Filter By Discount" onChange={handleDiscount}>
                <Option value="10">10%</Option>
                <Option value="12">12%</Option>
                <Option value="15">15%</Option>
                <Option value="18">18%</Option>
            </Select>
        </div>
      </div>

    <div className='container'>
    {
    
        data.map((ele) => {
            return (
                <div className='box'>
                        <img src={ele.image} alt={ele.shopName}/>
                        <p >{ele.shopName}</p>
                        <p>Location : {ele.location} </p>
                        <p>Ratings : {ele.ratings} <AiFillStar /> </p>
                        <Button onClick={() => handleCart(ele)}>Add To Cart</Button>
                </div>
            )
        })
    }
    </div>
      </div>
  )
}

