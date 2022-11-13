import React from 'react'
import styled from 'styled-components';

type Props = {}

const Wrapper = styled.header`
    #segundasecao {
        height: 100vh;
        background-image: url(assets/rrrainbow.svg);
        background-size: cover;
        background-attachment: fixed;
        background-color: var(--cards-bg);

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #segundasecao h1 {
        display: flex;
        justify-content: center;
        color: var(--home-color);
    }
    .cards {
        display: flex;
        justify-content: center;
        padding: 0 6rem;    
        color: var(--home-color);
    }
    .card {
        margin: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
        width: 27rem;
        height: 17rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
    .card img {
        width: 100%;
        height: 90%;
        border-radius: 0.5rem;
    }
    .card h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5rem 0 0.5rem 0;
    }
    .separadordocard {
        margin: 1.5rem 0 0 0;
    }
    .card i {
        font-size: 2rem;
    }
    .card i:hover {
        color: var(--home-icones);
    }
    .card .card-interno {
        padding: 0.8rem;
        display: none;
    } 
    .card:hover img , .card:hover .titulo-card {
        animation: fade-out 0.5s ease-out both;
    }
    .card:hover .card-interno {
        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        display: block;
        position: absolute;
        top: 0;
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .botao {
        background-color: var(--home-color);
        padding: 0.5rem 1rem;
        margin: 2rem 1rem 0 0;
        border-radius: 71% 29% 28% 72% / 45% 38% 62% 55%;
        border: 2px solid var(--cards-bg);
        color: #ffffff;
        cursor: pointer;
    }
    .botao:hover {
        background-color: var(--home-foto-hover);
    }
    .botao:focus {
        outline: 2px solid var(--home-color);
    }
    .displayNone {
        display: none;
    }
`;

const Projects = (props: Props) => {
    
    function selecionaCard(id: any): React.MouseEventHandler<HTMLButtonElement> | undefined {
        throw new Error('Function not implemented.');
    }

    return (
        <section id="segundasecao">
            <h1>Portifólio</h1>
            <div className="cards">
                <div id="card-okay" className="card">
                    <img src="assets/imagem-okay-movelaria.png" alt="okaymovelaria"/>
                    <h3 className="titulo-card">Okay Movelaria</h3>
                    <div className="card-interno">
                        <div>
                            <h3>Okay Movelaria</h3>
                            <p>Site desenvolvido para uma empresa de design de interiores, localizada em Jacareí-SP.</p>
                        </div>
                        <div>
                            <p className="separadordocard">Tecnologias utilizadas:</p>
                            <i title="HTML 5" className='bx bxl-html5' ></i>
                            <i title="CSS 3" className='bx bxl-css3' ></i>
                            <i title="Javascript" className='bx bxl-javascript' ></i>
                            <p>Acesse:</p>
                            <a href="https://okaymovelaria.com" target="_blank"><i title="link" className='bx bx-link'></i></a>
                            <a href="https://github.com/ribeirojer/OkayMovelaria" target="_blank"><i title="Github" className='bx bxl-github'></i></a>
                        </div>
                    </div>
                </div>
                <div id="card-wissen" className="card displayNone">
                    <img src="assets/imagem-wissen.png" alt="okaymovelaria"/>
                    <h3 className="titulo-card">Wissen</h3>
                    <div className="card-interno">
                        <div>
                            <h3>Wissen</h3>
                            <p className="textowissen">Círculo de áreas do conhecimento, contém um easter egg! site inspirado no <a target="_blanck" href="https://www.youtube.com/watch?v=ohyai6GIRZg&ab_channel=DomainofScience">vídeo</a> do canal: Domain of Sciense no youtube.</p>
                        </div>
                        <div>
                            <p>Tecnologias utilizadas:</p>
                            <i title="HTML 5" className='bx bxl-html5' ></i>
                            <i title="CSS 3" className='bx bxl-css3' ></i>
                            <i title="Javascript" className='bx bxl-javascript' ></i>
                            <p>Acesse:</p>
                            <a href="Wissen/index.html" target="_blank"><i title="link" className='bx bx-link'></i></a>
                            <a href="https://github.com/ribeirojer/Wissen" target="_blank"><i title="Github" className='bx bxl-github'></i></a>
                        </div>
                    </div>
                </div>
                <div id="card-fezoque" className="card displayNone">
                    <img src="assets/imagem-fez-oque.png" alt="imagem-fezoque?"/>
                    <h3 className="titulo-card">Fez Oque?</h3>
                    <div className="card-interno">
                        <div>
                            <h3>Fez Oque?</h3>
                            <p>Obtenha informações sobre um deputado federal ou uma lista de deputados de cada partido. Projeto pessoal que fiz para aprender a acessar uma API.</p>
                        </div>
                        <div>
                            <p>Tecnologias utilizadas:</p>
                            <i title="HTML 5" className='bx bxl-html5' ></i>
                            <i title="CSS 3" className='bx bxl-css3' ></i>
                            <i title="Javascript" className='bx bxl-javascript' ></i>
                            <i title="Tailwind CSS" className='bx bxl-tailwind-css' ></i>
                            <p>Acesse:</p>
                            <a href="FezOque/index.html" target="_blank"><i title="link" className='bx bx-link'></i></a>
                            <a href="https://github.com/ribeirojer/FezOque" target="_blank"><i title="Github" className='bx bxl-github'></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={selecionaCard("btn-1")} id="btn-1" className="botao">1</button>
                <button onClick={selecionaCard("btn-2")} id="btn-2" className="botao">2</button>
                <button onClick={selecionaCard("btn-3")} id="btn-3" className="botao">3</button>
            </div>
        </section>
    )
}

export default Projects;