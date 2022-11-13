import React from 'react'
import styled from 'styled-components'

type Props = {}

const Wrapper = styled.header`
#primeirasecao {
    background-color: var(--segunda-bg);
    height: 100vh;
    color: var(--home-color);
}
#primeirasecao h1 {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    padding: 2rem 0 1rem 0;
}
#linha {
    padding: 6rem 0;
}
.flex-parent {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
}    
.input-flex-container {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 80vw;
	height: 100px;
	max-width: 1000px;
	position: relative;
	z-index: 0;
}
.input {
	width: 25px;
	height: 25px;
	background-color: var(--home-color);
	position: relative;
	border-radius: 50%;
}
.input:hover {
	cursor: pointer;
}
.input::before, .input::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--home-color);
    width: 4vw;
    height: 5px;
    max-width: 50px;
}
.input::before {
	left: calc(-4vw + 12.5px);
}
.input::after {
	right: calc(-4vw + 12.5px);
}
#nasci::before {
    left: 0;
}
.input.active {
	background-color: var(--home-color);
}
.input.active::before {
	background-color: var(--home-color);
}
.input.active::after {
	background-color: #AEB6BF;
}
.input.active span {
	font-weight: 700;
}
.input.active span::before {
	font-size: 13px;
}
.input.active span::after {
	font-size: 15px;
}
.input.active ~ .input, .input.active ~ .input::before, .input.active ~ .input::after {
	background-color: #AEB6BF;
}
.input img {
    display: none;
}
.input.active img {
    display: flex;
    position: relative;
    height: 5rem;
    bottom: 6rem;
    right: 1.7rem;
}
.input span {
	width: 1px;
	height: 1px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	visibility: hidden;
}
.input span::before, .input span::after {
	visibility: visible;
	position: absolute;
	left: 50%;
}
.input span::after {
	content: attr(data-year);
	top: 25px;
	transform: translateX(-50%);
	font-size: 14px;
}
.description-flex-container {
	width: 80vw;
    font-weight: 500;
    font-size: 1.3rem;
    margin-top: 4rem;
    max-width: 1000px;
}
.description-flex-container p {
    margin-top: 0;
	display: none;
}
.description-flex-container p.active {
	display: block;
}  
`;

const History = (props: Props) => {
    return (
        <section id="primeirasecao">
            <h1>Linha do tempo da minha vida</h1>
            <div id="linha">
                <div className="flex-parent">
                    <div className="input-flex-container">
                        <div id="nasci" className="input active">  
                            <img src="assets/nascimento.png" alt="nascimento"/>
                            <span data-year="1994"></span>
                        </div>
                        <div className="input">  
                            <img src="assets/estudante_1.png" alt="jovem sem oculos"/>
                            <span data-year="2011"></span>
                        </div>
                        <div className="input">  
                            <img src="assets/estudante_2.png" alt="jovem com oculos"/>
                            <span data-year="2012"></span>
                        </div>
                        <div className="input">  
                            <img src="assets/soldado.png" alt="soldado"/>
                            <span data-year="2013"></span>
                        </div>
                        <div className="input">  
                            <img src="assets/soldado.png" alt="soldado"/>
                            <span data-year="2014"></span>
                        </div>
                        <div className="input">                             
                            <img src="assets/soldado_primeira_classe.png" alt="soldado_primeira_classe"/>
                            <span data-year="2016"></span>
                        </div>
                        <div className="input">  
                            <img src="assets/soldado_primeira_classe.png" alt="soldado_primeira_classe"/>
                            <span data-year="2017"></span>
                        </div>
                        <div className="input">  
                            <img src="assets/cabo.png" alt="cabo"/>
                            <span data-year="2019"></span>
                        </div>
                        <div className="input">  
                            <img src="assets/atual.png" alt="civil"/>
                            <span data-year="2021"></span>
                        </div>
                        <div className="input">  
                            <img src="assets/man5.png" alt="civil de oculos"/>
                            <span data-year="2022"></span>
                        </div>
                    </div>
                    <div className="description-flex-container">
                        <p className="active">05/10/1994 às 23:59, nasceu José Eduardo Ribeiro!</p>
                        <p>Início do curso técnico em eletrônica, no Centro de Educação Profissional Hélio Augusto de Souza (CEPHAS).</p>
                        <p>Conclusão do curso técnico em eletrônica.<br/>Conclusão do ensino médio.</p>
                        <p>Serviço militar obrigatório.<br/>Curso de Formação de Soldados no Departamento de Ciência e Tecnologia Aeroespacial.</p>
                        <p>Engajamento no serviço militar.<br/>Auxiliar de serviços gerais no Centro de Preparação de Oficiais da Reserva da Aeronáutica de São José dos Campos(CPORAer-SJ).</p>
                        <p>Início do curso Bacharelado Interdisciplinar em Ciência e Tecnologia na Universidade Federal de São Paulo (UNIFESP).<br/>Promoção a Soldado de Primeira Classe.</p>
                        <p>Com a promoção a S1 passei a trabalhar como auxiliar administrativo no Centro de Computação da Aeronáutica de São José dos Campos (CCA-SJ).</p>
                        <p>Promoção a Cabo.<br/>Passei a trabalhar como auxiliar de manutenção de computadores, no Instituto de Estudos Avançados (IEAv).</p>
                        <p>Fim do meu tempo como militar.<br>Mudança para Joinville - SC.</br>Trabalho como auxiliar de produção, na Indústria Catarinense de Carroserias (Busscar).</p>
                        <p>Saída do trabalho na Busscar.<br/>Início da minha carreira como desenvolvedor Front-end!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History;