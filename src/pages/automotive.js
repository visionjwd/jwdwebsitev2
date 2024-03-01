import React from 'react'
import styles from '../styles/gallery.module.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import image1 from '../automotiveGallery/mercLight.jpg'
import image2 from '../automotiveGallery/bmwModel.jpg'
import image3 from '../automotiveGallery/AlfaFront.jpg'
import image4 from '../automotiveGallery/wheel.jpg'
import image5 from '../automotiveGallery/mclarenDetail.jpg'
import image6 from '../automotiveGallery/brakes.jpg'
import image7 from '../automotiveGallery/E30.jpg'
import image8 from '../automotiveGallery/bmwSide.jpg'
import image9 from '../automotiveGallery/s5Roller.jpg'
import image10 from '../automotiveGallery/mclaren.jpg'
import image11 from '../automotiveGallery/Alfa.jpg'
import image12 from '../automotiveGallery/targaSide.jpg'

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

function automotive() {
  return (
    <div className = {styles.galleryMain}>
      <div className = {styles.galleryHeader}>
        <h2>Youre a car, but most of all, what you are, what youve become, is a mate. And thats what makes a car special.</h2>
        <h3>-Jeremy Clarkson-</h3>
      </div>
      <div className = {styles.galleryDisplay}>
        <div className = {styles.galleryTitle}>
            <h1>AUTOMOTIVE</h1>
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

export default automotive