import React, { useState } from 'react';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const sd = 'https://cdn.sanity.io/images/cpwmjnrl/production/4bef8db8bcc0e504998833c604ccc8a4417e1a79-3024x4032.jpg'

const slides = [
  {
    image:
      'https://cdn.sanity.io/images/cpwmjnrl/production/03413995552f59fbc3e8d98517442fe2db87eed7-3024x4032.jpg',
    title: 'Product 1',
    price: '$125',
    description: 'First Product description here'
  },
  {
    image:
      'https://cdn.sanity.io/images/cpwmjnrl/production/4bef8db8bcc0e504998833c604ccc8a4417e1a79-3024x4032.jpg',
    title: 'Product 2',
    price: '$225',
    description: 'Second Product description here'
  },
  {
    image:
      'https://cdn.sanity.io/images/cpwmjnrl/production/ba6692d89a30ed33f0b84b9e9598e97de6082645-3024x4032.jpg',
    title: 'Product 3',
    price: '$325',
    description: 'Third Product description here'
  }
];

 const CardTwo = () => {

  return (
    
    <div className="card  w-[200px] h-[300px] m-2 rounded-lg shadow-lg scroll-smooth" id='card'>
     <div className='' id='top'>
        <Image src={sd} width={400} height={400}></Image>
     </div>
    <div className='flex flex-col justify-center items-center p-3' id='bottom'>
      <div className='my-1 font-semibold text-sm' id='title'>Item name</div>
      <div className=' my-1 text-xs' id='category'>category</div>
    </div>
    <div className='flex justify-between items-center my-2'>
    <div className='text-red-500' id='price'>$100</div>
    <button  className='border rounded-lg ml-4 text-sm  '>Purchase</button>
    <button className='border rounded-lg ml-4 text-sm'> Add to Cart</button>
    </div>
        </div>
        
        )}
        export default CardTwo