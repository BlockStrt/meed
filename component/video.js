import React from 'react'


const  VideoBackground = () => {

    return (
        <video
          loop={true}
          autoplay
          src={'./KME.mp4'}
          muted
          type="video/mp4"
          style={{
            overflow:'hidden',
            position: 'fixed',
            height: '100%',
            width:'100%',
            objectFit: 'cover',
        }}
           
            />
                
      )
    }

    export default VideoBackground