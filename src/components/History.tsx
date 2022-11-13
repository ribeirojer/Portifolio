import React from 'react'

type Props = {}

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