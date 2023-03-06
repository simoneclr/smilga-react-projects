import React from 'react'
import { useAppContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {

  const {closeSubmenu} = useAppContext()

  return (
    <section onMouseOver={closeSubmenu} className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Payments infrastructure for the internet
          </h1>

          <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
          </p>

          <button className="btn">
            Start now
          </button>
        </article>

        <article className="hero-images">
          <img src={phoneImg} alt="A phone" className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
