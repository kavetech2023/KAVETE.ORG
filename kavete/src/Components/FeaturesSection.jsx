import { features } from "../Data/features"
import TagLine from "./TagLine"
import { ScanEye, FileSearch, MessageSquare, BriefcaseBusiness, CircleDollarSign, ChartNoAxesCombined } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div id="services" className="flex items-center p-2 justify-center flex-col">
        <TagLine>Services</TagLine>
        <h2 className="font-extrabold text-3xl mb-2 mx-auto ">What we offer to you.</h2>

        <div className="grid grid-cols-1 max-w-[850px] sm:grid-cols-2">

        <div className="gap-3 mb-4 mt-10" >
          
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-2xl">
              <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div class="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div class="rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt=""/>
              </div>
          </div>
          </div>
        <div>
        <div className="">
            {
            features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4  border-gray-200 rounded-lg shadow-lg p-6 h-full">
                        <div className="flex justify-between">
                            <div className="mt-1">
                            {feature.icon === "1" && <ScanEye />}
        {feature.icon === "2" && <FileSearch/>}
        {feature.icon === "3" && <MessageSquare/>}
        {feature.icon === "4" && <BriefcaseBusiness />}
        {feature.icon === "5" && <CircleDollarSign />}
        {feature.icon === "6" && <ChartNoAxesCombined />}
                            </div>
                            <div className="ml-4">
                            <h3 className="font-bold text-sm">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                            
                        </div>
                    </div>    
            ))}
            </div>
        </div>


        </div>
      

        
     
    </div>
  )
}

export default FeaturesSection