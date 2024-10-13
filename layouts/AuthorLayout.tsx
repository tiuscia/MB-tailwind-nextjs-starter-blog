import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="font-albert text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Why Serve?
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 font-albert text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex items-center space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon
                kind="instagram"
                href="https://www.instagram.com/michaelfbracken/"
                size={6}
              />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <p className="mb-10 font-libre text-paragraph-s lg:text-paragraph-l">
              For me, the answer is straightforward. We love Key Biscayne. I met my wife, Christina,
              in Key Biscayne 37 years ago, and we have since built our life and raised a family on
              this island paradise. Christina and I have a strong history of giving back to the
              community we proudly call home. Recently, Christina has channeled her passion into her
              role as President of the Friends of Cape Florida preparing for the 200th anniversary
              of the Cape Florida Lighthouse. After becoming a US citizen, she founded GoVoteMiami,
              a 501(c)(3) non-profit organization registered with the state to provide voter
              registration, training and materials in support of the National Voter Registration
              Act.{' '}
            </p>

            <p className="mb-10 font-libre text-paragraph-s lg:text-paragraph-l">
              My community service has included supporting Christina's endeavors as well as serving
              as Commodore of the Key Biscayne Yacht Club, including 8 years on the club’s finance
              committee. During my time as the Vice President of the Key Biscayne Beach Club, I was
              a member of the team that lede this KB institution back to financial stability. I also
              served for 2 years on the Village Undergrounding Committee. Christina and I are both
              deeply invested in the continued prosperity of Key Biscayne.
            </p>

            <h3 className="mb-6 font-albert text-2xl font-semibold md:text-4xl">
              Why Now, and Why Me?
            </h3>
            <p className="mb-10 font-libre text-paragraph-s lg:text-paragraph-l">
              I just retired and bring over 30 years of experience as the President of a
              100-year-old, internationally recognized construction company. It’s important to
              differentiate my professional background from other candidates: I am not an attorney,
              I am not in insurance, liquor sales, audio-visual engineering, or union organizing.{' '}
            </p>
            <p className="mb-10 font-libre text-paragraph-s lg:text-paragraph-l">
              I am a fiscal conservative who understands the importance of balancing the budget. I
              favor undertaking financially feasible projects and am able to separate the desire to
              act and the ability to execute projects effectively. My expertise lies in waste
              control for multimillion-dollar private and institutional building projects. For over
              3 decades I collaborated with developers, architects, municipalities and contractors
              to implement durable, affordable, long-lasting solutions.{' '}
            </p>
            <p className="mb-10 font-libre text-paragraph-s lg:text-paragraph-l">
              I am the only candidate with a profound understanding of the construction process,
              including the complexities of negotiating contracts, and assessing project timing,
              oversight and costs. I believe my construction experience speaks for itself and I am
              fully committed to supporting our VKB team in any capital projects undertaken and
              funded by our Village.
            </p>
            <p className="mb-10 font-libre text-paragraph-s lg:text-paragraph-l">
              Key Biscayne operates under a sound governance structure that is periodically reviewed
              and enhanced as needed. Any capital project would require thorough due diligence to
              assess its challenges and benefits before receiving my vote. If a project is
              unaffordable, inadequately assessed for benefits, or presents significant execution
              challenges, it will not receive my support.
            </p>
            <p className="mb-10 font-libre text-paragraph-s lg:text-paragraph-l">
              Please understand that my positions are supportive of undergrounding, transportation
              improvements, and infrastructure fortification, all projects that will improve our
              quality of life, the insurability of our homes and contribute to our island paradise’s
              continued prosperity. Good communication and civil dialog is key to our success; I’d
              like to think that my family, my business partners and my friends agree it has served
              us well.{' '}
            </p>

            {/* {children} */}
          </div>
        </div>
      </div>
    </>
  )
}
