import Milestone from "./Milestone"
import TagLine from "./TagLine"
import { ClipboardPlus, Bot, Briefcase, Plane  } from 'lucide-react';

const RoadMap = () => {

    const roadmap = [
        {   id: 1,
            icon: <ClipboardPlus/>,
            title: 'Step 1',
            description: 'We get your CV and match you with the best job opportunities in Africa.',
        },
        {
            id: 2,
            icon: <Bot/>,
            title: 'Step 2',
            description: 'We train you on the skills you need to get the job.',
        },
        {
            id: 3,
            icon: <Briefcase/>,
            title: 'Step 3',
            description: 'We help you get the job and support you as you grow in your career.',
        },
        {
            id: 4,
            icon: <Plane />,
            title: 'Step 4',
            description: 'We help you get the job and support you as you grow in your career.',
        }
    ]
        
  return (
    <>
    

  
    <section className="flex p-10 items-center justify-center flex-col">
    <TagLine>How it Works</TagLine>
    <h1 className="font-semibold text-3xl text-center mb-16">Steps to get your dream job.</h1>
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