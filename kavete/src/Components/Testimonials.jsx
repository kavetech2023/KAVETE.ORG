import React from 'react';
import TagLine from './TagLine';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image: '/testimonials/1.png',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // ... other testimonials
  ];

  return (
   <section className='flex items-center justify-center p-2 mt-6 flex-col'>
    <TagLine>Testimonials</TagLine>
    <h2 className='text-3xl font-bold text-center mt-3 mb-8'>What our clients say</h2>
    <div className='grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left'>
        {/*---------- Testimonials----------*/}
        <div className='grid gap-4'>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
                    <div className='flex space-x-3 mb-4'>
                        <img src="" className='rounded-full h-12 w-12' alt="" />
                        <p>User</p>
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                            Scaling our capabilities as our business grows has been a breeze with Kavete.
                        </span>
                    </p>
            </div>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
            <div className='flex space-x-3 mb-4'>
                        <img src="" className='rounded-full h-12 w-12' alt="" />
                        <p>User</p>
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                            Scaling our capabilities as our business grows has been a breeze with Kavete.
                        </span>
                    </p>
            </div>
           
        </div>




        <div className='grid gap-4'>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
                    <div className='flex space-x-3 mb-4'>
                        <img src="" className='rounded-full h-12 w-12' alt="" />
                        <p>User</p>
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                            Scaling our capabilities as our business grows has been a breeze with Kavete.
                        </span>
                    </p>
            </div>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
            <div className='flex space-x-3 mb-4'>
                        <img src="" className='rounded-full h-12 w-12' alt="" />
                        <p>User</p>
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                            Scaling our capabilities as our business grows has been a breeze with Kavete.
                        </span>
                    </p>    

            </div>
        </div>



        <div className='grid gap-4'>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
                    <div className='flex space-x-3 mb-4'>
                        <img src="" className='rounded-full h-12 w-12' alt="" />
                        <p>User</p>
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                            Scaling our capabilities as our business grows has been a breeze with Kavete.
                        </span>
                    </p>
            </div>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
            <div className='flex space-x-3 mb-4'>
                        <img src="" className='rounded-full h-12 w-12' alt="" />
                        <p>User</p>
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                            Scaling our capabilities as our business grows has been a breeze with Kavete.
                        </span>
                    </p>
            </div>
 
        </div>

   </div>
   </section>
  );
};

export default Testimonials;