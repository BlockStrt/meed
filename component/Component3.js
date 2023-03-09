import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/83f82206c72abf5b03db0997914ba36262ea03cd-3840x5682.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/a1af3739d3466ba4bef6581dfd9b59d31e0ae49f-3323x4499.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/222e1f2ba394ab6f25d08b89963bd736f00a7968-3495x4891.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/257dc6f54dab75d7ae1c3f093afabd75d5efc0eb-3840x5760.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/e70ebaf476499fa5fa0e5f82e6eed4a57c678329-3840x5640.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b437ce912d7aeec632e5f7d767a3c3a75b6de8bb-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/8d9eda5d8536d459768708fe7661b3da0cd91167-3840x5760.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b1d194282731267d52708e56963b96459d08d62a-3840x5760.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/59d9c677326dc579d4b271c9cc641251814cec19-3840x5760.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/96f651b162c692280023efef998eea1bb816b794-3840x5760.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/272ecb76b090024746aeb75d4cca240e44ae662e-3663x5682.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/30a86a335a405851e676e2992e47b4d574ef40d3-3840x5760.jpg';
const img13= 'https://cdn.sanity.io/images/cpwmjnrl/production/181fd0c6742e7689882cb7c58575997f3bab4ccf-3840x5760.jpg';




const Component3 = () => {
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

export default Component3;
