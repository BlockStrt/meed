import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/a5be6a48c0ec343b0542481b1264afcd047a0fc1-2920x3928.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/ce54627bb6a255f7a8ad17ddc57dc30c411facd1-3840x5760.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/68e4dce1d3740259671461ae44950b0a05081239-3840x5760.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/b493f816312201e92d179cb988b3236ceee41b61-3840x5760.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/2c303eea74516586fdd7fa45e9023f52fac373e0-3840x5760.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/411aa3941b72ef1df02f28dddb286b25ceee3ff0-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/53343346518c767de347be132bdda710df629c4b-3840x5760.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/5ab561b6f082f46152ed8bb657dfbeb7dc3bb1ed-3820x4708.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/7338dc75fd438c42ee79276d7745f5d0194d87ee-3644x5466.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/3408fab45edf93f75d818354b2a094af3cd10021-3840x4462.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/9d896fd0be850049d46711f80a31c74954e767a7-3840x5760.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/b85fd4ed44b211ec1026e0294c5d655d184fd587-3835x5760.jpg';
const img13= 'https://cdn.sanity.io/images/cpwmjnrl/production/0641e372bc25ffe288d405d27233886c96895882-3840x5760.jpg';
const img14= 'https://cdn.sanity.io/images/cpwmjnrl/production/38ef032fbc4eb448a434390cf6c25539b5b44a1c-3840x5626.jpg';
const img15= 'https://cdn.sanity.io/images/cpwmjnrl/production/5ecc07b95c510c5175d765bf46ea26ce4afa0a8c-3840x5760.jpg';
const img16= 'https://cdn.sanity.io/images/cpwmjnrl/production/d8c01793bd388756cbf6ce150931fa511daa7b9a-3830x5111.jpg';



const Component5 = () => {
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

export default Component5;
