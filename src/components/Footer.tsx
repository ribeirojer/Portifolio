import React from 'react'
import styled from 'styled-components';

type Props = {}

const Wrapper = styled.header`
    footer {
        background-color: var(--segunda-bg);
        color: var(--home-color);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .skills div {
        display: flex;
        justify-content: center;
    }
    footer .skills p {
        display: flex;
        justify-content: center;
        margin: 0.8rem 0;
        font-size: 1.5rem;
    }
    .hardskills i {
        margin: 0 0.4rem;
        font-size: 3rem;
    }
    .softskills i {
        margin: 0 0.8rem;
        font-size: 2rem;
    }
    .skills i:hover {
        color: var(--home-foto-hover);
    }
    .contatos {
        margin: 0 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .contatos img {
        height: 7rem;
    }
    .contatos div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .contatos h2 {
        color: #f0f0f0;
        text-shadow: 1px 1px #594E36;
        margin: 1rem 0 0.2rem 0;
    }
    .contatos p {
        margin: 0.5rem 0 0.2rem 0;
        font-weight: bold;
    }
    .contatos i {
        margin: 0 0.4rem;
        font-size: 3rem;
        color: var(--home-color);
    }
    .contatos i:hover {
        color: var(--home-foto-hover);
    }
    .presente {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .presente1, .presente2 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .presente1 {
        margin-bottom: 1rem;
    }
    .presente img {
        height: 10rem;
        animation: spin 10s infinite linear;
    }
    .presente p {
        font-weight: 500;
    }
    .presente p:nth-child(4) {
        margin: 0.8rem 0 0 0;
        font-weight: bold;
    }
`;

const Footer = (props: Props) => {
  return (
    <footer id="footer">
        <div className="skills">
            <p>Hard Skills:</p>
            <div className="hardskills">
                <i title="HTML 5" className='bx bxl-html5' ></i>
                <i title="CSS 3" className='bx bxl-css3' ></i>
                <i title="Javascript" className='bx bxl-javascript' ></i>
            </div>
            <div className="hardskills">
                <i title="Tailwind CSS" className='bx bxl-tailwind-css'></i>
                <i title="React" className='bx bxl-react' ></i>
                <i title="Node SJ" className='bx bxl-nodejs' ></i>
                </div>
            <p>Soft Skills:</p>
            <div className="softskills">
                <i title="Trabalho em equipe" className="fa-solid fa-people-group"></i>
                <i title="Disciplina" className="fa-solid fa-book-open-reader"></i>
                <i title="Mentalidade de dono" className="fa-solid fa-building-user"></i>
                <i title="Atenção a detalhes" className="fa-solid fa-glasses"></i>
            </div>
        </div>
        <div className="contatos">
            <img src="assets/man5.png" alt="civil de oculos"/>
            <div>
                <h2>Eduardo Ribeiro</h2>
                <h3>Desenvolvedor Front-end</h3>
                <p>Entre em contato: </p>
                <span>
                    <a target="_blank" rel="external" href="https://www.instagram.com/eduardojer7/"><i className='bx bxl-instagram'></i></a>
                    <a target="_blank" rel="external" href="https://www.linkedin.com/in/jos%C3%A9-eduardo-ribeiro-498226227/"><i className='bx bxl-linkedin'></i></a>
                    <a target="_blank" rel="external" href="https://api.whatsapp.com/send?phone=5512981580992&text=Olá,%20gostaria%20de%20conversar"><i className="fa-brands fa-whatsapp"></i></a>
                </span>
            </div>
        </div>
        <div className="presente">
            <div className="presente1">
                <img src="assets/tttwinkle.svg" alt="espiral girando"/>
                <p>Veja essa animação como presente 🙌</p>
                <p>Obrigado pela visita!</p>
            </div>
            <div className="presente2">
                <p>Créditos:</p>
                <p>imagens: 
                    <a href="https://www.flaticon.com/authors/victoruler" target="_blank">flaticon</a> e 
                    <a href="https://fffuel.co/" target="_blank">fffuel</a>.
                </p>
                <p>Ícones:
                    <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> e 
                    <a href="https://boxicons.com/" target="_blank">Boxicons</a>.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;