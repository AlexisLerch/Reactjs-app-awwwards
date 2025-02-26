import React, { useRef } from 'react'
import Button from './Button'
import gsap from 'gsap'

const ImageClipBox = ({src, clipClass, }) => (
    <div className={clipClass}>
        <img src={src}  />
    </div>
)

const Contact = () => {

  const frameRef = useRef(null)

  const handleMouseLeave = () => {
      const element = frameRef.current
      gsap.to(element, {
          duration: 0.3,
          rotateX: 0,
          rotateY: 0,
          ease: "power1.inOut",
        });
  }

  const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const element = frameRef.current;
  
      if (!element) return;
  
      const rect = element.getBoundingClientRect();
      const xPos = clientX - rect.left;
      const yPos = clientY - rect.top;
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const rotateX = ((yPos - centerY) / centerY) * -10;
      const rotateY = ((xPos - centerX) / centerX) * 10;
  
      gsap.to(element, {
        duration: 0.3,
        rotateX,
        rotateY,
        transformPerspective: 500,
        ease: "power1.inOut",
      });
    };

  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
      <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>          
          <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
            <ImageClipBox 
              clipClass="contact-clip-path-1"
              src="img/contact-1.webp" 
            />
            <ImageClipBox
              clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
              src="img/contact-2.webp" 
            />
          </div>

          <div className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'
            ref={frameRef} 
            onMouseLeave={handleMouseLeave} 
            onMouseUp={handleMouseLeave}
            onMouseEnter={handleMouseLeave}
            onMouseMove={handleMouseMove}          
          >
            <ImageClipBox
              src="img/swordman-partial.webp"
              clipClass="absolute md:scale-125"
            />
            <ImageClipBox
              src="img/swordman.webp"
              clipClass="sword-man-clip-path md:scale-125"
            />
          </div>
        <div className='flex flex-col items-center text-center'>
          {/* <p className='font-general text-[10px] uppercase'>Join Zentry</p> */}
          <p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]'>Let's b<b>u</b>ild the <br /> new era <br /> of g<b>a</b>ming t<b>o</b>gether</p>

          <Button title="contact us" containerClass="mt-10 cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default Contact