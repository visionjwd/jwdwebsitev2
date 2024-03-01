import React from 'react'
import styles from '../styles/gallery.module.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import image1 from '../lifestyleGallery/daredevil2.jpg'
import image2 from '../lifestyleGallery/tshirt.jpg'
import image3 from '../lifestyleGallery/daredevil.jpg'
import image4 from '../lifestyleGallery/peaches.jpg'
import image5 from '../lifestyleGallery/uphigh.jpg'
import image6 from '../lifestyleGallery/peacheswheel.jpg'
import image7 from '../lifestyleGallery/nightroof.jpg'
import image8 from '../lifestyleGallery/fpvvibes.jpg'
import image9 from '../lifestyleGallery/I5.jpg'
import image10 from '../lifestyleGallery/pancake.jpg'
import image11 from '../lifestyleGallery/I6.jpg'
import image12 from '../lifestyleGallery/I7.jpg'

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
    image10,
    image11,
    image12,
]

function lifestyle() {
  return (
    <div className = {styles.galleryMain}>
      <div className = {styles.galleryHeader}>
        <h2>LIVE FOR THE THRILL, SO THAT YOU HAVE NO REGRETS</h2>
        <h3>-UNKNOWN-</h3>
      </div>
      <div className = {styles.galleryDisplay}>
        <div className = {styles.galleryTitle}>
            <h1>LIFESTYLE</h1>
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

export default lifestyle
