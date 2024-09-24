import React from 'react'
import { features } from "../Data/features"
import TagLine from "./TagLine"
import { ScanEye, FileSearch, MessageSquare, BriefcaseBusiness, CircleDollarSign, ChartNoAxesCombined } from 'lucide-react'

const iconMap = {
  "1": ScanEye,
  "2": FileSearch,
  "3": MessageSquare,
  "4": BriefcaseBusiness,
  "5": CircleDollarSign,
  "6": ChartNoAxesCombined
}

const FeatureItem = ({ icon, title, description }) => {
  const Icon = iconMap[icon]
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-100">
      <div className="flex-shrink-0">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

const PhoneMockup = () => (
  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" className="dark:hidden w-[272px] h-[572px]" alt="App interface light mode" />
      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt="App interface dark mode" />
    </div>
  </div>
)

const FeaturesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <TagLine>Services</TagLine>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What we do
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection