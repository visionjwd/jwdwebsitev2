import React from 'react'
import styles from '../styles/contact.module.css'
import Form from './Form'
import Head from 'next/head'

function Contact() {
  return (
    <div className = {styles.contactWrapper} id = "contact">
      <Head>
        <title>CONTACT - JWD CREATIVE HOUSE</title>
        <meta name="description" content="CONTACT US TO GET STARTED ON YOUR STORY" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = {styles.contactRight}>
        <h1>CONTACT US</h1>
        <h3>We&#39;d love to capture your story.</h3>
      </div>
      <div className = {styles.contactLeft}>
        <Form/>
      </div>
    </div>
  )
}

export default Contact
