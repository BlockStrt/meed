import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/764973d2b229465cdac0d482784b7e3749986bbe-3840x5760.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/5cf26d4912bc739a444ba602f208eb7c3edd4eee-3840x5760.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/c8b8350196bc52601436fe5c5188f2e24ca8e5a8-3656x5484.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/1fb2f4c07d74ff3518304b8d242bb61c3b5a83cb-3840x5760.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/0ea9b75fbbfe5d29944f93f8dbd4415380c681ff-3574x5361.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/57ffe6ed759d3e257a663f8c8bf7a012ca4b7d27-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/556445a192e42ea04149147bde249fffc16932bf-3840x5760.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/f8b9b452f57283eec71788e0f7eb9a266a04a6ae-3374x5061.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/feb08aeccfc5b69d693007f7a21e2c3106df30fe-3840x5760.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/e183ab274f7aeef4756c7a6ef474f0a513da1e8d-3840x5760.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/2cb936e80b6728cb2ff6a1534e4d6ef8791b60c1-3840x5760.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/4ceb4520b41b9b6fa9f1cc10e1d98304a1e7925e-3840x5760.jpg';
const img13= 'https://cdn.sanity.io/images/cpwmjnrl/production/50a4c7cb37f80cbdd646cb9a3c9f2bee7b92ab23-3840x5760.jpg';
const img14= 'https://cdn.sanity.io/images/cpwmjnrl/production/94e09f43736e679fc5bc3bfb98f20beefb586a62-3744x5616.jpg';
const img15= 'https://cdn.sanity.io/images/cpwmjnrl/production/e21432812eeb1d6e48991c2bf06e1402d2261e22-3775x5662.jpg';
const img16= 'https://cdn.sanity.io/images/cpwmjnrl/production/a1e4355b2c48d14696d5f2103cdef7e9dcee88cd-3683x5524.jpg';

const Component9 = () => {
let data = [ {
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
        {
            id: 12,
            Image: img12,
        },
        {
            id: 13,
            Image: img13,
        },
        {
            id: 14,
            Image: img14,
        },
        {
            id: 15,
            Image: img15,
        },
        {
            id: 16,
            Image: img16,
        },
        
    ]
    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState();
    const getImg = (Image) => {
        setTempImgSrc(Image);
        setModel(true)
        setCurrentIndex(data.findIndex(i => i.Image === Image));
    }
    const nextImage = () => {
        if(currentIndex === data.length -1){
            setCurrentIndex(0);
        }else{
            setCurrentIndex(currentIndex + 1);
        }
        setTempImgSrc(data[currentIndex].Image);
    }
    const prevImage = () => {
        if(currentIndex === 0){
            setCurrentIndex(data.length -1);
        }else{
            setCurrentIndex(currentIndex - 1);
        }
        setTempImgSrc(data[currentIndex].Image);
    }



    return (
        <>
        <div className='model' style={{display: model ? 'flex' : 'none',
        width:'100vw', height:'100vh', zIndex:'999', position:'fixed', top:'50%', transform:'translate(-50%, -50%)',
        left: '50%',  justifyContent:'center', alignItems:'center',
        backgroundColor:'#000000', marginX:'auto', transition: 'transform .5s ease-in-out', 
         
        }} >
            <Image
            className='w-[100px] h-[100px] object-cover justify-center items-center mx-auto'
            id='img'
            alt=''
            width={600}
            height={600}
             src={tempimgSrc}/>
                <span className='fixed flex w-full justify-center mx-auto  font-FallCome z-[1000]  '>
                    <button className='  z-[1000] p-5' onClick={prevImage}><ArrowCircleLeftIcon sx={{ color: '#FFB6C1' }}/></button>
                    <button className=' z-[1000] p-5' onClick={() => setModel(false)}><CloseIcon sx={{ color: '#FFB6C1' }}/></button>
                    <button className=' z-[1000] p-5' onClick={nextImage}><ArrowCircleRightIcon sx={{ color: '#FFB6C1' }}/></button>
                </span>
        </div>

      <div  className=' transition-all ease-in-out relative  left-0 gap-3 mb-12  text-center mx-auto justify-center
          items-center  '>
        {data.map((item, index) => {
            return(
            <div className='' key={index} onClick={() => getImg(item.Image)}>
            <Image
            className=''
             alt='alt'
             width={700}
             height={700}
             src={item.Image}/>
            </div>
            )
        })}
      </div>
      </>
    )
}

export default Component9;
