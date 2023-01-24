import { useState, useEffect } from 'react';
import Image from 'next/image';

const Slideshow = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <div>
      <Image 
      src={images[currentImage]} 
      alt="slideshow"
      width={100}
      height={100}
       />
    </div>
  );
};

export default Slideshow;
