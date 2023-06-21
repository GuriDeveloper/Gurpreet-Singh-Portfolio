import React from 'react'
import './portfolio.css'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          
          <h3>Go Food</h3>
          <p>A Food Delevering Web App .</p>
          <a href='https://github.com/gsbedi90' target='_blank' className='btn'>Github</a>
        </article>

        <article className='portfolio__item'>
          
          <h3>E-commerece</h3>
          <p>A E-commerece Store</p>
          <a href='https://github.com/gsbedi90' target='_blank' className='btn'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
