import React from 'react'
import { User } from 'lucide-react'

const Testimonial = ({ name, role, quote, image }) => (
  <div className="rounded-lg bg-white backdrop-blur-lg p-6 shadow-lg">
    <div className="flex items-center space-x-3 mb-4">
      {image ? (
        <img src={image} className="rounded-full h-12 w-12 object-cover" alt={name} />
      ) : (
        <User className="h-12 w-12 text-gray-400" />
      )}
      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-sm">{quote}</p>
  </div>
)

const testimonials = [
  {
    name: "Anna",
    role: "Recruiter",
    image: "https://randomuser.me/portraits/women/1.jpg",
    quote: "This AI tool has been a game-changer for our hiring process. It's significantly reduced our time-to-hire by identifying top-tier candidates who perfectly align with our company's needs."
  },
  {
    name: "Jessica",
    role: "Career Counselor",
    image: "https://randomuser.me/portraits/women/15.jpg",
    quote: "I'm impressed with how this AI platform provides personalized career guidance. It's helped my clients discover hidden talents and explore new opportunities they hadn't considered before."
  },
  {
    name: "Mark",
    role: "Tech Entrepreneur",
    image: "https://randomuser.me/portraits/men/1.jpg",
    quote: "The AI-powered resume optimization feature is invaluable. It's not only improving the quality of resumes but also helping candidates tailor their applications to specific job openings."
  },
  {
    name: "Emily",
    role: "Job Seeker",
    image: "https://randomuser.me/portraits/women/4.jpg",
    quote: "I've landed multiple interviews thanks to the AI-powered job matching. The platform has saved me countless hours of searching and has connected me with relevant opportunities."
  },
  {
    name: "Phoebe",
    role: "Economist",
    image: "https://randomuser.me/portraits/women/13.jpg",
    quote: "AI-driven job matching has the potential to revolutionize the labor market. It can help bridge the gap between job seekers and employers, leading to increased efficiency and economic growth."
  },
  {
    name: "James",
    role: "AI Entrepreneur",
    image: "https://randomuser.me/portraits/men/5.jpg",
    quote: "The advancements in natural language processing and machine learning have enabled AI to provide increasingly accurate and relevant job recommendations."
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">Testimonials</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What our clients say
          </h3>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}