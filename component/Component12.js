import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/16adf5e1f9a5b7a9d05e8b4dda4b036ec9b1a16f-3070x4605.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/0c24d63e891374120e9846e2568a7b2f90422fae-3267x4900.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/0fe003828857276a08bf83de395b8117eb3e5ea5-3105x4657.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/5ac82e8c5e0479081142da5be7be6c45fb4a9a7f-3014x4521.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/6b889e0fd5113fc866aaf6481023ed36f5ea9118-3304x4956.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/6e1e4126502e10d645fe69d41aef2a84e64d52e9-3559x5338.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/e25d3f5db0f0a676d882d6b4171ca8261da87b54-3367x5051.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/7206a6b117f42223a7573f3a2b4f348ae451fe81-3121x4682.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/d333e38f789bfd8b531c832108e7456036c0ef68-3421x5131.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/7efe6e5ab2d3d1449469ab8f70203c1d83400318-3727x5590.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/c4b516d9befe957ca2124191a082a50a63b5f2e0-3840x5760.jpg';





const Component12 = () => {
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

export default Component12;
