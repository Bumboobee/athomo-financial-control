import React, { useState, useEffect } from "react";
import Form from "./styles/components/form";
import Header from "./styles/components/header";
import Resume from "./styles/components/resume";
import GlobalStyle from "./styles/global";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

    if (total === '0.00') {
      const tableTr = document.createElement("tr");
      tableTr.className = "without-total";

      const tableTd = document.createElement("td");
      tableTr.appendChild(tableTd);

      const textTd = document.createTextNode("Sem novas entradas ou saídas!");
      tableTd.appendChild(textTd);

      document.getElementById("main-table").appendChild(tableTr);      
    } else { 
      const elements = document.getElementsByClassName("without-total");
      while (elements.length > 0) elements[0].remove();
    }
  }, [transactionsList]);  

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  }

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      <GlobalStyle />
    </>
  );
};


export default App;
