import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px #cccccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    gap: 10px;

    @media (max-width: 750px) {
        display: grid;
    }

    svg {
        padding-top: 2.5px;
        align-items: center;
        font-size: 17px;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    opacity: .7;
`;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #cccccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;

    input {
        margin-left: 20px;
        accent-color: #000000;
        margin-top: 0;
        cursor: pointer;
    }
`;

export const Button = styled.button`
    padding: 2px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
    background-color: teal;
`;