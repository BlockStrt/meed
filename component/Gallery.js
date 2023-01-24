import React from 'react'
import Image from 'next/image'




 const img1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/0ed84d80646737f5aca1e7a2728d360a9cd0473b-5583x17515.jpg';
 const img2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/ef3f8ae594ea64176097c01a1c0b7d72d3b8f9da-7158x7152.jpg';
 const img3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/636351a2c94afc022d721a5a7f2bdcf64b1af097-7132x7355.jpg';
 const img4 = 'https://cdn.sanity.io/images/cpwmjnrl/production/5061c7fc62e1890ecd16294e51be47b4de86bd3c-7033x7339.jpg';
 const img5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/3663e10ba1df2b66323f49b246c3c740dad3c146-7053x7110.jpg';



const Gallery = () => {
    
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
    ]

    return(
        <>
      <div>
        {data.map((item)=>{
            return(
                <div className=' w-[100%] h-[50%]'>
                    <Image 
                    className=''
                    src={item.Image} 
                    key={item.id} 
                    alt={`Image ${item.id}`} 
                    width={100}
                    height={100}
                    cover />
                </div>
            )
        })}
      </div>

        </>
    )
}

export default Gallery
