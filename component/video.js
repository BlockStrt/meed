import React, {useEffect, useState , useRef} from 'react'


const  VideoBackground = () => {
  const [videoState, setVideoState] = useState("loading");
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canPlay', () => {
        setVideoState("ready");
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
         className='fixed top-0 left-0 w-screen h-screen object-cover'
           
            >  {videoState === "loading" ? (
              <p>Loading video...</p>
            ) : null}
            </video>
                
      )
    }

    export default VideoBackground