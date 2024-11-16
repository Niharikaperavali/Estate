import React from 'react'
import assets from '../assets/assets'

const about = () => {
  return (
    <div className='flex flex-col items-center justify-center 
    continer mx-auto p-14 md:px-20 lg:x-32 w-full overflow-hidden'
    id='About'>
      <h1 className='text-2xl sn:text-4xl font-bold mb-2'>About <span
       className='underline uderline-offset-4 decoration-1 under font-light'>Our
        Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About
         properties,Deicated to your Vision</p>
        <div className='flex-flex-col md:flex-row item-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sn:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
        <div className='grid  grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
        <div>
           <p className='text-4xl font-medium text-gay-800'>10+</p>
           <p>years of excellence</p>
        </div>
        <div>
           <p className='text-4xl font-medium text-gay-800'>12+</p>
           <p>projects completed</p>
        </div>
        <div>
           <p className='text-4xl font-medium text-gay-800'>20+</p>
           <p>Mn,sq,ft.Delivered</p>
        </div>
        <div>
           <p className='text-4xl font-medium text-gay-800'>25+</p>
           <p>Ongoing projects</p>
        </div>
        </div>
        <p className='my-10 max-w-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Ea incidunt in sapiente repudiandae magnam rem eius sit exercitationem facilis nihil totam iure molestias repellat,
           earum nostrum porro saepe dignissimos obcaecati?</p>
           <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
        </div>
    </div>
  )
}

export default about
