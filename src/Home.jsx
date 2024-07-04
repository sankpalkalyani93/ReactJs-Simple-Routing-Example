import React from "react";

const Home = () => {
    
    const num = 10;
    let sum = num * 10;

    const addition = (n1, n2) => {
        return n1 + n2;
    }

    const subtraction = (x) => {
        return num - x;
    }

    return (
        <div>
            <h2>This is Home Component</h2>
            <p>Result of Multiplication : {sum}</p>
            <p>Result of addition : {addition(10, 10)}</p>
            <p>Result of subtraction : {subtraction(5)}</p>
        </div>
    );
}

export default Home;