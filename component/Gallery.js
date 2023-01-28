import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




 const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/0ed84d80646737f5aca1e7a2728d360a9cd0473b-5583x17515.jpg';
 const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/ef3f8ae594ea64176097c01a1c0b7d72d3b8f9da-7158x7152.jpg';
 const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/636351a2c94afc022d721a5a7f2bdcf64b1af097-7132x7355.jpg';
 const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/5061c7fc62e1890ecd16294e51be47b4de86bd3c-7033x7339.jpg';
 const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/3663e10ba1df2b66323f49b246c3c740dad3c146-7053x7110.jpg';
 const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/2e540147e14c3583157985c686088b4f73f63e52-7116x9466.jpg'
 const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/910352fc657f4f501435fdbfd4521d9697826b15-7074x7047.jpg'
 const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/47b074b4d29d1443710ee3f987f22adbf7ef1d04-7095x7089.jpg'
 const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/2c81b9690017a65777d2fce6f4b76626dd635d55-7074x7131.jpg'
 const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/3499f89baf8bf1cdf7b1088e27a2d52b51de47c0-7033x7152.jpg'
 const img11 = 'https://cdn.sanity.io/images/cpwmjnrl/production/ba8a332cf6ac4f59854b786d1573c9afb2162999-5583x17515.jpg'
 const img12 = 'https://cdn.sanity.io/images/cpwmjnrl/production/26301f10429e9cbaf01a0f3f5799d1589c6f9867-7132x7355.jpg'
 const img13 = 'https://cdn.sanity.io/images/cpwmjnrl/production/9b02f7a05b8ece7d8b48c36cf6ebf5d8d9b635d4-7095x7089.jpg'
 const img14 = 'https://cdn.sanity.io/images/cpwmjnrl/production/9fcb631dbd09deb79a2dbf7bb9a1f2f13cbcd74b-8747x7259.jpg'
 const img15 = 'https://cdn.sanity.io/images/cpwmjnrl/production/6612510e2612082828c2af5e33686340e4601dce-7114x9119.jpg'
 const img16 = 'https://cdn.sanity.io/images/cpwmjnrl/production/fe60299824a298b8d81b99301f6cb5c2c80364bc-7218x9121.jpg'
 const img17 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b1309a5079ab76f5124bf436edd0b18f90c2fe83-7176x9239.jpg'
 const img18 = 'https://cdn.sanity.io/images/cpwmjnrl/production/375b3c2d3e22f8699116239d35ba965482c99740-14747x7092.jpg'
 const img19 = 'https://cdn.sanity.io/images/cpwmjnrl/production/a97b97e3cc529357b3af6842ea3c59ce9041ccac-17576x7116.jpg'
 const img20 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b8ecca5a291afb1092beff1d7e2e0fe99793ffbe-7064x7186.jpg'
 const img21 = 'https://cdn.sanity.io/images/cpwmjnrl/production/9a382cab5696ac7f7564d12f509ae9ac6394c29a-23748x7992.jpg'
 const img22 = 'https://cdn.sanity.io/images/cpwmjnrl/production/4f8bb1d5efc625efc266ed6b33d91ebd8c2f1493-7081x9447.jpg'
 const img23 = 'https://cdn.sanity.io/images/cpwmjnrl/production/06ea04d714a22b20e39a005dc219b7206a6c095b-22263x7064.jpg'
 const img24 = 'https://cdn.sanity.io/images/cpwmjnrl/production/99a57286a43cec69f396f55eafc1f4a613df7adf-9064x12000.jpg'

const Gall = () => {
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
        // {
        //     id: 14,
        //     Image: img14,
        // },
        // {
        //     id: 15,
        //     Image: img15,
        // },
        // {
        //     id: 16,
        //     Image:img16 ,
        // },
        // {
        //     id: 17,
        //     Image: img17,
        // },
        // {
        //     id: 18,
        //     Image: img18,
        // },
        // {
        //     id: 19,
        //     Image: img19,
        // },
        // {
        //     id: 20,
        //     Image: img20,
        // },
        // {
        //     id: 21,
        //     Image: img21,
        // },
        // {
        //     id: 22,
        //     Image: img22,
        // },
        // {
        //     id: 23,
        //     Image: img23,
        // },
        // {
        //     id: 24,
        //     Image: img24,
        // },
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
    // const active = true;
    // if (model === active){
       
    // }
    

    return(
        <>
        <div className='model ' style={{display: model ? 'flex' : 'none',
        width:'100vw', height:'100vh', zIndex:'999', position:'fixed', top:'0', 
        left: '0',  justifyContent:'center', alignItems:'center',
        backgroundColor:'#000000',  transition: 'transform .5s ease-in-out',
        marginX:'auto',
         
        }} >
            <Image
            className='w-[100%] h-[100%] object-contain justify-center items-center mx-auto'
            id='img'
            alt=''
            width={900}
            height={900}
             src={tempimgSrc}/>
                <span className='absolute flex top-0 right-0 '>
                    <button className='text-white z-[1000]' onClick={prevImage}>Previous</button>
                    <button className='text-white z-[1000]' onClick={() => setModel(false)}>Close</button>
                    <button className='text-white z-[1000]' onClick={nextImage}>Next</button>
                </span>
        </div>
      <div  className=' transition-all ease-in-out relative  columns-3 '>
        {data.map((item, index) => {
            return(
            <div className='' key={index} onClick={() => getImg(item.Image)}>
            <Image
            className=''
             alt='alt'
             width={900}
             height={900}
             src={item.Image}/>
            </div>
            )
        })}
      </div>

        </>
    )
}

export default Gall
