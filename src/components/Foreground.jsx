import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {desc: "This is my first card!!", filesize: "0.8mb", close: true, tagdetails: {isOpen: true, tagTitle: "Download Now", tagColor: "Green"}},
        {desc: "This is my first card!!", filesize: "0.8mb", close: true, tagdetails: {isOpen: true, tagTitle: "Upload Now", tagColor: "blue"}},
        {desc: "This is my first card!!", filesize: "0.8mb", close: true, tagdetails: {isOpen: false, tagTitle: "Download Now", tagColor: "Green"}},
    ]
    

    const dimensions = {
      left: 0,
      right: window.innerWidth - 10, // adjust this value as needed
      top: 0,
      bottom: window.innerHeight - 10, // adjust this value as needed
    };

  return (
    <div ref={ref} className='absolute top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item)=>(
            <Card data={item} reference={dimensions} />
        ))}
        </div>
  )
}

export default Foreground