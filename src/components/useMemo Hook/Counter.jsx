import { useMemo, useState } from "react";

const Counter = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const incrementOne = () => {
        setCountOne(countOne + 1);
    }

    const incrementTwo = () => {
        setCountTwo(countTwo + 1);
    }

    const isEven = useMemo(() => {
//can increase count while testing, after increment it slows down to shows another number.
        for (let i=0; i<100; i++);  
        return countOne % 2 === 0;
    },[countOne])

    return (
        <>
            <div>
                <div>
                    <button onClick={incrementOne}>Count One - {countOne}</button>
                    <span>{isEven ? 'Even' : 'Odd'}</span>
                </div>
                <br />
                <div>
                    <button onClick={incrementTwo}>Count Two - {countTwo}</button>
                </div>
            </div>
        </>
    )
}

export default Counter

//useMemo cache's just one return value.
