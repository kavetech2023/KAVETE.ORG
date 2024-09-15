import { useState } from "react";
import TagLine from "./TagLine"

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6d0873c3-250c-4d2b-a155-4b26ae7d0bda");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

    return (
        <div className="flex text-center p-10 items-center justify-center flex-col">
       <TagLine>Submit Your Documents</TagLine>
       <h2 className="font-extrabold text-3xl mb-8 pt-3">Flexible Pricing to Fit Your Growth</h2>
      
       <form onSubmit={onSubmit} action="" className='max-w-screen-xl w-full'>
          <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
              <input type="text" placeholder='Enter your name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
  
              <input type="email" placeholder='Enter your email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
          </div>
          <textarea rows="6" placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
          <button className='py-3 px-8 w-max flex items-center justify-between bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit now <span>i</span></button>
          <span>{result}</span>
       </form>
  
      </div>
    )
  }
  
  export default Contact