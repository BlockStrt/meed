import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/cc591a4ff871b30934a148385126322fbda63e3a-3840x5760.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/043be49e454985023814d06b09e1383747273231-3840x5760.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/e892fd023bf4659ca5cf74868203f6d8cc7351e4-3840x5760.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/c3e915bde0b70dcfa8e843b0adb512fd52bc6ca6-3840x5760.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/cc591a4ff871b30934a148385126322fbda63e3a-3840x5760.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/174b974ad670b9609e8a62d772ae48efd0b4e9ad-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/773e91216834587af8d2ec6b5a62bc2251b87c33-3840x5760.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/515685040f5beb3b946994e9eadfd003b260e655-3840x5760.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/3ca0329d80815bdd91a59313f434a021c5ceb9ea-3840x5760.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/b4721780c7702477b5bed1a549d96162302bddcb-3840x5760.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/b51e7a84a83e45e008b137c584780fa7b74a4d93-3840x5760.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/391889b52ec2340cfb16810fadbab7aa5c1b0b24-3840x5760.jpg';
const img13= 'https://cdn.sanity.io/images/cpwmjnrl/production/e0decbdb5d5ee359562fcc5f2427bd549de01542-3840x5760.jpg';
const img14= 'https://cdn.sanity.io/images/cpwmjnrl/production/3ac904c2745444700c4ace7bcec7ec5dffcf190d-3704x5556.jpg';
const img15= 'https://cdn.sanity.io/images/cpwmjnrl/production/71772a64f8bc8f8bbe1163d99000f10e44ef3be5-3577x5366.jpg';





const Component13 = () => {
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

export default Component13;
