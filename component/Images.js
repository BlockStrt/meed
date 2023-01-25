
import Image from "next/image";

const images = [
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/0ed84d80646737f5aca1e7a2728d360a9cd0473b-5583x17515.jpg', alt: 'Image 1' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/ef3f8ae594ea64176097c01a1c0b7d72d3b8f9da-7158x7152.jpg', alt: 'Image 2' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/636351a2c94afc022d721a5a7f2bdcf64b1af097-7132x7355.jpg', alt: 'Image 3' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/5061c7fc62e1890ecd16294e51be47b4de86bd3c-7033x7339.jpg', alt: 'Image 4' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/9b02f7a05b8ece7d8b48c36cf6ebf5d8d9b635d4-7095x7089.jpg', alt: 'Image 5' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/2e540147e14c3583157985c686088b4f73f63e52-7116x9466.jpg', alt: 'Image 6' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/910352fc657f4f501435fdbfd4521d9697826b15-7074x7047.jpg', alt: 'Image 7' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/47b074b4d29d1443710ee3f987f22adbf7ef1d04-7095x7089.jpg', alt: 'Image 8' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/3663e10ba1df2b66323f49b246c3c740dad3c146-7053x7110.jpg', alt: 'Image 9' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/2c81b9690017a65777d2fce6f4b76626dd635d55-7074x7131.jpg', alt: 'Image 10' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/3499f89baf8bf1cdf7b1088e27a2d52b51de47c0-7033x7152.jpg', alt: 'Image 11'},
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/ba8a332cf6ac4f59854b786d1573c9afb2162999-5583x17515.jpg', alt: 'Image 12' },
  { src: 'https://cdn.sanity.io/images/cpwmjnrl/production/26301f10429e9cbaf01a0f3f5799d1589c6f9867-7132x7355.jpg', alt: 'Image 13' },
  
]
const imageElements = []

for (let i = 0; i < images.length; i++) {
  const img = new Image();
  img.src = images[i].src;
  img.alt = images[i].alt;
  imageElements.push(img);
}

export default imageElements

// const Slideshow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const handlePrevious = () => {
//     setCurrentIndex(currentIndex - 1)
//   }

//   const handleNext = () => {
//     setCurrentIndex(currentIndex + 1)
//   }

//   return (
//     <div className="relative">
//       <div className=" rounded-lg overflow-hidden grid justify-center">
//         <Image
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt}
//           width={100}
//           height={100}
//           className="w-[100px] h-[100px] object-cover"
//         />
//         <div className="h-full w-full relative bottom-0 left-0 right-0">
//           <button
//             className="bg-red-500 rounded-full p-2 text-black hover:bg-gray-200"
//             onClick={handlePrevious}
//           >
//           button
//           </button>
//           <button
//             className="bg-red-500 rounded-full p-2 text-black hover:bg-gray-200"
//             onClick={handleNext}
//           >
//            button
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Slideshow