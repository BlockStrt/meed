import React, {useEffect, useRef} from 'react'


const  VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('onLoad', () => {
        videoRef.current.play();
      });
    }
  }, [videoRef]);

    return (
        <video
          ref={videoRef}
          loop
          autoPlay
          src={'https://cdn.sanity.io/files/cpwmjnrl/production/ecf5a88e2b60ad27d26992a2f7413a54a22fe0a5.mp4'}
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