import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <section id="home">        
        <div id="home-text">
            <h1 id="nomeh1">Eduardo Ribeiro</h1>
            <h2 id="nomeh2">Desenvolvedor Front-end</h2>
            <div id="redessociais">
                <a target="_blank" href="https://www.instagram.com/eduardojer7/"><i className='bx bxl-instagram'></i></a>
                <a target="_blank" href="https://github.com/ribeirojer"><i className='bx bxl-github'></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/jos%C3%A9-eduardo-ribeiro-498226227/"><i className='bx bxl-linkedin'></i></a>
            </div>
        </div>
        <div id="fotoeduardo" className="image-container">
            <img src="assets/IMG-20220305-WA0010.jpg" alt="imagem de bueno brandao"/>
        </div>
    </section>
  )
}

export default Home;