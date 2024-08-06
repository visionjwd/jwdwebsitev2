import React from 'react'
import styles from '../styles/contact.module.css'
import Form from './Form'
import Head from 'next/head'

function Contact() {
  return (
    <div className = {styles.contactWrapper} id = "contact">
      <div className = {styles.contactRight}>
        <h1>CONTACT US</h1>
        <h3>We&#39;d love to capture your story.</h3>
        <p>Email: info@jwdcreativehouse.ca</p>
      </div>
      <div className = {styles.contactLeft}>
        <Form/>
      </div>
    </div>
  )
}

export default Contact
