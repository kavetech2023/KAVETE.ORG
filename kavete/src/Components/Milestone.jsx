const Milestone = ({ title, description, icon, lastItem }) => {
  return (
    <div id="work" className="flex w-full">
      <div className="relative flex flex-row items-center h-32">
        <div className="z-20 bg-white shadow-lg h-auto w-full p-2 rounded-full flex-shrink-0 relative">
          {icon}
        </div>
        
      </div>

      <div class="flex flex-col w-full max-w-[320px] leading-1.5 ml-4 mb-7 p-4 hover:bg-slate-200 border-gray-200 bg-white rounded-e-xl rounded-es-xl drop-shadow-lg">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="text-sm font-semibold text-gray-900 ">
            {title}
          </span>
          <span class="text-sm font-normal text-gray-500 ">
            11:46
          </span>
        </div>
        <p class="text-sm font-normal py-2.5 text-gray-900">
          {description}.
        </p>
        
      

      </div>
   

      {!lastItem && <div className="milestone_line"></div>}
    </div>
  );
};

export default Milestone;
