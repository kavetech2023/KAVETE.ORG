import Milestone from "./Milestone"
import TagLine from "./TagLine"
import { ClipboardPlus, Bot, Briefcase, Plane  } from 'lucide-react';

const RoadMap = () => {

    const roadmap = [
        {   id: 1,
            icon: <ClipboardPlus />,
            title: 'Step 1  ',
            description: 'Upload your Resume & Personalize your Profile',
        },
        {
            id: 2,
            icon: <Bot/>,
            title: 'Step 2 ',
            description: 'AI Resume Optimization & Job Matching',
        },
        {
            id: 3,
            icon: <Briefcase />,
            title: 'Step 3 ',
            description: 'Job Matching & Interview Prep',
        },
        {
            id: 4,
            icon: <Plane />,
            title: 'Step 4 ',
            description: 'Career Support & Guidance',
        }
    ]
        
  return (
    <>
    

  
    <section className="flex p-10 items-center justify-center flex-col">
    <TagLine>How it Works</TagLine>
    <h2 className="font-extrabold text-3xl mb-7 mx-auto ">4 Steps to your success</h2>
    <div className="mx-auto max-w-80">
       
        {roadmap.map((milestone, index) => (
            <Milestone 
            key={index} 
            title={milestone.title} 
            icon={milestone.icon}
            description={milestone.description} 
            lastItem={index === roadmap.length - 1} />
        ))}
        </div>
    </section>
    </>
  )
}

export default RoadMap