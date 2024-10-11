'use client'
import { use, useRef } from 'react'
import Link from '@/components/Link'
// import Tag from '@/components/Tag'
import SectionContainer from '@/components/SectionContainer'
import Accordion from '@/components/Accordion'
import Carousel from '@/components/Carousel/Carousel'
import siteMetadata from '@/data/siteMetadata'
// import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5
const basePath = process.env.BASE_PATH || ''

export default function Home({ posts }) {

  const miniEndorsementRef = useRef(null)
  const scrollToMiniEndorsement = () => {
    if (miniEndorsementRef.current) {
      (miniEndorsementRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className="">
        <SectionContainer>
          <div className='hero flex flex-col gap-4 mb-6 md:mb-8 lg:flex-row lg:mb-0 md:pb-8 lg:gap-8 xl:min-h-[500px] xl:pb-0 xl:mb-12 xl:max-h-[calc(100vh_-_130px)] xl:gap-8'>
            <div className="first-col w-full flex flex-col gap-6 md:gap-8 lg:gap-8 space-y-2 pb-8 pt-6 lg:pb-0 xl:gap-9">
              <div className="first-col_content lg:pr-8">
                <h1 className="text-heading-spacing-s font-bebas mb-5 font-extrabold text-gray-900 dark:text-gray-100 md:text-heading-spacing-m lg:text-heading-spacing-l xl:text-heading-spacing-xl">
                  Good communication and civil dialogue
                </h1>
                <p className="font-libre text-subtitle text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim blandit purus, non suscipit nunc dapibus non.
                </p>
              </div>
              {/* #345c72 */}
              <div className="first-col_row flex flex-col gap-4 md:flex-row md:items-stretch md:justify-start xl:flex-1 xl:gap-6">
                <div className=" bg-[#fd7b2f] flex rounded-xl mt-auto p-6 md:mt-0">
                  <img src={`${basePath}/static/images/hero/sign-w.png`} alt="michael bracken for KB council" className="object-contain " />
                </div>
                <a onClick={scrollToMiniEndorsement} className="bg-[#345c72] group flex flex-row rounded-xl mt-auto p-6 md:mt-0 md:gap-6 md:max-w-[40%] md:flex-col lg:flex-1 lg:max-w-[60%] xl:min-w-[45%] xl:justify-center hover:cursor-pointer">
                  <span className="text-heading-spacing-xs font-bebas md:text-heading-spacing-s md:whitespace-normal lg:text-heading-spacing-xxs xl:text-heading-spacing-xs">Mini endorsement</span> 
                  <svg 
                    className="w-[50px] h-[36px] md:w-[30%] md:h-auto xl:w-[35%] group-hover:translate-x-3 transition-all duration-500" 
                    width="100" height="100" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="white" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                </a>
              </div>
              
            </div>

            <div className='second-col w-full min-h-[80vh] flex rounded-xl overflow-hidden md:h-[90vh] md:max-h-[530px] lg:h-auto lg:max-h-full '>
              <img src={`${basePath}/static/images/hero/michael-bracken.JPG`} alt="michael bracken" className="object-cover w-full rounded-xl md:object-[center_10%]" />
            </div>
          </div>

          {/* <div className="py-6 md:py-8 lg:py-12">
            <h3 className="font-albert text-2xl md:text-4xl font-semibold mb-6" >Why are you running for office?</h3>
            <p className="font-libre mb-10 text-paragraph-s lg:text-paragraph-l">37 years ago, I met my wife, Christina, on KB and have since built our life and raised a family on this island paradise. We have a strong history of giving back to the community. Recently retired I have time and can offer 30+ years of leadership experience as the President of a 100-year-old, internationally recognized construction company. </p>

            <h3 className="font-albert text-2xl md:text-4xl font-semibold mb-6" >What makes you the best candidate for the position you are seeking?</h3>
            <p className="font-libre mb-10 text-paragraph-s lg:text-paragraph-l">I am a fiscal conservative who favors undertaking financially feasible projects and I am able to separate the desire to act and the ability to execute projects effectively. My expertise lies in waste control for multimillion-dollar projects, working with developers, architects and municipalities to implement affordable, long-lasting solutions.</p>

            <h3 className="font-albert text-2xl md:text-4xl font-semibold mb-6" >What is the most pressing issue facing the community you wish to represent? </h3>
            <p className="font-libre text-paragraph-s lg:text-paragraph-l">Reliable power is vital to our community’s safety and security. Without it, essential infrastructure systems fail. I support prioritizing underground power lines. As a municipality, we must also improve transportation & fortify infrastructure; this will enhance quality of life, boost home insurability, and ensure our island's continued prosperity.</p>
          </div> */}
          <div className="py-6 md:py-8 lg:py-12">
            <Accordion />
          </div>
        </SectionContainer>

        <Carousel />

        <SectionContainer>
          <div className="py-6 md:py-8 lg:py-12">
              <div ref={miniEndorsementRef} id="mini-endorsement" className="border-8 bg-[#052c42] border-[#fd7b2f] rounded-xl p-6 md:p-8 lg:p-12 text-center">
                <h3 className=" text-heading-spacing-s font-bebas mb-5 font-extrabold text-gray-900 dark:text-gray-100 md:text-heading-spacing-m lg:text-heading-spacing-l xl:text-heading-spacing-xl">
                You can help!
                </h3>
                <p className="font-libre mb-10 text-paragraph-s lg:text-paragraph-l max-w-[700px] mx-auto" >
                Your Mini Endorsements to the Islander News is important to me and will help other voters to get to know me better.
                </p>
                <a 
                  href="mailto:editor@islandernews.com?subject=Endorse%20for%20Michael%20Bracken&cc=michaelfbracken@icloud.com"
                  className="bg-[#fd7b2f] group text-heading-spacing-xxs md:text-heading-spacing-xs font-bebas flex items-center justify-center rounded-full gap-3 lg:gap-6 p-3 pt-[14px] px-8 max-w-[80%] lg:max-w-[540px] mx-auto mb-10" >
                  <span>send your endorsement </span>
                  <svg 
                    className="hidden md:block md:w-[40px] md:h-auto xl:w-[50px] group-hover:translate-x-3 transition-all duration-500" 
                    width="100" height="100" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="white" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                </a>
                <p className="font-libre text-paragraph-s max-w-[650px] mx-auto" >
                * Endorsements must be submitted with your name, limited to 75 words and by 5 p.m. Friday, the week before publications (Oct. 17, 24, 31). 
                </p>

              </div>
            </div>
        </SectionContainer>
      </div>
      
    </>
  )
}