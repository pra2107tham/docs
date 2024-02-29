import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference}  className='w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-7 py-10 relative flex-shrink-0 overflow-hidden'>
        {/* icon  */}   
        <FaRegFileAlt/>

        {/* text  */}
        <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc}</p>

        {/* footer  */}
        <div className='footer absolute bottom-0  w-full  left-0  '>
            <div className='flex justify-between items-center px-8 py-0.5 mb-5'>
                {/* data  */}
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {/* download tag */}
                {data.close ? <IoClose/> : <FaDownload size="0.7em" color='#fff'/>  }
                
                </span>
            </div>
            {data.tagdetails.isOpen ? (<div className={`tag w-full py-3 ${data.tagdetails.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}> 
                <h3 className='text-sm font-semibold'>{data.tagdetails.tagTitle}</h3>
            </div>) : null}
            
        </div>
    </motion.div>
  )
}

export default Card