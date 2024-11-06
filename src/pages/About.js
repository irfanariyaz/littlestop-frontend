import React from 'react'
import{ IoGiftOutline }   from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";

function About() {
    const items = [
       { id: 1,
        icon: <IoGiftOutline size={28}/>,
        title: "About Us",
        description: "we offer many different types of products with fewer variations in each category."
       },
       { id: 2,
        icon: <LiaShippingFastSolid size={28}/>,
        title: "Fast & Free Shipping",
        description: "4-day or less delivery time, free shipping and an expedited delivery option."
       },
       { id: 3,
        icon: <FiPhoneCall size={28} />,
        title: "24/7 Support",
        description: "answers to any business related inquiry 24/7 and in real-time."
       }
    ]
  return (
    <div className=" mt-10 ">
        <div className='flex flex-col items-center '>
            <h1 className=' text-2xl font-bold'>About Us</h1>
            <p className='text-sm'>Order now and appreciate the beauty of nature</p>
        </div>
        <div className="bg-white flex overflow-x-scroll no-scrollbar overflow-y-hidden space-x-5 p-4 w-full md:w-[70%] md:m-auto">
  {items.map((item) => (
    <div 
      key={item.id} 
      className="w-[300px] md:w-[330px] bg-white min-w-[300px] md:min-w-[330px] max-h-[400px] rounded-lg 
                 flex-shrink-0 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 pb-2"
    >
      <div className="p-2 rounded-lg bg-primary">{item.icon}</div>
      <div className="text-xl font-bold mb-2 ">{item.title}</div>
      <div className="p-3 text-center">{item.description}</div>
    </div>
  ))}
</div>

        
    </div>
  )
}

export default About