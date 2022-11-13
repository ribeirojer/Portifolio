import Foto from '../assets/IMG-20220305-WA0010.jpg'
import styled from 'styled-components';

type Props = {}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme ? "green" : "grey"};
  color: ${props => props.theme ? "yellow" : "blue"};

  h1 {
    font-size: 4rem;
    line-height: 4.8rem;
    color: var(--home-color);
    background-color: var(--home-nome);
  }
  h2 {
    font-size: 2rem;
    line-height: 2.4rem;
    color: var(--home-color);
    background-color: var(--home-nome);
    padding-bottom: 0.5rem;
  }
  a {
    margin: 0 1rem 0 0;
  }
  a:link, a:visited, a:active {
    color: var(--home-color);
  }
  a:hover {
    color: var(--home-icones)
  }
  i {
    font-size: 3rem;
  }
  
  .image-container {
    position: relative;
    left: 133px;
    display: inline-block;
    line-height: 0;
    background-color: ${props => props.theme ? "grey" : "blue"};
  }
  .image-container:hover {
    background-color: ${props => props.theme ? "blue" : "grey"};
  }
  .image-container > img {
    filter:  brightness(70%) contrast(100%) saturate(100%) sepia(0%);
    mix-blend-mode: hard-light;
  }
  img {
    height: 100vh;
  }
`;

const Home = (props: Props) => {
  return (
    <Wrapper theme={false}>        
        <div>
            <h1>Eduardo Ribeiro</h1>
            <h2>Desenvolvedor Front-end</h2>
            <div className="redessociais">
                <a target="_blank" href="https://www.instagram.com/eduardojer7/"><i className='bx bxl-instagram'></i></a>
                <a target="_blank" href="https://github.com/ribeirojer"><i className='bx bxl-github'></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/jos%C3%A9-eduardo-ribeiro-498226227/"><i className='bx bxl-linkedin'></i></a>
            </div>
        </div>
        <div className="image-container">
            <img src={Foto} alt="imagem de bueno brandao"/>
        </div>
    </Wrapper>
  )
}

export default Home;