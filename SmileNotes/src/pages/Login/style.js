import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    
`

export const ContainerMid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 50%;
    border-radius: 15px;
    color: #FFF;
    background: linear-gradient(180deg, #0f0f0f 0%, rgba(95, 85, 0, 0.91446) 37.19%, rgba(255, 199, 0, 0.77) 100%);
    
    img {
        width: 15%;
    }
    
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: yellow;
        height: 10%;
        width: 10%;
        border-radius: 8px;
        border: 1px solid black;
        color: black;
        font-weight: bolder;
    }
`