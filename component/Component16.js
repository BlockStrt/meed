import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b232786ef1695d13a617cfe75a2924b420dbb0cc-3252x4418.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/89fcddc16305284fb478ce0b6da701067e595e9e-3071x3539.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/35089ecc4c85f500a13878dbc73d1300e334e187-3731x4774.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/50230bfb2060ac4e60dc130e6ef0d7beb5861082-3840x5760.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/a6ca250b4930178e9c155d93a8552e0257de43ac-3840x5760.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/8f6bb2e36daf78ebc3338bc27138acc30dd71745-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/db7e072dc72041dc789b35ad190949a82f638f80-3452x5178.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/72b297886b46f907287d29b06cc6554b3977fd60-3840x5760.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/25c8a5aaa625d4e231fb9e5f3b778389d2746865-3672x5508.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/836819e1d631d608cf953b0d2cd4609615264e69-3840x5760.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/223e8164f5691bd6339558facee17d7af7afc7d1-3840x5760.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/86c425844844e19430cc507fb41e345d8b27b4f7-3840x5760.jpg';
const img13= 'https://cdn.sanity.io/images/cpwmjnrl/production/173073886c781ba98f82a0c90b04439cc7148338-3530x5295.jpg';
const img14= 'https://cdn.sanity.io/images/cpwmjnrl/production/3cc7168d0195af6718a1104964d039d0a927e7ce-3840x5760.jpg';
const img15= 'https://cdn.sanity.io/images/cpwmjnrl/production/1cd8bfaa1e3f4868e6352f205412e8ba874aaa01-3579x5369.jpg';
const img16= 'https://cdn.sanity.io/images/cpwmjnrl/production/289c1fb77868b47acb99fb064d8728aa7c48588d-3840x5760.jpg';
const img17= 'https://cdn.sanity.io/images/cpwmjnrl/production/703f6d562847b8c7cc0fc795907de69a74ccfe24-3840x5760.jpg';
const img18= 'https://cdn.sanity.io/images/cpwmjnrl/production/e59aed34cbcd5f74920cb13bb8240dab410fca89-3840x5760.jpg';
const img19= 'https://cdn.sanity.io/images/cpwmjnrl/production/08df0997a762908b25dda520db23e590e69e8bfb-3840x5760.jpg';
const img20= 'https://cdn.sanity.io/images/cpwmjnrl/production/75aa944d1d7a924aa2f1c9640b044d5708b5bbfe-3840x5760.jpg';
const img21= 'https://cdn.sanity.io/images/cpwmjnrl/production/e3bd9017295561143b271c2048d0ee1d2fc98571-3659x5488.jpg';
const img22= 'https://cdn.sanity.io/images/cpwmjnrl/production/4fa279db491b433ecf8ac3d385a025b41678c61d-3840x5760.jpg';
const img23= 'https://cdn.sanity.io/images/cpwmjnrl/production/90a0fe42fc9f0fe766f7f906d0d1f6c41598c165-3840x5760.jpg';





const Component16 = () => {
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
        {
            id: 20,
            Image: img20,
        },
        {
            id: 21,
            Image: img21,
        },
        {
            id: 22,
            Image: img22,
        },
        {
            id: 23,
            Image: img23,
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

export default Component16;
