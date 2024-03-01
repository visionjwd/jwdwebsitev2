import React from 'react'
import styles from '../styles/gallery.module.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import image1 from '../eventsGallery/i3.jpg'
import image2 from '../eventsGallery/i9.jpg'
import image3 from '../eventsGallery/jays2.jpg'
import image4 from '../eventsGallery/baseball.jpg'
import image5 from '../eventsGallery/football.jpg'
import image6 from '../eventsGallery/football2.jpg'
import image7 from '../eventsGallery/soccer.jpg'
import image8 from '../eventsGallery/i17.jpg'
import image9 from '../eventsGallery/importfest.jpg'



const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
]

function event() {
  return (
    <div className = {styles.galleryMain}>
      <div className = {styles.galleryHeader}>
        <h2>The purpose of a camera is to capture memories, not replace them.</h2>
        <h3>-Unknown-</h3>
      </div>
      <div className = {styles.galleryDisplay}>
        <div className = {styles.galleryTitle}>
            <h1>EVENTS</h1>
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
    </div>
  )
}

export default event
