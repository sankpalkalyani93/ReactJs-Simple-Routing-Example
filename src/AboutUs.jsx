import React, { useState } from "react";

const AboutUs = () => {

    const [num, setNum] = useState(0);
    const [message, setMessage] = useState('');

    const evenOdd = (event) => {

        const newNum = (Number(event.target.value));
        setNum(newNum);
        if(newNum % 2 === 0){
            setMessage(`${newNum} is even number`);
        }
        else{
            setMessage(`${newNum} is odd number`);
        }
    }

    return (
        <div>
            <h2>This is About Us Component</h2>
            <p>
                <input type="number" value={num} onChange={evenOdd} placeholder="Enter value for num"/>
            </p>
            <p>{message}</p>
        </div>
    );
}

export default AboutUs;