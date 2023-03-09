import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/73a6cbd75c1eb5c36a5a3a7aebfdaca8016db715-3840x5760.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/1dc3a7e67ced7a208d271d10a128841cc8cea5c2-5760x3840.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/1ede03cc8de609c3dfcc88acc5b2f5240c5a438c-5760x3840.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/ff6b293820450997cbc2eddbf02d7d4526889301-3840x5760.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/e2acf51ad4cd1781167e3ad68f414f28b4122549-5760x3840.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/ac314d8e975d121f0b6152dfd71c4331c8f4cc98-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/d726cc14afa632139b8d468516258d94f68ab3aa-3840x5760.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/70009810f03fc1da1d8cdab5f92d978229db28d6-5760x3840.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/cea03964d4ba3ebfc5e85b37d930a70ed395bdbd-3840x5760.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/5b208ac7681ef8ea6a4b3f2414fdcc305e072b32-3840x5760.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/88d33a23233b98935abd5a8db3fa8959bb40fd67-3840x5760.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/8c01fb3a013a2b6c33943255207d8d0d7014cd72-3840x5760.jpg';
const img13= 'https://cdn.sanity.io/images/cpwmjnrl/production/c40da1c0f43b935506feb203552166e532b15754-3840x5760.jpg';
const img14= 'https://cdn.sanity.io/images/cpwmjnrl/production/b04f2efe73569c0b6380443b905200028ce3a9b8-3840x5760.jpg';
const img15= 'https://cdn.sanity.io/images/cpwmjnrl/production/a0fa57209925f5fe56a3593af0cafc7ffc466716-3840x5760.jpg';
const img16= 'https://cdn.sanity.io/images/cpwmjnrl/production/49ef6e40383088444f86c24f220ef44eff5f080a-3840x5760.jpg';
const img17= 'https://cdn.sanity.io/images/cpwmjnrl/production/8f30c2b15ff7f0c3632964528b38511780fce8a7-3840x5760.jpg';
const img18= 'https://cdn.sanity.io/images/cpwmjnrl/production/dcd16c0d50bece2ae8b98b52064bb037345d1ab5-3840x5760.jpg';
const img19= 'https://cdn.sanity.io/images/cpwmjnrl/production/2e564472cd3e1d16b0528411dae7a423a2ed2d1e-5760x3840.jpg';
const img20= 'https://cdn.sanity.io/images/cpwmjnrl/production/4597c04f425ff189760aab01a6ec1220c456d710-5760x3840.jpg';





const Component4 = () => {
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

export default Component4;
