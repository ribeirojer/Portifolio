import React from 'react'

type Props = {}

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