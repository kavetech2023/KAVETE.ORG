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
   <section id='testimonials' className='flex items-center justify-center p-2 mt-6 flex-col'>
    <TagLine>Testimonials</TagLine>
    <h2 className='text-3xl font-bold text-center mt-3 mb-8'>What our clients say</h2>
    <div className='grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left'>
        {/*---------- Testimonials----------*/}
        <div className='grid gap-4'>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
                    <div className='flex space-x-3 mb-4'>
                        <img src="https://randomuser.me/portraits/women/1.jpg" className='rounded-full h-12 w-12' alt="" />
                        <div class='flex flex-col'> 

                        <p>Anna</p>
                        <p>Recruiter</p>
                        </div>
                       
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                        "This AI tool has been a game-changer for our hiring process. It's significantly reduced our time-to-hire by identifying top-tier candidates who perfectly align with our company's needs."
                        </span>
                    </p>
            </div>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
            <div className='flex space-x-3 mb-4'>
                        <img src="https://randomuser.me/portraits/women/15.jpg" className='rounded-full h-12 w-12' alt="" />
                        <div class='flex flex-col'> 
                        <p>Jessica</p>
                        <p>Career Counselor</p>
                        </div>
                       
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                        "I'm impressed with how this AI platform provides personalized career guidance. It's helped my clients discover hidden talents and explore new opportunities they hadn't considered before."
                        </span>
                    </p>
            </div>
           
        </div>




        <div className='grid gap-4'>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
                    <div className='flex space-x-3 mb-4'>
                        <img src="https://randomuser.me/portraits/men/1.jpg" className='rounded-full h-12 w-12' alt="" />
                        <div class='flex flex-col'> 
                        <p>Mark</p> <p>Tech Entrepreneur</p>
                        </div>
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                        "The AI-powered resume optimization feature is invaluable. It's not only improving the quality of resumes but also helping candidates tailor their applications to specific job openings."
                        </span>
                    </p>
            </div>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
            <div className='flex space-x-3 mb-4'>
                        <img src="https://randomuser.me/portraits/women/4.jpg" className='rounded-full h-12 w-12' alt="" />
                        <div class='flex flex-col'> 
                        <p>Emily</p>
                        <p>Job Seeker</p>
                         </div>   
                        
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                        "I've landed multiple interviews thanks to the AI-powered job matching. The platform has saved me countless hours of searching and has connected me with relevant opportunities."
                        </span>
                    </p>    

            </div>
        </div>



        <div className='grid gap-4'>
            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
                    <div className='flex space-x-3 mb-4'>
                        <img src="https://randomuser.me/portraits/women/13.jpg" className='rounded-full h-12 w-12' alt="" />
                        <div class='flex flex-col'> 
                        <p>Phoebe </p>
                        <p>Economist</p>
                        </div>
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                            "AI-driven job matching has the potential to revolutionize the labor market. It can help bridge the gap between job seekers and employers, leading to increased efficiency and economic growth."
                        </span>
                    </p>
            </div>

            <div className='border rounded-lg bg-white backdrop-blur-lg p-6'>
                    <div className='flex space-x-3 mb-4'>
                        <img src="https://randomuser.me/portraits/men/5.jpg" className='rounded-full h-12 w-12' alt="" />
                        <div class='flex flex-col'> 
                        <p>James </p>
                        <p>Ai Entrepreneur</p>
                        </div>
                    </div>
                    <p className='text-sm space-y-4'>
                        <span>
                        "The advancements in natural language processing and machine learning have enabled AI to provide increasingly accurate and relevant job recommendations."
                        </span>
                    </p>
            </div>
  
 
        </div>

   </div>
   </section>
  );
};

export default Testimonials;