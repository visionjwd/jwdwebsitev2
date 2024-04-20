import React from 'react'
import before1 from '../aigallery/before1.jpg'
import before2 from '../aigallery/before2.jpg'
import before3 from '../aigallery/before3.jpg'
import before4 from '../aigallery/before4.jpg'
import before5 from '../aigallery/before5.jpg'
import before6 from '../aigallery/before6.jpg'
import after1 from '../aigallery/after1.jpg'
import after2 from '../aigallery/after2.jpg'
import after3 from '../aigallery/after3.jpg'
import after4 from '../aigallery/after4.jpg'
import after5 from '../aigallery/after5.jpg'
import after6 from '../aigallery/after6.jpg'
import styles from '../styles/estate.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function realestate() {
  return (
    <main className = {styles.estateMain}>
      <div className = {styles.estateHeader}>
        <h2>Limitless potential to showcase your property with AI</h2>
        <button>GET STARTED</button>
      </div>
      <div className = {styles.estateDisplay}>
        <h3>See how we transform them</h3>
        <div className = {styles.estateGallery}>
        <div className = {styles.gallerybreak}>
            <h1>1</h1>
            <img src = {before5.src} className = {styles.estateImage}/>
            <ArrowForwardIosIcon/>
            <img src = {after5.src} className = {styles.estateImage}/>
          </div>
          <div className = {styles.gallerybreak}>
          <h1>2</h1>
            <img src = {before1.src} className = {styles.estateImage}/>
            <ArrowForwardIosIcon/>
            <img src = {after1.src} className = {styles.estateImage}/>
          </div>
          <div className = {styles.gallerybreak}>
          <h1>3</h1>
            <img src = {before2.src} className = {styles.estateImage}/>
            <ArrowForwardIosIcon/>
            <img src = {after2.src} className = {styles.estateImage}/>
          </div>
          <div className = {styles.gallerybreak}>
          <h1>4</h1>
            <img src = {before3.src} className = {styles.estateImage}/>
            <ArrowForwardIosIcon/>
            <img src = {after3.src} className = {styles.estateImage}/>
          </div>
          <div className = {styles.gallerybreak}>
          <h1>5</h1>
            <img src = {before4.src} className = {styles.estateImage}/>
            <ArrowForwardIosIcon/>
            <img src = {after4.src} className = {styles.estateImage}/>
          </div>
          <div className = {styles.gallerybreak}>
          <h1>6</h1>
            <img src = {before6.src} className = {styles.estateImage}/>
            <ArrowForwardIosIcon/>
            <img src = {after6.src} className = {styles.estateImage}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default realestate
