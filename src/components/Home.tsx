import photo from '../assets/IMG-20220305-WA0010.jpg'
import background from '../assets/ssscribble.svg'

import styled from 'styled-components';

type Props = {}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.mainTextColor};
  background: url(${background});
  background-color: ${props => props.theme.mainBg};
  background-size: cover;
  background-attachment: fixed;
  h1 {
    font-family: 'Poppins';
    font-size: 4rem;
    line-height: 4.8rem;
    font-weight: 700;
    background-color: ${props => props.theme.textHomeBg};
    padding-left: 0.5rem;
  }
  h2 {
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 500;
    padding-bottom: 0.5rem;
    background-color: ${props => props.theme.textHomeBg};
    padding-left: 0.5rem;
  }
  a:link, a:visited, a:active {
    color: ${props => props.theme.mainTextColor};
  }
  a:hover {
    color: ${props => props.theme.iconsHover};
  }
  i {
    padding: 0.5rem;
    margin: 0 0.5rem 0 0;
    background-color: ${props => props.theme.textHomeBg};
    font-size: 3rem;
  }  
  .image-container {
    position: relative;
    left: 133px;
    display: inline-block;
    line-height: 0;
    background-color: ${props => props.theme.homefoto};
  }
  .image-container:hover {
    background-color: ${props => props.theme.mainBg};
  }
  .image-container > img {
    filter:  brightness(70%) contrast(100%) saturate(100%) sepia(0%);
    mix-blend-mode: hard-light;
  }
  img {
    height: 100vh;
  }
`;

const Home = ({theme}: any) => {

  return (
    <Wrapper theme={theme}>
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
            <img src={photo} alt="imagem de bueno brandao"/>
        </div>
    </Wrapper>
  )
}

export default Home;