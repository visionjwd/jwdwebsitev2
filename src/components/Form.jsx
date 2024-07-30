'use client';

import React, { useState } from 'react'
import style from '../styles/Form.module.css'

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Sending')
      let data = {
        name,
        email,
        subject,
        message
      }
    fetch('/api/contacts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
     }).then((res) => {
    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
      setSubmitted(true)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }
  })
  }

  return ( 
      <div className = {style.form}>
        <form name = "contactform" className = {style.formContainer} data-netlify="true" onSubmit={handleSubmit}>
          <div className = {style.input}>
            <label>Name</label>
            <input
              required
              type = "text"
              name = "name"
              value = {name}
              onChange={(e) => setName(e.target.value)}
              className = {style.inputfield}
            />
          </div>
          <div className = {style.input}>
            <label>Email</label>
            <input
              required
              type = "email"
              name = "email"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
              className = {style.inputfield}
            />
          </div>
          <div className = {style.input}>
            <label>Subject</label>
            <input
              required
              type = "text"
              name = "subject"
              value = {subject}
              onChange={(e) => setSubject(e.target.value)}
              className = {style.inputfield}
            />
          </div>
          <div className = {style.input}>
            <label>Message</label>
            <textarea
              required
              name = "message"
              rows = {4}
              value = {message}
              onChange={(e) => setMessage(e.target.value)} 
              className = {style.inputfield}
            />
          </div>
          <button type = "submit" onClick={(e)=>{handleSubmit(e)}} className = {style.submitForm}>Submit</button>
        </form>
        {submitted && <p>Message Sent</p>}
      </div>
  )
}

export default Form
