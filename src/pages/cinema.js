import React from 'react'
import styles from '../styles/gallery.module.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Head from 'next/head'

import image1 from '../cinemagallery/cinema1.jpg'
import image2 from '../cinemagallery/cinema2.jpg'
import image3 from '../cinemagallery/cinema3.jpg'
import image4 from '../cinemagallery/cinema4.jpg'
import image5 from '../cinemagallery/cinema5.jpg'
import image6 from '../cinemagallery/cinema6.jpg'
import image7 from '../cinemagallery/cinema7.jpg'
import image8 from '../cinemagallery/cinema8.jpg'

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
]

function cinema() {
  return (
    <main className = {styles.galleryMain}>
      <Head>
        <title>CINEMATOGRAPHY - JWD CREATIVE HOUSE</title>
        <meta name="description" content="Cinematography by JWD Creative House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = {styles.galleryHeader} id = {styles.videoheader}>
        <iframe id = "first" src="https://www.youtube.com/embed/BHRR-FMpDP4" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className = {styles.galleryDisplay}>
        <div className = {styles.galleryTitle}>
            <h1>CINEMATOGRAPHY</h1>
        </div>
        <div className = {styles.galleryMasonry}>
        <ResponsiveMasonry className = {styles.MasonryFormat} columnsCountBreakPoints={{350: 1, 850:2}}>
          <Masonry gutter = "10px">
          {images.map((images,i) => (
                    <img 
                        key = {i}
                        src = {images.src}
                        alt = "images"
                        style={{width: "100%",display: "block"}}
                        />      
                ))}
          </Masonry>
        </ResponsiveMasonry>
        </div>
      </div>
    </main>
  )
}

export default cinema
