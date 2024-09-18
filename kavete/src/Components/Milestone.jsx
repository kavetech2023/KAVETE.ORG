const Milestone = ({title, description, icon, lastItem}) => {
  return (
    <div id="work" className="flex w-full">
        <div className="relative flex flex-col items-center h-32">         
                <div className="z-20 bg-white shadow-lg h-auto w-full p-2 rounded-full flex-shrink-0 relative">
                {icon}
                    
                </div>
                {
                    !lastItem && 
                    <div className="z-0 absolute top-2 w-1 bg-gray-400 flex-grow h-full"></div>
                }
        </div>
        <div className="ml-10">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="font-sm text-gray-600">{description}</p>
        </div>
        
               
        {!lastItem && <div className="milestone_line"></div>}
    </div>
  )
}

export default Milestone