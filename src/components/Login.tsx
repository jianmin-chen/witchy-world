import { useState, useEffect } from 'react'

export default function Login() {
  const [email, useEmail] = useState('')
  const [code, useCode] = useState('')
  const [step, useStep] = useState(0)

  useEffect(() => {}, [step])

  return (
    <>
      <p>
        We'll send a one time password to your email so your game stays saved.
      </p>
      <form
        onSubmit={event => {
          event.preventDefault()
          if (!step) {
            // Email
            const email = event.target.email.value
            if (email) {
            }
          }
        }}>
        <input type="email" name="email" required placeholder="Email..." />
        <button type="submit">Send me a password</button>
      </form>
    </>
  )
}
