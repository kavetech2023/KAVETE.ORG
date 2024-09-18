import { features } from "../Data/features"
import TagLine from "./TagLine"
import { ScanEye, FileSearch, MessageSquare, BriefcaseBusiness, CircleDollarSign, ChartNoAxesCombined } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div id="services" className="flex items-center p-2 justify-center flex-col">
        <TagLine>Services</TagLine>
        <h2 className="font-extrabold text-3xl mb-8 mx-auto pt-3">What we offer to you.</h2>
        <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
            {
            features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white border border-indigo/400/30 rounded-lg shadow-lg p-6 h-full">
                        <div className="flex justify-between gap-4">
                            <div className="mt-1">
                            {feature.icon === "1" && <ScanEye size={40} color={"gray"}/>}
        {feature.icon === "2" && <FileSearch size={40} color={"gray"}/>}
        {feature.icon === "3" && <MessageSquare size={40} color={"gray"}/>}
        {feature.icon === "4" && <BriefcaseBusiness size={40} color={"gray"}/>}
        {feature.icon === "5" && <CircleDollarSign size={40} color={"gray"}/>}
        {feature.icon === "6" && <ChartNoAxesCombined size={40} color={"gray"}/>}
                            </div>
                            <div>
                            <h3 className="font-bold text-xl">{feature.title}</h3>
                            <p className="text-gray-500">{feature.description}</p>
                            </div>
                            
                        </div>
                    </div>    
            ))}
            </div>
    </div>
  )
}

export default FeaturesSection