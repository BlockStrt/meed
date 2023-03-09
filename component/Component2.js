import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/f47a59757731feb599f19476b5f5c099e8b5ecaf-3228x4917.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/d8d8cb10f76b2b7981214c1de4917adf56108300-3840x5760.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/105b596c0d8268ec1650f7ed6b23550e7c3b79e3-3840x5760.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/66ca3ac38e66429367f2498f0e464c7217fb8f2b-3840x5760.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/480bc7e2a7e620b52ffd62da41666fa0cb57dded-3840x5760.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/a289917b8d9eeea6f93f4a635538dfc456a2e742-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/f680886600166acc868b18be95d7c14eac0d2e24-3720x5598.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/38a969284d81469527219432b5a41488cc849022-3840x5760.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/cea5eb96bcf8f535ca36d7003521c0a6e2929999-3417x5527.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/4a28caf2aa82cae04183a0f666a97b7e87d4a643-3840x5760.jpg';



const Component2 = () => {
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

export default Component2;