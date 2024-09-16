import React from 'react'
import { features } from '../Data/features'
import TagLine from '../Components/TagLine'
import Sidebar from '../Components/Sidebar'

const Dashboard = () => {
  return (
    
    <div className='w-full  px-3'>
      <Sidebar />
            <div className="flex items-start md:ml-16 lg:ml-64 p-2  flex-col">
       
        {/* Dashboard Navbar */}
        <nav className='flex items-center space-x-4 bg-white border border-indigo/400/30 rounded-lg shadow-lg p-6 w-full h-full max-w-screen-xl
        '>

        </nav>
        {/* Dashboard Navbar */}

        
        <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
           
            {
            features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white border border-indigo/400/30 rounded-lg shadow-lg p-6 h-full">
                        <div>
                            <h3 className="font-bold text-xl">{feature.title}</h3>
                            <p className="text-gray-500">{feature.description}</p>
                        </div>
                    </div>    
            ))}

        


            </div>
            <div className='flex items-center space-x-4 mt-4 bg-white border border-indigo/400/30 rounded-lg shadow-lg p-6 w-full h-full max-w-screen-xl
        '>
            iam the bottom.
        </div>
    </div>
    </div>
  )
}

export default Dashboard