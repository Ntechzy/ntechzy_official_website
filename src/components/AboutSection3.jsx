import React from 'react'
import AnimatedStretchedHeading from './shared/AnimatedStretchedHeading'
import DirectionAwareButton from './shared/Button'

const AboutSection3 = () => {
  return (
  
      <div className='flex justify-center items-start gap-10 mt-[160px] '>
        <div className='rounded-3xl'>
            <img src="/about_us_image_02.avif" alt="loading..." className='rounded-3xl'/>
        </div>
      <div>

      <div >

          <h1 className='text-[32px] font-[600] '>We Are Tecko</h1>
            <p className='w-[480px] text-[18px] leading-[28px] '>
            At Tecko, we believe that every brand has a story to tell, and we're here to help you tell it in the most compelling and effective way possible. Whether you're a startup looking to make a splash or an established enterprise seeking to stay ahead of the curve, we're committed to delivering tailored solutions that exceed your expectations and propel your business forward.
            </p>
    </div>
    <div className='mt-10 '>
      <DirectionAwareButton title={'Contact Us'} color={"bg-transprent"} hov_color={"bg-secondary"} border='border-[1px] border-white' />
      </div>
      </div>
   
  </div>
  )
     
}

export default AboutSection3