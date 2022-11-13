import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    color: var(--home-icones); 

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    li {
        margin: 0.5rem 0;
        list-style-type: none;
    }
    i {
        font-size: 1.5rem;
        padding: 1rem;
        border-radius: 30% 70% 70% 30% / 30% 50% 50% 70%;
        border: dashed 2px var(--home-color);
        color: var(--home-color);
    }
    i:hover {
        border: solid 2px var(--home-color);
    }
    .visualizando {
        background-color: #2F2504;
        color: var(--home-icones);
        border: dashed 2px #2F2504;
    }
    button {
        border-radius: 0.8rem;
        border: dashed 2px #594E36;
        background-color: transparent;
    }
    button img {    
        height: 2rem;
        padding: 0.5rem;
    }
    .checkbox {
        opacity: 0;
        position: absolute;
    }
    .label {
        width: 3.5rem;
        height: 1.5rem;
        background-color: #111;
        display: flex;
        border-radius: 1.5rem;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        margin-top: 0.5rem;
        position: relative;
    }
    .ball {
        width: 2rem;
        height: 2rem;
        background-color: white;
        position: absolute;
        top: 0.3rem;
        left: 0.2rem;
        border-radius: 50%;
        transition: transform 0.2s linear;
    }
    .checkbox:checked + .label .ball{
        transform: translateX(2rem);
    }
    .fa-moon {
        color: pink;
        border: none;
        padding: 0;
    }
    .fa-sun {
        color: yellow;
        border: none;
        padding: 0;
    }
    .fa-sun:hover {
        border: none;
    }
    .fa-moon:hover {
        border: none;
    }
`;

type Props = {}

const Header = (props: Props) => {
    
    function myFun(): React.MouseEventHandler<HTMLInputElement> | undefined {
        throw new Error('Function not implemented.');
    }

    return (
        <Wrapper>
            <ul>
                <li>
                    <a href="#home">
                        <i className='bx bx-home visualizando'></i>
                    </a>
                </li>
                <li>
                    <a href="#primeirasecao">
                        <i className='bx bx-body'></i>
                    </a>
                </li>
                <li><a href="#segundasecao">
                    <i className='bx bx-desktop'></i>
                    </a></li>
                <li><a href="#footer">
                    <i className='bx bx-id-card' ></i>
                    </a></li>
                <div>
                    <input onClick={myFun} type="checkbox" className="checkbox" id="checkbox"></input>
                    <label htmlFor="checkbox" className="label">
                    <i className="fas fa-moon"></i>
                    <i className='fas fa-sun'></i>
                    <div className='ball'></div>
                    </label>
                </div>
            </ul>
        </Wrapper>
    )
}

export default Header;
