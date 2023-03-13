import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/f3d164a464c1e69b70a7368dd43f935001de7d63-2997x4496.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/bec5074dd327b3e5961e14667d913ae5052f1b4a-3288x4932.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/0b1a2f820d226059e90ae5b1e32807bdc9497ef6-3371x5057.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/34fae8c90d3083481bb57863f082f092bde76998-3277x4916.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/91d383d8a7d5c881306db3cb53d273142c5a1986-3278x4917.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/3a6c13022b17c90d28c998bcce758a755167cec3-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/cf7b85315029a1b7c7b680cd80450dd6d719d185-3840x5760.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/35d405eb6daf8edc0d1be41d0bc99222857fcfc7-3599x5398.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/75b8f5a0ee0cf1aae9760642d0d3cea09d52b569-3840x5760.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/539fb12f0f5288b470e3092c190942b27d3d397c-3795x5692.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/ab840a831250e62af27f61029575f6ca2b6df86f-3398x5097.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/98b696a60584e2a1ce5cb6eabb5cee15bd79414d-3643x5464.jpg';
const img13= 'https://cdn.sanity.io/images/cpwmjnrl/production/0a63da22805def6efb113bb2827491d6343f127b-3149x4724.jpg';
const img14= 'https://cdn.sanity.io/images/cpwmjnrl/production/d554430e5c3252bc1b6efa76b5e2056d28c360d1-3195x4793.jpg';
const img15= 'https://cdn.sanity.io/images/cpwmjnrl/production/67344cc56b9460d6e43b8a20a8dd9db30ca91943-3290x4935.jpg';
const img16= 'https://cdn.sanity.io/images/cpwmjnrl/production/e552fa7f4f854c1c1b1eb26d89486ee8cc6d7b43-3649x5473.jpg';
const img17= 'https://cdn.sanity.io/images/cpwmjnrl/production/dc7ac728ef2b9d50d67bada287e2f4bb8c919275-3244x4866.jpg';
const img18= 'https://cdn.sanity.io/images/cpwmjnrl/production/679411a4af852473c6632b8ce120e7bf77541daa-3512x5268.jpg';
const img19= 'https://cdn.sanity.io/images/cpwmjnrl/production/fcb1349a5b860adf12411b8fed43dcd5afce8f7f-3616x5424.jpg';
       

const Component11 = () => {
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
        {
            id: 18,
            Image: img18,
        },
        {
            id: 19,
            Image: img19,
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

export default Component11;
