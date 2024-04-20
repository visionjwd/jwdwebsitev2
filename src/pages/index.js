import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>JWD Creative House</title>
        <meta name="description" content="Toronto-based media house, driven by passion. Tell us your story today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className = {styles.main}>
      </main>
      <div className = {styles.mainAbout}>
        <div className = {styles.aboutText}>
        <h1>ABOUT US</h1>
        <h3>Born from the passion for creative storytelling and captivating visuals, we aim to elevate your story through our vision. </h3>
        <h3>What started as a hobby for a single artist now transformed into a team working together to create memorable lasting visuals. A group of engineering students who also found passion in storytelling came together to form JWD Creative House. The constant innovating mindset of an engineer is what sets us apart. Your story should be told in it&#39;s unique way, and we&#39;ll find a way to craft it with precision.</h3>
        <h3>So whether you are a fellow artist, small business, or just someone whose story needs to be told to the world, we&#39;d love for you to let us craft it for you.</h3>
        </div>
      </div>
      <div className = {styles.work}>
        <div className = {styles.rightContainer} id = {styles.estate}>
          <h1>LAUNCHING OUR <span>AI</span> REAL ESTATE SERVICE</h1>
          <h3>Provide your customers with even more eye-catching photos of your properties, powered by AI. Transform your empty properties into visions of what could be possible.</h3>
          <Link href = "/#contact">
            <button>GET STARTED</button>
          </Link>
        </div>
        <div className = {styles.leftContainer} id = {styles.estateLeft}>
          <h2>Transform Your Property</h2>
            <Link href = '/realestate'> <button>VIEW MORE</button></Link>
        </div>
      </div>
      <div className = {styles.work}>
        <div className = {styles.rightContainer}>
          <div className = {styles.videoContainer}>
            <video autoPlay muted loop playsInline className = {styles.videoplayer}>
              <source src = {'/webvideo.mp4'} type = "video/mp4"/>
            </video>
          </div>
        </div>
        <div className = {styles.leftContainer}>
          <h1>DISCOVER OUR WORK</h1>
          <Link href = '/discover'><button>VIEW ALL</button></Link>
        </div>
      </div>
      <Contact/>
    </>
  )
}
