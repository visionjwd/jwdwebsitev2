import React from 'react'
import styles from '../styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/JWD_Logo_Black.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className = {styles.footermain}>
      <div className = {styles.container}>
        <div className = {styles.rightSide}>
            <Link href = '/'>
                <Image className = {styles.image} priority src = {logo} alt = '/'/>
            </Link>
            <div className = {styles.linkBox}>
            <Link href = '/'>
                <p>Home</p>
            </Link>
            <Link href = '/discover'>
                <p>Discover</p>
            </Link>
            <Link href = '/contact'>
                <p>Contact</p>
            </Link>
            </div>
        </div>
        <div className = {styles.leftSide}>
          <Link href = "https://www.instagram.com/visionjwd" target = '_blank'><InstagramIcon/></Link>
          <Link href = "mailto:info@jwdcreativehouse.ca" target = '_blank'><EmailIcon/></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
