import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import { transforms } from '../../constants';
import { arrow } from '../../assets';

const Transforms = () => {

  const initial = [];
  for(let i = 0; i<transforms.length; i++) initial[i] = false;

  const [flipped, setFlipped] = useState(initial);

  function handleClick (index) {
    const nextTable = flipped.map((c, i) => {
      if (i === index) {
        return !c;
      } else {
        return c;
      }
    });
    setFlipped(nextTable);
  }

  return (
    <section id='transforms' className='md:mt-10 mt-5 lg:mt-0 '>
        <h2 className='lg:text-[48px] ss:text-[40px] text-[36px] lg:mb-10 mb-5 text-center font-semibold text-white'>Oto Ci, którzy mi zaufali!</h2>
        <div className='flex justify-evenly sm:flex-row flex-col items-center relative'>
          <img src={arrow} className='w-[100px] h-[100px] absolute lg:left-[270px] md:left-[120px] lg:top-[-13vh] md:top-[-10vh] top-[-85px] left-1'/>
          {transforms.map((transform, index) => (
            <div key={"transform"+index}>
              <h4 className='ml-5 mb-[-10px] text-[29px] text-white font-semibold'>{transform.name}, {transform.age}</h4>
              {/* 
              <h5 className={`text-end mr-8 mb-[-5px] text-[22px] text-white`}>{flipped[index] ? "AFTER" : "BEFORE"}</h5> 
              A piece of code if we'd like to have before and after sign.
              */}
              <div className='w-[250px] h-[2px] ml-5 mb-2 bg-primary'/>
              <ReactCardFlip isFlipped={flipped[index]} flipDirection="horizontal">
                  <img src={transform.img1} className='w-[300px] h-[400px] div-behind cursor-pointer prevent-select' onClick={() => handleClick(index)}/>
                  <img src={transform.img2} className='w-[300px] h-[400px] div-behind cursor-pointer prevent-select' onClick={() => handleClick(index)}/>
              </ReactCardFlip>
              <div className='w-[250px] h-[2px] md:mb-0 mb-10 ml-5 mt-2 bg-primary'/>
            </div>
          ))}
          
        </div>
    </section>
  )
}

export default Transforms