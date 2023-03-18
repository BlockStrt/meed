import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/645f8a52e905a59d9b60e2e8de3b0ddfb481a4bf-2974x4461.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/843f021f8e46792334ff40b432b2fde14521a5bc-3840x5760.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b18899a077227b749a2fb106c7021442ea5e31d3-3312x4968.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/7e0f9b5d9566c780e3d745a5947f0e5947b00f6f-3840x5760.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/7c105b81181bdd05088cddf50e985f4987e69ab4-3522x5283.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/cddb237592522af8c7018d22b774bbd5cbbfccb2-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/0efa4a9593ae5c58cff89803c4e3d2d86dca2856-3667x5501.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/1f3524756c35fac92156f848dbe8de79b14f101d-3840x5760.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/c8a2209e06d0c8085f3b6049fd5bb1ee505d6eb0-3840x5760.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/749f48397f4df6ff94d1eb33a5107e57ae2431de-3840x5760.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/1ae028b2ba7670ddca869d6089a5700387addc4f-3840x5760.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/84a4442c1093fb6583e26277a8f5166528b785df-3739x5609.jpg';





const Component15 = () => {
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

export default Component15;
