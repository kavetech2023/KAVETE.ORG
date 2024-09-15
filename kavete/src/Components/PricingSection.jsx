import { pricingPlans } from "../Data/pricing"
import PlanCard from "./PlanCard"
import TagLine from "./TagLine"

const PricingSection = () => {
  return (
    <div id="pricing" className="flex text-center p-10 items-center justify-center flex-col">
        <TagLine>Choose Your Plan</TagLine>
        <h2 className="font-extrabold text-3xl mb-8 pt-3">Flexible Pricing to Fit Your Growth</h2>
        <div className="grid mt-10 items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {
            pricingPlans.map((plan, index) => (
                <PlanCard 
                key={index} 
                {...plan}
                
                />
            ))
        }
        </div>
    
    </div>
  )
}

export default PricingSection