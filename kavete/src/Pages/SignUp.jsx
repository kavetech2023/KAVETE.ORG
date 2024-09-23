import React, { useState } from 'react'
import {auth, provider} from './firebase.js'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'





const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    


    const signUp = async (e) => {
      try{
       const user = await createUserWithEmailAndPassword(auth, email, password);
       console.log(user)
      }catch(error){
        console.log(error.message)
      }
    };

    const signInGoogle = async () => {
        signInWithPopup(auth, provider).then((result) => {setEmail(result.user.email)}).catch((error) => {console.log(error.message)})
        localStorage.setItem('email', result.useremail)

    }



   

  return (
    <div>
        
<div className="max-w-sm mx-auto">
<div onSubmit={signUp} >
  <div class="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com"  required/>
  </div>
  <div class="mb-5">
    <label for="password"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>

  
  <button onClick={signUp} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</div>


<button onClick={signInGoogle} className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>
Sign in with Google
</button>
    </div> 
    </div>
  )
}

export default SignUp