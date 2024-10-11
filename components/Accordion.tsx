'use client'

import { useState } from 'react'

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <>
    <div id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
        <button 
            type="button" 
            className="font-albert text-2xl md:text-4xl font-semibold flex items-center justify-between w-full p-5 lg:py-7 lg:px-8 rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
            onClick={() => toggleAccordion(0)}
            aria-expanded={openIndex === 0} 
            aria-controls="accordion-open-body-1"
        >
            <span className="flex items-center text-white mr-3 lg:mr-6">Why are you running for office?</span>
            <svg data-accordion-icon className={`w-3 h-3 lg:w-5 lg:h-5 shrink-0 ${openIndex === 0 ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        </h2>
        <div id="accordion-open-body-1" className={openIndex === 0 ? '' : 'hidden'} aria-labelledby="accordion-open-heading-1">
            <div className="p-5 border border-b-0 lg:px-8 lg:py-8  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 font-libre text-paragraph-s lg:text-paragraph-l text-gray-200">37 years ago, I met my wife, Christina, on KB and have since built our life and raised a family on this island paradise. We have a strong history of giving back to the community.</p>
                <p className="font-libre text-paragraph-s lg:text-paragraph-l text-gray-200">Recently retired I have time and can offer <span className="font-bold text-white">30+ years of leadership experience</span> as the President of a 100-year-old, internationally recognized construction company.</p>
            
            </div>
        </div>
        <h2 id="accordion-open-heading-2">
        <button 
            type="button" 
            className="font-albert text-2xl text-left md:text-4xl font-semibold flex items-center justify-between w-full p-5 lg:py-7 lg:px-8 rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
            onClick={() => toggleAccordion(1)}
            aria-expanded={openIndex === 1} 
            aria-controls="accordion-open-body-2"
        >
            <span className="flex items-center text-white mr-3 lg:mr-6">What makes you the best candidate for the position you are seeking?</span>
            <svg data-accordion-icon className={`w-3 h-3 lg:w-5 lg:h-5 shrink-0 ${openIndex === 1 ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        </h2>
        <div id="accordion-open-body-2" className={openIndex === 1 ? '' : 'hidden'} aria-labelledby="accordion-open-heading-2">
            <div className="p-5 border border-b-0 lg:px-8 lg:py-8 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-libre text-paragraph-s lg:text-paragraph-l text-gray-200">I am a fiscal conservative who favors undertaking <span className="font-bold text-white">financially feasible projects</span> and I am able to separate the desire to act and the ability to execute projects effectively. </p>
                <p className="font-libre text-paragraph-s lg:text-paragraph-l text-gray-200">My expertise lies in waste control for multimillion-dollar projects, working with developers, architects and municipalities to implement affordable, long-lasting solutions.</p>
            </div>
        </div>
        <h2 id="accordion-open-heading-3">
        <button 
            type="button" 
            className="font-albert text-2xl text-left md:text-4xl font-semibold flex items-center justify-between w-full p-5 lg:py-7 lg:px-8 rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
            onClick={() => toggleAccordion(2)}
            aria-expanded={openIndex === 2} 
            aria-controls="accordion-open-body-3"
        >
            <span className="flex items-center text-white mr-3 lg:mr-6">What is the most pressing issue facing the community you wish to represent?</span>
            <svg data-accordion-icon className={`w-3 h-3 lg:w-5 lg:h-5 shrink-0 ${openIndex === 2 ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        </h2>
        <div id="accordion-open-body-3" className={openIndex === 2 ? '' : 'hidden'} aria-labelledby="accordion-open-heading-3">
            <div className="p-5 border lg:px-8 lg:py-8 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-libre text-paragraph-s lg:text-paragraph-l text-gray-200">Reliable power is vital to <span className="font-bold text-white">our community's safety and security</span>. Without it, essential infrastructure systems fail. I support prioritizing underground power lines.</p>
                <p className="font-libre text-paragraph-s lg:text-paragraph-l text-gray-200">As a municipality, we must also improve transportation & fortify infrastructure; this will enhance quality of life, boost home insurability, and ensure our island's continued prosperity.</p>
            </div>
        </div>
    </div>
  </>
  )
}

export default Accordion