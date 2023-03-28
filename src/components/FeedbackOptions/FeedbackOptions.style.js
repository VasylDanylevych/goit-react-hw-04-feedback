import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 10px;
`;

export const Button = styled.button`
    font-size: 18px;
    background-color: #99FFFF;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    width: 100px;
    height: 35px;
    
    &:active {
        background-color: #9999FF;
    }
`;