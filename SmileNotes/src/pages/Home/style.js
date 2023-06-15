import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    
    
`

export const User = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    
    img {
        width: 50%;
        border-radius: 50%;
        margin-bottom: 20px;
    }
`

export const Tarefas = styled.div`
    background-color: #e3e3e2;
    height: 100%;
    width: 30%;
    border-radius: 9px;
    padding: 15px;
`

export const DivButton = styled.button`
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: yellow;
        width: 10%;
        font-size: 13px;
        font-weight: bold;
        padding: 5px;
        border-radius: 8px;
`