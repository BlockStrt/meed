import React, { useState } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';


const Gall = () => {
  
    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('option1');
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
    let componentToRender;
    switch (selectedOption) {
        case 'option1':
          componentToRender = <Component1 />;
          break;
        case 'option2':
          componentToRender = <Component2 />;
          break;
        case 'option3':
          componentToRender = <Component3 />;
          break;
        case 'option4':
          componentToRender = <Component4 />;
          break;
        case 'option5':
          componentToRender = <Component5 />;
          break;
        case 'option6':
          componentToRender = <Component6 />;
          break;
        default:
          componentToRender = null;
          break;
      }
    
    return(
        <>
         <div className='w-full text-center'
                 style={{ cursor: 'pointer', zIndex: '1000', }}>
                  {/* dropdown */}
                  <select
                  className=' bg-transparent text-center'
                  value={selectedOption}
                  onChange={(event) => setSelectedOption(event.target.value)}>
                  <option value='option1' className=''>Medium Editorial</option>
                  <option value='option2'>Hiedy Ganga Winter</option>
                  <option value='option3'>Hiedy Shoot</option>
                  <option value='option4'>Herb 2 the Moon</option>
                  <option value='option5'>Janaya Shoot</option>
                  <option value='option6'>Essexx Shoot</option>
                  <option value='option7'>2 the Future</option>
                </select>
                 {/*Create components to store each different photoshoot & 
                 Conditonally render each one along the drop down of selections  */}
                  <div className='border w-[50%]  mx-auto mb-5 border-slate-900'></div>
                  {componentToRender}
        </div>


        </>
    )
}

export default Gall
