import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import { transforms } from '../../constants';

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
    <section id='transforms' className='mt-20 md:mt-10 lg:mt-0 '>
        <h2 className='text-[48px] mb-10 text-center font-semibold text-white'>Oto Ci, którzy mi zaufali!</h2>
        <div className='flex justify-evenly'>
          {transforms.map((transform, index) => (
            <div className=''>
              <h4 className='ml-5 mb-[-10px] text-[29px] text-white font-semibold'>{transform.name}, {transform.age}</h4>
              {/* 
              <h5 className={`text-end mr-8 mb-[-5px] text-[22px] text-white`}>{flipped[index] ? "AFTER" : "BEFORE"}</h5> 
              A piece of code if we'd like to have before and after sign.
              */}
              <div className='w-[250px] h-[2px] ml-5 mb-2 bg-primary'/>
              <ReactCardFlip isFlipped={flipped[index]} flipDirection="horizontal">
                  <img src={transform.img1} className='w-[300px] h-[400px] div-behind cursor-pointer' onClick={() => handleClick(index)}/>
                  <img src={transform.img2} className='w-[300px] h-[400px] div-behind cursor-pointer' onClick={() => handleClick(index)}/>
              </ReactCardFlip>
              <div className='w-[250px] h-[2px] ml-5 mt-2 bg-primary'/>
            </div>
          ))}
          
        </div>
    </section>
  )
}

export default Transforms