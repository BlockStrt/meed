import React, { useState } from 'react'
import Image from 'next/image'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/4a8f37599a4a9948d4aa7b8cf44c7885d55a9e64-3840x5760.jpg';
const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/943ab3cce0144e4b0caa468c5eb19ffbb4707e06-3840x5760.jpg';
const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/0071159c3177b0f1bdfc4ae15bb26d646b2416dd-3840x5760.jpg';
const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/8975fae345bc2c1716dd90ee3045a99a9c76f9af-3840x5760.jpg';
const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/cadea6364a48c3dad1ab349bc5f82b034194a129-3085x4628.jpg';
const img6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/f8d741d61aa0d4b1f2859aaa3faba2b1d15c48e1-3840x5760.jpg';
const img7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/9fd4aeed34db5654007fc5b33c9521d33857f87d-3840x5760.jpg';
const img8 = 'https://cdn.sanity.io/images/cpwmjnrl/production/5b94388dc8999a68b7d03fc5152c39127e488814-3840x5760.jpg';
const img9 = 'https://cdn.sanity.io/images/cpwmjnrl/production/d916b52f83051d415362030b4ebab0cdd038fc94-3840x5760.jpg';
const img10= 'https://cdn.sanity.io/images/cpwmjnrl/production/2be1e6878c3f1effcf2603807d8c8938362cffdf-3840x5760.jpg';
const img11= 'https://cdn.sanity.io/images/cpwmjnrl/production/130813e6770b0e0eecb562bde7f06c78581f79cb-3840x5760.jpg';
const img12= 'https://cdn.sanity.io/images/cpwmjnrl/production/8f04658e6758d62f8a6cbb59be49e8e3ed26ec57-3840x5760.jpg';
const img13= 'https://cdn.sanity.io/images/cpwmjnrl/production/7fc999f13fe2bcee020fa9303ccb7625334ddf2f-3840x5760.jpg';
const img14= 'https://cdn.sanity.io/images/cpwmjnrl/production/caae83727f54a8074b857d9e32ad589fd1de5e0f-3840x5760.jpg';
const img15= 'https://cdn.sanity.io/images/cpwmjnrl/production/7d94c3145618fe5d4e5b5789d27c97724edfee51-3840x5760.jpg';
const img16= 'https://cdn.sanity.io/images/cpwmjnrl/production/92f5f5d880b355479bc4d0c3523c281e03a829da-3713x5570.jpg';
const img17= 'https://cdn.sanity.io/images/cpwmjnrl/production/5ed5726347082ee2313d8b650d6e7b48c1f1f99a-5760x3840.jpg';
const img18= 'https://cdn.sanity.io/images/cpwmjnrl/production/9870ea41770ea774bb6fff252d2465aca20506c9-3840x5760.jpg';
       

const Component6 = () => {
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

export default Component6;
