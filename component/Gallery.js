import React from 'react'
import Image from 'next/image'
import img1 from '../assets/photo1.jpg'


const Gallery = () => {
    
  



    let data = [
        {
            id: 1,
            Image: img1,
        },
        {
            id: 2,
            Image: '',
        },
        {
            id: 3,
            Image:'' ,
        },
        {
            id: 4,
            Image: '',
        },
        {
            id: 5,
            Image: '',
        },
    ]

    return(
        <>
      <div>
        {data.map((item, id)=>{
            return(
                <div className=' w-full h-full'>
                    <Image src={item.Image} key={item.id} alt={`Image ${item.id}`} cover />
                </div>
            )
        })}
      </div>

        </>
    )
}

export default Gallery
