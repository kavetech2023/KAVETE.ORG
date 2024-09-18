import { motion } from 'framer-motion';


const Slider = ({ images }) => {
    const imagesArr = [...images, ...images];
  const slideVariants = {
    visible: { x: 0 },
    hidden: { x: '-100%' },
  };

  return (
    <>
      <div className='h-[200px] relative overflow-hidden mx-auto max-w-screen-xl'>
        <div className='absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-[#fea902] before:to-transparent after:absolute after:right-0 after:top-0 after:bg-gradient-to-l after:h-full after:w-1/4 after:from-[#fea902] after:to-transparent '></div>
        <motion.div
          className='flex'
          animate={{
            x : ["0%", "-100%"],
            transition: {
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            },
          }}
         
        >
          {imagesArr.map((image, index) => (
            <div key={index} className='h-full flex-shrink-0'>
                <div className='flex items-center justify-center h-[200px]'>
                <img src={image.logo} alt={image.name} className='h-full max-w-full opacity-75 object-contain' />
                </div>
             
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Slider;