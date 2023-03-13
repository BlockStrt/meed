import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/049557b18b0965f3fcd1f9e87cc97a469faf455b-3212x4818.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/f8d4a7f37a9d9add378c15c9bf5e0ddbb1f56c92-3840x5760.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/6f87dd8dea47d818c815f3d8294f8ea3463fd02c-3840x5760.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/5f16e717190b914a711cb05d073777f6b156a0ad-3840x5760.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/abf836106d90e9f4c3e0a11e69656e53132e5cc2-3840x5760.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b2ed77e6ac24e702195f245759d9146c1535c86c-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b515b081b107a241192df1515c497f889d0c1d8d-3840x5760.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/59258741ab70d8ff5e1c6d8c5857b4fa4d0c5c75-3840x5760.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/008f21368b0e248b10e575cbcebb1e8c08363f72-3840x5760.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/15aa0ddbef7eeae53cf5a0eeaa7b7f5d9756e924-3840x5760.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/084fafcdc346d12c80bcd39903fee745e86be000-3840x5760.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/3481e646904c60eb14e62c0d54971da9bbf76aea-3840x5760.jpg';
const img13= 'https://cdn.sanity.io/images/cpwmjnrl/production/81157e15f72a11833c51abcf4c2f6a1525b0ff44-3840x5760.jpg';
const img14= 'https://cdn.sanity.io/images/cpwmjnrl/production/b997ba3028ed6518799fbf7dafef91786c0adfb1-3840x5760.jpg';
const img15= 'https://cdn.sanity.io/images/cpwmjnrl/production/521e33d76d021fe2d51a0c67df5aa7b5067120a0-3840x5760.jpg';
const img16= 'https://cdn.sanity.io/images/cpwmjnrl/production/127aee058372c613b2ed43c74234438dfc8cf15a-3840x5760.jpg';
const img17= 'https://cdn.sanity.io/images/cpwmjnrl/production/fe7d54b6f2291e37443c20e901ef1318b22dd1dc-3840x5760.jpg';


const Component8 = () => {
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
        {
            id: 17,
            Image: img17,
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

export default Component8;
