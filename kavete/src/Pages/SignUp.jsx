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
        

<div onSubmit={signUp} class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com"  required/>
  </div>
  <div class="mb-5">
    <label for="password"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>

  
  <button onClick={signUp} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</div>

<button onClick={signInGoogle}>
Sign In with Google
</button>
    </div> 
  )
}

export default SignUp