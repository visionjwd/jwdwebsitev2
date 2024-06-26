import React from 'react'
import styles from '../styles/discover.module.css'
import Link from 'next/link'
import Head from 'next/head'

function discover() {
  return (
    <main className = {styles.discovermain}>
        <Head>
        <title>DISCOVER - JWD CREATIVE HOUSE</title>
        <meta name="description" content="Discover our work for previous clients." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className = {styles.headSection}>
        <h1>WHAT WE DO</h1>
        <h3>Stories captured for our previous clients</h3>
        <Link href = '/#contact'>
        <button>TELL US YOUR STORY</button>
        </Link>
        </div>
        <div className = {styles.works}>
            <div className = {styles.imgsection} id = {styles.auto}>
                <div className = {styles.overlay}>
                    <h1>AUTOMOTIVE</h1>
                    <Link href = '/automotive'>
                    <button>VIEW</button>
                    </Link>
                </div>                  
            </div>
            <div className = {styles.imgsection} id = {styles.event}>
                <div className = {styles.overlay}>
                    <h1>EVENT</h1>
                    <Link href = '/event'>
                    <button>VIEW</button>
                    </Link>
                </div> 
            </div>
        </div>
        <div className = {styles.works}>
            <div className = {styles.imgsection} id = {styles.lifestyle}>
                <div className = {styles.overlay}>
                    <h1>LIFESTYLE</h1>
                    <Link href = '/lifestyle'>
                    <button>VIEW</button>
                    </Link>
                </div>          
            </div>
            <div className = {styles.imgsection} id = {styles.video}>
                <div className = {styles.overlay}>
                    <h1>CINEMATOGRAPHY</h1>
                    <Link href = '/cinema'>
                    <button>VIEW</button>
                    </Link>
                </div> 
            </div>
        </div>
        <div className = {styles.webdesign}>
            <div className = {styles.half}>
                <div className = {styles.realestateimage}>
                    <Link href = '/realestate'><button>VIEW GALLERY</button></Link>
                </div>
            </div>
            <div className = {styles.half}>
                <h1>REAL ESTATE</h1>
                <h3>AI Powered image to showcase stunning potentials.</h3>
                <Link href = '/#contact'>
                    <button>GET STARTED</button>
                </Link>
            </div>
        </div>
        <div className = {styles.webdesign}>
            <div className = {styles.half}>
                <h1>WEB DESIGN</h1>
                <h3>Stunning, fast website built with the latest tech.</h3>
                <Link href = '/#contact'>
                    <button>GET STARTED</button>
                </Link>
            </div>
            <div className = {styles.half}>
                <div className = {styles.webdevimage}>
                </div>
                    <h3>Proper, maintainable codebase with user-friendly front end. </h3>
            </div>
        </div>
        

    </main>
  )
}

export default discover
