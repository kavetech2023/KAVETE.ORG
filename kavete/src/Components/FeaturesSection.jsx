import { features } from "../Data/features"
import TagLine from "./TagLine"

const FeaturesSection = () => {
  return (
    <div className="flex items-center p-2 justify-center flex-col">
        <TagLine>Features</TagLine>
        <h2 className="font-extrabold text-3xl mb-8 pt-3">Intelligence form building</h2>
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
    </div>
  )
}

export default FeaturesSection