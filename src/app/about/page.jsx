
import AboutBanner from '@/components/AboutCmp/AboutBanner'
import AboutSection2 from '@/components/AboutCmp/AboutSection2'
import AboutSection3 from '@/components/AboutCmp/AboutSection3'
import AboutSection4 from '@/components/AboutCmp/AboutSection4'
import React from 'react'
import AboutSection5 from '@/components/AboutCmp/AboutSection5'
import Team from '@/components/Team'
import AboutSection6 from '@/components/AboutCmp/AboutSection6'
import Testimonials from '@/components/Testimonials'
import AboutSection7 from '@/components/AboutCmp/AboutSection7'
import Nikhilsir from '@/components/AboutCmp/Nikhilsir'

const Page = () => {
  return (
    <>
   <AboutBanner/>
   <AboutSection2/>
   <AboutSection3/>
   <AboutSection4/>
 <Team/>
 <Nikhilsir/>
  <AboutSection5/>
  <AboutSection6/>
  <AboutSection7/>
  <Testimonials/>
    </>
  )
}

export default Page