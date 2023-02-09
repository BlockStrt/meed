import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import styles from '../styles/Home.module.css'




 const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/2d1d59c5bdff35229f10c2126b0c183913aa35f1-960x1280.jpg';
 const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/89b55d0aff6b89ae7b245a3829d8930fe3c8237b-1195x1792.jpg';
 const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/11ac53832d55722259c9d479fcddc63024d330ce-1195x1792.jpg';
 const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/79e890dc24a3037891c170396f39176866ac1fe5-1195x1792.jpg';
 const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/41dbe335a70538cf13cc4d42593d9a974c9ffb61-1195x1792.jpg';
 const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/adad4ff78bb5bc5df1379c1381fcb36be1ffe07e-1433x1792.jpg'
 const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/197a68323e560208bb1c0075b16f606a18fc79f2-1433x1792.jpg'
 const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/38860c03814881aa690f2d1d9aa5301c785405ac-1195x1792.jpg'
 const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/4e7fed1bcf7827fac9a8f2cf39055c35f77a9119-1195x1792.jpg'
 const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/5f9c90be9255415672794eb4226fedb18a5966b7-1434x1792.jpg'
 const img11 = 'https://cdn.sanity.io/images/cpwmjnrl/production/f9480a60ae41af262db178cc1ddbb9f8c7dae3f2-1195x1792.jpg'
 const img12 = 'https://cdn.sanity.io/images/cpwmjnrl/production/e60797f675bb9e278c220f1e53fa57bc863991c4-1434x1792.jpg'
 const img13 = 'https://cdn.sanity.io/images/cpwmjnrl/production/0c890634a9a52f30639e2cd95b6558b3947255a0-1434x1792.jpg'
 const img14 = 'https://cdn.sanity.io/images/cpwmjnrl/production/482b18535585caf2bde8599b9e791265378e03d2-1195x1792.jpg'
 const img15 = 'https://cdn.sanity.io/images/cpwmjnrl/production/15065e093f3ad2466771424943617b5e323c7a97-4160x6240.jpg'
 const img16 = 'https://cdn.sanity.io/images/cpwmjnrl/production/736c20b697b791d8b15ebd40061cd66c67dcec82-4160x6240.jpg'
 const img17 = 'https://cdn.sanity.io/images/cpwmjnrl/production/1c1f84d17565716eb574b6ee2d83f5a25979847a-3869x5803.jpg'


const Paint = () => {
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
        {
            id: 16,
            Image:img16 ,
        },
        {
            id: 17,
            Image: img17,
        },
        
    ]
    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0);
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
    return(
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
            width={700}
            height={700}
             src={tempimgSrc}/>
                <span className='fixed flex w-full justify-center mx-auto  font-FallCome z-[1000] '>
                    <button className='  z-[1000] p-5' onClick={prevImage}><ArrowCircleLeftIcon sx={{ color: '#eac8a2' }}/></button>
                    <button className=' z-[1000] p-5' onClick={() => setModel(false)}><CloseIcon sx={{ color: '#eac8a2' }}/></button>
                    <button className=' z-[1000] p-5' onClick={nextImage}><ArrowCircleRightIcon sx={{ color: '#eac8a2' }}/></button>
                </span>
        </div>

      <div  className=' transition-all ease-in-out relative md:columns-3 left-0 gap-3 mb-12  text-center mx-auto justify-center
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

export default Paint
