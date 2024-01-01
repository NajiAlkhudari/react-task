import React from 'react'
import SwiperComponent from './SwiperComponent'
import Card from './/ui/Card'
import noon1 from '../assets/images/noon1.png'
import amazon1 from '../assets/images/amazon1.jpg'
import whatsapp from '../assets/images/whatsapp.png'
import micorless1 from '../assets/images/micorless1.jpg'
import ImageButton from "./ui/ImageButton";
import Button from "./ui/Button"

const ProductCard = () => {

  return (
        <Card className=''>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  '>
            <div>
            <SwiperComponent />
            </div>
            <div>
                <div className='lg:flex flex-row justify-between'>
                     <h3 className='text-green-600'>10% Newyear Offer </h3>
                <h3 className='text-blue-800 font-bold pr-0'>LUMINOUS </h3>
                </div>
                
<h1 className='text-2xl font-bold text-slate-800 mt-4'>Luminous GPTTEX 240 AH</h1> 

<h1 className='text-2xl font-bold text-slate-800  lg:mt-8'>36.31 AED</h1> 

  <div className="mt-8 space-x-4 lg:mt-14">  
           <ImageButton
        imageSrc={noon1}
        altText="Button Image"
        className="w-10 h-10"
      />
            <ImageButton
        imageSrc={amazon1}
        altText="Button Image"
        className="w-10 h-10"
      />
            <ImageButton
        imageSrc={whatsapp}
        altText="Button Image"
        className="w-10 h-10"
      />
          <ImageButton
        imageSrc={micorless1}
        altText="Button Image"
        className="w-10 h-10"
      />
      
      </div>
      <Button className='  text-white font-bold px-32 py-4 rounded-lg m-4 lg:mt-20 '>
        Buy now
        </Button>
                </div>
      


            </div>
            
      
        </Card>
      
  )
}

export default ProductCard
