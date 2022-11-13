import React from 'react'
import styled from 'styled-components';

type Props = {}

const Wrapper = styled.header`
  #home h1, #home h2 {
    color: var(--home-color);
    background-color: var(--home-nome);
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2rem;
  }
  main section img {
    height: 100vh;
    position: relative;
  }
  #fotoeduardo {
    position: relative;
    left: 133px;
    transition: 0.5s;
  }
  .image-container {
    display: inline-block;
    position: relative;
    line-height: 0;
    background-color: var(--home-foto)
  }
  .image-container:hover {
    background-color: var(--home-foto-hover);
  }
  .image-container > img {
    filter:  brightness(70%) contrast(100%) saturate(100%) sepia(0%);
    mix-blend-mode: hard-light;
  }
  #redessociais {
    padding-top: 0.4rem;
    background-color: var(--home-nome);
  }
  main #home i {
    font-size: 3rem;
  }
  #home a {
    margin: 0 1rem 0 0;
  }
  main a:link, main a:visited, main a:active {
    color: var(--home-color);
  }
  main a:hover {
    color: var(--home-icones)
  }
  #home {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: var(--home-bg);
    background-image: url(assets/ssscribble.svg);
    background-attachment: fixed;
  }
`;

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