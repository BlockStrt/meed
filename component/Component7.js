import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/d78a8de439a67c62367480e9e63f5eca692eb38f-1920x2880.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/31d75efccba9dd1754a94fef2ff7f23d1eb40b71-1648x2473.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/45f3533749e35a2a46004bb017c3260ffae92f25-1920x2880.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/70e9a201c13a8f4ce7ec7ee1b0ad3275dd5eb252-3423x5135.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/222f1ac495521c8aac2dd868010a6f61e54929cd-1920x2880.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/3bc5717e1cf7a1427ac49ba71674c0f549b45b04-1920x2880.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/54ca7364521a46e9d4baef1b8b991f4626796ca8-3333x4999.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/53ae4f7685191e7ceeba264ebf7e11d4d2cc3c33-3840x5760.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/819a0658c2411809aebd008ed2954aa1b315ae11-3840x5760.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/49f2b0da4504dc946ba8bbd71296abe3a3f5f1f7-3840x5760.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/601b475f5091b8d6c60f49a3b31db2c27f8ddaf7-3840x5760.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/57b997cfc18a4cc8109121f386a01f8675bae048-3840x5760.jpg';
const img13= 'https://cdn.sanity.io/images/cpwmjnrl/production/a988dcaa47adba048ced5c4002048246744cabc9-3840x5760.jpg';
const img14= 'https://cdn.sanity.io/images/cpwmjnrl/production/84b3094cb7f0517a803c0bf3a30c0c9d20383382-3439x5158.jpg';


const Component7 = () => {
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

export default Component7;
