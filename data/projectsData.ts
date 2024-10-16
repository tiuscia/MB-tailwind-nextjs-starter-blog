interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Michael shares his personal story, what brought him to Key Biscayne, and why he decided to run for office. ',
    description: `Key Biscayne Stories Podcast`,
    imgSrc: '/static/images/carousel/surf-cropped.png',
    href: 'https://youtu.be/zkMfa_AfobM',
  },
  {
    title: 'Podcast: Bracken, Jenkins-Lopez sound off on Big Dig',
    description: `kbindependent.org`,
    imgSrc: '/static/images/press/Podcast-Bracken-Jenkins-Lopez-Big Dig.png',
    href: 'https://kbindependent.org/2024/09/22/podcast-bracken-jenkins-lopez-sound-off-on-big-dig/',
  },
  {
    title: 'Six candidates for Village Council explain why residents should vote for them',
    description: `islandernews.com`,
    imgSrc: '/static/images/press/Six candidates for Village Council.png',
    href: 'https://www.islandernews.com/news/keybiscayne/six-candidates-for-village-council-explain-why-residents-should-vote-for-them/article_803b872c-7561-11ef-bad6-33749df9ff6d.html',
  },
  {
    title: 'Six residents set to do battle for three Key Biscayne Village Council seats',
    description: `islandernews.com`,
    imgSrc: '/static/images/press/key biscayne village council seats.png',
    href: 'https://www.islandernews.com/opinion/editorials/six-residents-set-to-do-battle-for-three-key-biscayne-village-council-seats/article_19adac2e-656c-11ef-87da-bbcecf720adc.html',
  },
]

export default projectsData
