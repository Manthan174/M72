import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Stair = (props) => {
  const currentPath = useLocation().pathname
  
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(function(){
    const tl = gsap.timeline()

    // Show the transition wrapper and enable pointer blocking
    tl.set(stairParentRef.current, {
      display: 'block',
      pointerEvents: 'all'
    })

    // Reset initial stair scale and translation positions
    tl.set('.stair', {
      transformOrigin: 'top',
      scaleY: 0,
      y: '0%'
    })

    // Stagger slide down to cover the screen
    tl.to('.stair', {
      scaleY: 1,
      duration: 0.45,
      stagger: {
        amount: 0.25,
        from: 'start'
      },
      ease: 'power3.inOut'
    })

    // Stagger slide out from the top to bottom to reveal the new page
    tl.to('.stair', {
      y: '100%',
      duration: 0.55,
      stagger: {
        amount: 0.25,
        from: 'start'
      },
      ease: 'power3.inOut'
    })

    // Hide transition wrapper and disable pointer blocking
    tl.set(stairParentRef.current, {
      display: 'none',
      pointerEvents: 'none'
    })

    // Reset stairs position for the next navigation
    tl.set('.stair', {
      scaleY: 0,
      y: '0%'
    })

    // Smoothly reveal the new page content in tandem with the curtain rising
    gsap.fromTo(pageRef.current, 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.7, ease: 'power2.out' }
    )
  }, [currentPath])

  return (
    <div>
        <div ref={stairParentRef} className='h-[100dvh] w-full fixed z-50 top-0 left-0 hidden pointer-events-none'>
          <div className='h-full w-full flex'>
            <div className='stair h-full w-1/5 bg-black scale-y-0 origin-top'></div>
            <div className='stair h-full w-1/5 bg-black scale-y-0 origin-top'></div>
            <div className='stair h-full w-1/5 bg-black scale-y-0 origin-top'></div>
            <div className='stair h-full w-1/5 bg-black scale-y-0 origin-top'></div>
            <div className='stair h-full w-1/5 bg-black scale-y-0 origin-top'></div>
          </div>
        </div>
        <div ref={pageRef}>
            {props.children}
        </div>
    </div>
  )
}

export default Stair
