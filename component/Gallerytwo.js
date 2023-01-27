import React, { useState } from 'react'
import Image from 'next/image'



 const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/9fcb631dbd09deb79a2dbf7bb9a1f2f13cbcd74b-8747x7259.jpg'
 const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/6612510e2612082828c2af5e33686340e4601dce-7114x9119.jpg';
 const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/fe60299824a298b8d81b99301f6cb5c2c80364bc-7218x9121.jpg';
 const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b1309a5079ab76f5124bf436edd0b18f90c2fe83-7176x9239.jpg';
 const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/375b3c2d3e22f8699116239d35ba965482c99740-14747x7092.jpg';
 const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/a97b97e3cc529357b3af6842ea3c59ce9041ccac-17576x7116.jpg';
 const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b8ecca5a291afb1092beff1d7e2e0fe99793ffbe-7064x7186.jpg';
 const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/9a382cab5696ac7f7564d12f509ae9ac6394c29a-23748x7992.jpg';
 const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/4f8bb1d5efc625efc266ed6b33d91ebd8c2f1493-7081x9447.jpg';
 const img10 = 'https://cdn.sanity.io/images/cpwmjnrl/production/06ea04d714a22b20e39a005dc219b7206a6c095b-22263x7064.jpg';
 const img11 = 'https://cdn.sanity.io/images/cpwmjnrl/production/99a57286a43cec69f396f55eafc1f4a613df7adf-9064x12000.jpg';
//  const img13 = '';
    

const GallTwo = () => {
    let data = [
        {
            id: 1,
            Image: img1,
        },
        {
            id: 2,
            Image: img2,
        },
        {
            id: 3,
            Image:img3 ,
        },
        {
            id: 4,
            Image: img4,
        },
        {
            id: 5,
            Image: img5,
        },
        {
            id: 6,
            Image: img6,
        },
        {
            id: 7,
            Image: img7,
        },
        {
            id: 8,
            Image: img8,
        },
        {
            id: 9,
            Image: img9,
        },
        {
            id: 10,
            Image: img10,
        },
        {
            id: 11,
            Image: img11,
        },
      
    ]
    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')
    const getImg = (Image) => {
        setTempImgSrc(Image);
        setModel(true)
    }

    return(
        <>
         <div className='model' style={{display: model ? 'flex' : 'none',
        width:'100vw', height:'100vh', zIndex:'999', position:'fixed', top:'0',
        left: '0',  justifyContent:'center', alignItems:'center',
        backgroundColor:'#000000', overflow:'hidden', transition: 'transform .5s ease-in-out',
         
        }} >
            <Image
            className='h-screen object-cover'
            id='img'
            alt=''
            width={600}
            height={600}
             src={tempimgSrc}/>
             <span className='absolute flex top-0 right-0'>
             <button
             className='text-white z-[1000]'
              onClick={() => setModel(false)}>Close</button>
              </span>
        </div>
      <div className=' transition-all ease-in-out'>
        {data.map((item, index) => {
            return(
            <div className='' key={index} onClick={() => getImg(item.Image)}>
            <Image
            className='w-full h-full cursor-pointer mb-12  '
             alt='alt'
             width={500}
             height={500}
             src={item.Image}/>
            </div>
            )
        })}
      </div>

        </>
    )
}

export default GallTwo
