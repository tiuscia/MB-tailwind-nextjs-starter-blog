'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from '@/components/Link'
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
      ;(miniEndorsementRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="">
        <SectionContainer>
          <div className="hero mb-6 flex flex-col gap-4 md:mb-8 md:pb-8 lg:mb-0 lg:flex-row lg:gap-8 xl:mb-12 xl:max-h-[calc(100vh_-_130px)] xl:min-h-[500px] xl:gap-8 xl:pb-0">
            <div className="first-col flex w-full flex-col gap-6 space-y-2 pb-8 pt-6 md:gap-8 lg:gap-8 lg:pb-0 xl:gap-9">
              <div className="first-col_content lg:pr-8">
                <h1 className="mb-5 font-bebas text-heading-spacing-s font-extrabold text-gray-900 dark:text-gray-100 md:text-heading-spacing-m lg:text-heading-spacing-l xl:text-heading-spacing-xl">
                  Good communication and civil dialogue
                </h1>
                <p className="font-libre text-subtitle text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim
                  blandit purus, non suscipit nunc dapibus non.
                </p>
              </div>
              {/* #345c72 */}
              <div className="first-col_row flex flex-col gap-4 md:flex-row md:items-stretch md:justify-start xl:flex-1 xl:gap-6">
                <div className=" mt-auto flex rounded-xl bg-[#fd7b2f] p-6 md:mt-0">
                  <Image
                    src={`${basePath}/static/images/hero/sign-w.png`}
                    alt="michael bracken for KB council"
                    className="object-contain "
                    width={810}
                    height={439}
                  />
                </div>
                <button
                  onClick={scrollToMiniEndorsement}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      scrollToMiniEndorsement()
                    }
                  }}
                  aria-label="Scroll to mini endorsement"
                  tabIndex={0}
                  className="group relative mt-auto flex flex-row items-center gap-4 rounded-xl bg-[#345c72] p-6 hover:cursor-pointer md:mt-0 md:max-w-[40%] md:flex-col md:items-start md:gap-3 lg:max-w-[60%] lg:flex-1 xl:min-w-[45%] xl:justify-center"
                >
                  <span className="text-left font-bebas text-heading-spacing-xs md:whitespace-normal md:text-heading-spacing-s lg:text-heading-spacing-xxs xl:text-heading-spacing-xs">
                    Mini endorsement
                  </span>
                  <svg
                    className="h-[36px] w-[50px] transition-all duration-500 group-hover:translate-x-3 md:h-auto md:w-[30%] xl:w-[35%]"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    fill="white"
                    clip-rule="evenodd"
                  >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="second-col flex min-h-[80vh] w-full overflow-hidden rounded-xl md:h-[90vh] md:max-h-[530px] lg:h-auto lg:max-h-full ">
              <Image
                src={`${basePath}/static/images/hero/michael-bracken.JPG`}
                alt="michael bracken"
                className="w-full rounded-xl object-cover md:object-[center_10%]"
                width={729}
                height={966}
              />
            </div>
          </div>

          <div className="py-6 md:py-8 lg:py-12">
            <Accordion />
          </div>
        </SectionContainer>

        <Carousel />

        <SectionContainer>
          <div className="py-6 md:py-8 lg:py-12">
            <div
              ref={miniEndorsementRef}
              id="mini-endorsement"
              className="rounded-xl border-8 border-[#fd7b2f] bg-[#052c42] p-6 text-center md:p-8 lg:p-12"
            >
              <h3 className=" mb-5 font-bebas text-heading-spacing-s font-extrabold text-gray-900 dark:text-gray-100 md:text-heading-spacing-m lg:text-heading-spacing-l xl:text-heading-spacing-xl">
                You can help!
              </h3>
              <p className="mx-auto mb-10 max-w-[700px] font-libre text-paragraph-s lg:text-paragraph-l">
                Your Mini Endorsements to the Islander News is important to me and will help other
                voters to get to know me better.
              </p>
              <a
                href="mailto:editor@islandernews.com?subject=Endorse%20for%20Michael%20Bracken&cc=michaelfbracken@icloud.com"
                className="group mx-auto mb-10 flex max-w-[80%] items-center justify-center gap-3 rounded-full bg-[#fd7b2f] p-3 px-8 pt-[14px] font-bebas text-heading-spacing-xxs md:text-heading-spacing-xs lg:max-w-[540px] lg:gap-6"
              >
                <span>send your endorsement </span>
                <svg
                  className="hidden transition-all duration-500 group-hover:translate-x-3 md:block md:h-auto md:w-[40px] xl:w-[50px]"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  fill="white"
                  clip-rule="evenodd"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </a>
              <p className="mx-auto max-w-[650px] font-libre text-paragraph-s">
                * Endorsements must be submitted with your name, limited to 75 words and by 5 p.m.
                Friday, the week before publications (Oct. 17, 24, 31).
              </p>
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  )
}
