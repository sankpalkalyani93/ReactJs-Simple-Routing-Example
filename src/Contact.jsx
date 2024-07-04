import React, { useState } from "react";

const Contact = () => {
    const [sum, setSum] = useState(0);

    const displaySummation = () => {
        let total = 0;
        for(let i = 1; i <= 10; i++){
            total = total + i;
        }

        setSum(total);
    }

    return (
        <div>
            <h2>This is Contact Component</h2>
            <p><button onClick={displaySummation}>Summation</button></p>
            <p>Summation of fist n numbers : {sum}</p>
        </div>
    );
}

export default Contact;