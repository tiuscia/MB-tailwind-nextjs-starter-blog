import React, { useRef, useEffect } from 'react'
import styles from './Carousel.module.css'
import Image from 'next/image'

const Carousel = () => {
  const basePath = process.env.BASE_PATH || ''
  const carouselRef = useRef<HTMLDivElement>(null)

  const images = [
    { src: 'bike.jpg', alt: 'Bike', objectPosition: 'object-[72%_center]' },
    { src: 'boat.jpg', alt: 'Boat' },
    { src: 'sea.jpg', alt: 'Sea' },
    { src: 'sign.jpg', alt: 'Sign' },
    { src: 'oktober.jpg', alt: 'Oktober' },
    { src: 'surf.jpg', alt: 'Surf', objectPosition: 'object-[center_13%]' },
    { src: 'dog.jpg', alt: 'Dog' },
    {
      src: 'christina-michael-wind.jpg',
      alt: 'Christina Michael Wind',
      objectPosition: 'object-[15%_center]',
    },
  ]

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const firstChild = carousel.firstElementChild as HTMLElement
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth + 20 // width + margin-right
        carousel.style.width = `${itemWidth * images.length * 2}px`
      }
    }
  }, [images.length])

  return (
    <div className={styles.carouselContainer}>
      <div ref={carouselRef} className={styles.carousel}>
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
          >
            <Image
              src={`${basePath}/static/images/carousel/${image.src}`}
              alt={image.alt}
              width={500}
              height={500}
              className={`absolute inset-0 h-full w-full object-cover ${image.objectPosition || ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
