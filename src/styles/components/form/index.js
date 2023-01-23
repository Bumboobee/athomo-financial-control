import React, {useState} from 'react';
import Grid from '../grid';
import * as C from './style';
import {
    FaPlusCircle,
} from "react-icons/fa";

import Swal from "sweetalert2";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            Swal.fire({
                title: 'Informe a descrição e o valor!',
                text: "Ambos os campos devem estar preenchidos!",
                type: 'warning',
                icon: 'warning',
                showCancelButton: false,
                confirmButtonColor: 'teal',
                cancelButtonColor: 'grey',
                confirmButtonText: 'OK',
                closeModal: 'false',
                didClose: (e) => {
                    if(!desc) {
                        document.getElementById("desc").focus();
                    }
                    else {
                        document.getElementById("val").focus();
                    } 
                },
            })
            return;

        } else if (amount < 1) {
            Swal.fire({
                title: 'O valor tem de ser positivo!',
                text: "Vou adicionar valor negativo, é?",
                type: 'warning',
                icon: 'warning',
                showCancelButton: false,
                confirmButtonColor: 'teal',
                cancelButtonColor: 'grey',
                confirmButtonText: 'OK',
                didClose: (e) => {
                    document.getElementById("val").value = "";
                    document.getElementById("val").focus();
                },
            })    
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense, 
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} id="desc" />
                </C.InputContent>

                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        id="val"
                    />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange = {() => setExpense(!isExpense)}    
                    />  
                    <C.Label htmlFor='rIncome'>Entrada</C.Label> 

                    <C.Input
                        type="radio"
                        id = "rExpenses"
                        name = "group1"
                        onChange = {() => setExpense(!isExpense)}
                    />

                    <C.Label htmlFor='rExpenses'>Saída</C.Label>
                </C.RadioGroup>
                
                <C.Button onClick={handleSave}><FaPlusCircle/> ADICIONAR</C.Button>
            </C.Container>

            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    );
};

export default Form;