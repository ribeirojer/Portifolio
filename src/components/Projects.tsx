import background from '../assets/rrrainbow.svg'
import Imagem01 from '../assets/imagem-okay-movelaria.png'
import Imagem02 from '../assets/imagem-wissen.png'
import Imagem03 from '../assets/imagem-fez-oque.png'
import Imagem04 from '../assets/imagem-warren.png'
import Imagem05 from '../assets/imagem-challenge-promobit.png'
import Imagem06 from '../assets/imagem-coderockr.png'

import styled from 'styled-components';
import { useState } from 'react';

type Props = {}

const Wrapper = styled.header`
    height: 100vh;
    color: ${props => props.theme.mainTextColor};
    background: url(${background});
    background-color: ${props => props.theme.mainBg};
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        display: flex;
        justify-content: center;
        font-size: 2rem;
        padding: 3rem 0 1rem 0;
        line-height: 2.4rem;
        font-weight: 500;
    }
    .cards {
        display: flex;
        justify-content: center;
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
        color: ${props => props.theme.mainTextColor};
        background-color: ${props => props.theme.mainBg};
        padding: 0.5rem 1rem;
        margin: 2rem 1rem 0 0;
        border-radius: 71% 29% 28% 72% / 45% 38% 62% 55%;
        border: 2px solid ${props => props.theme.mainTextColor};
        cursor: pointer;
    }
    .botao:hover {
        background-color: ${props => props.theme.iconsHover};
    }
    .botao:focus {
        outline: 2px solid ${props => props.theme.mainBg};
    }
`;

const Projects = ({theme}: any) => {
    
    const [show, setShow] = useState<number>(0);

    return (
        <Wrapper id="segundasecao" theme={theme}>
            <h1>Portifólio</h1>
            <div className="cards">
                {show===0 && <div id="card-okay" className="card">
                    <img src={Imagem01} alt="okaymovelaria"/>
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
                </div>}
                {show===1 && <div id="card-wissen" className="card">
                    <img src={Imagem02} alt="okaymovelaria"/>
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
                </div>}
                {show===2 && <div id="card-fezoque" className="card">
                    <img src={Imagem03} alt="imagem-fezoque?"/>
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
                </div>}
                {show===3 && <div id="card-warren" className="card displayNone">
                    <img src={Imagem04} alt="imagem-fezoque?"/>
                    <h3 className="titulo-card">Challenge Warren Web</h3>
                    <div className="card-interno">
                        <div>
                            <h3>Challenge Warren Web</h3>
                            <p>Minha solução ao desafio Warren - web, o design veio da propaganda da Warren Edu e do material do desafio, projeto mais complexo que fiz até o momento.</p>
                        </div>
                        <div>
                            <p>Tecnologias utilizadas:</p>
                            <i title="HTML 5" className='bx bxl-html5' ></i>
                            <i title="CSS 3" className='bx bxl-css3' ></i>
                            <i title="Javascript" className='bx bxl-javascript' ></i>
                            <i title="React" className='bx bxl-react' ></i>
                            <p>Acesse:</p>
                            <a href="https://c-warren.vercel.app/" target="_blank"><i title="link" className='bx bx-link'></i></a>
                            <a href="https://github.com/ribeirojer/challenge-warren" target="_blank"><i title="Github" className='bx bxl-github'></i></a>
                        </div>
                    </div>
                </div>}
                {show===4 && <div id="card-promobit" className="card displayNone">
                    <img src={Imagem05} alt="imagem-challenge-promobit"/>
                    <h3 className="titulo-card">Challenge Promobit</h3>
                    <div className="card-interno">
                        <div>
                            <h3>Challenge Promobit</h3>
                            <p>Minha implementação ao desafio da empresa Promobit, utilizando React, React-router-dom e Styled Components.</p>
                        </div>
                        <div>
                            <p>Tecnologias utilizadas:</p>
                            <i title="HTML 5" className='bx bxl-html5' ></i>
                            <i title="CSS 3" className='bx bxl-css3' ></i>
                            <i title="Javascript" className='bx bxl-javascript' ></i>
                            <i title="React" className='bx bxl-react' ></i>
                            <p>Acesse:</p>
                            <a href="https://challenge-promobit.vercel.app/" target="_blank"><i title="link" className='bx bx-link'></i></a>
                            <a href="https://github.com/ribeirojer/Challenge-Promobit" target="_blank"><i title="Github" className='bx bxl-github'></i></a>
                        </div>
                    </div>
                </div>}
                {show===5 && <div id="card-coderockr" className="card displayNone">
                    <img src={Imagem06} alt="imagem-challenge-promobit"/>
                    <h3 className="titulo-card">Challenge Coderockr</h3>
                    <div className="card-interno">
                        <div>
                            <h3>Challenge Coderockr</h3>
                            <p>Desafio da empresa Coderockr, feito ouvindo muita Legião Urbana e utilizando React, React-router-dom e Styled Components.</p>
                        </div>
                        <div>
                            <p>Tecnologias utilizadas:</p>
                            <i title="HTML 5" className='bx bxl-html5' ></i>
                            <i title="CSS 3" className='bx bxl-css3' ></i>
                            <i title="Javascript" className='bx bxl-javascript' ></i>
                            <i title="React" className='bx bxl-react' ></i>
                            <p>Acesse:</p>
                            <a href="https://challenge-coderockr.vercel.app/" target="_blank"><i title="link" className='bx bx-link'></i></a>
                            <a href="https://github.com/ribeirojer/Challenge-Coderockr" target="_blank"><i title="Github" className='bx bxl-github'></i></a>
                        </div>
                    </div>
                </div>}
            </div>
            <div>
                <button onClick={()=>setShow(0)} className="botao">1</button>
                <button onClick={()=>setShow(1)} className="botao">2</button>
                <button onClick={()=>setShow(2)} className="botao">3</button>
                <button onClick={()=>setShow(3)} className="botao">4</button>
                <button onClick={()=>setShow(4)} className="botao">5</button>
                <button onClick={()=>setShow(5)} className="botao">6</button>
            </div>
        </Wrapper>
    )
}

export default Projects;