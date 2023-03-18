import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/9e888808d8a52c9037a26e15d65e30f7ba8519ef-3840x5760.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/6c50b85ba109b272a4a7a29847e7a8f20b5cda16-3573x5360.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/2ddae579e8f61c3b6fd6856aa74d4718527e2f06-3840x3840.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/3b02f488e4a59ca1626dbc07d01e07dd73ef82fd-3453x5180.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/4d310d2a03e2d2cb0b7f7efb524899b93cabaf71-3375x5062.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/6b9d7e8d3c792a5ecf491abd4d268097bc899fdb-3840x3840.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/f3b663300adf9dd431f2740d01c22053ab1e4706-3580x5370.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/2563ffe21bd59c386d11b3752c0389f674977e0b-3840x5760.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/c9fd2b6885505db93ebbdcae7fe248dba6676592-3840x5760.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/817e27d60d663b91e53bb432f7280ef9621a9d99-3840x5760.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/939d7dea9a82ed3ad39a6fb2304b265c74c1f75e-3840x5760.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/d225db808f1d93b8d4d3a2f485a2a1fbe1dd0e9f-3840x5760.jpg';





const Component14 = () => {
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

export default Component14;
