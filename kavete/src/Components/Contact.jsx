import TagLine from "./TagLine"

const Contact = () => {
    return (
        <div className="flex text-center p-10 items-center justify-center flex-col">
       <TagLine>Submit Your Documents</TagLine>
       <h2 className="font-extrabold text-3xl mb-8 pt-3">Flexible Pricing to Fit Your Growth</h2>
      
       <form action="" className='max-w-screen-xl w-full'>
          <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
              <input type="text" placeholder='Enter your name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
  
              <input type="text" placeholder='Enter your email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
          </div>
          <textarea rows="6" placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
          <button className='py-3 px-8 w-max flex items-center justify-between bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit now <span>i</span></button>
       </form>
  
      </div>
    )
  }
  
  export default Contact