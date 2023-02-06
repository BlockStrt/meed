
import Gall from '@/component/Gallery'
import Design from '@/component/Design'


export default function Gallery(){


    return(
        <main
         className='  text-white-900 absolute top-0 left-0 w-full  bg-red-400 lg-px48 px-16
          scrollbar scrollbar-track-yellow-300 scrollbar-thumb-yellow  '>
          
          <div className='relative md:columns-3 left-0 gap-3 mb-12  text-center mx-auto justify-center
          items-center text-4xl  '>
          
            <h1 className=' font-mono p-5'>Photography</h1>
            <div className='border w-[50%]  mx-auto mb-5 border-slate-900'></div>

            
            
          
            <Gall className=''/>
          </div>
          <div className='md:columns-3 text-4xl text-center'>
          <h1 className=' font-mono p-5' >Design</h1>
          <div className='border w-[50%]  mx-auto mb-5 border-slate-900'></div>

            <Design />
          </div>
        
        </main>
    )
}