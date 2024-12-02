import { useRef, useState } from "react"


const BasicElement = () => {
    
    const [name, setName] = useState('Aamir')

    // const refElement = useRef();
    // console.log(refElement)    //It shows current: undefined in console.

    // const refElement = useRef('');  //We can set up a reference over here...
    // console.log(refElement)  //It shows current: '' in console (empty string).

    const refElement = useRef('')
    console.log(refElement)

    const clear = () => {
        setName('')
        //focus will be always present in the current input field element.
        //Whenever I clear the focus will shift back to the reference element(refElement)
        refElement.current.focus()
    }

    //Changing color of the input field element's value
    const changeColor = () => {
        refElement.current.style.color = 'Green'  //style.color is the DOM property
    }

    return (
        <>
            <h1>useRef Hook</h1>
            <div>
                {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> */}
                {/* If I want to stay my focus in input field itself. What can I do ? */}
                {/* I can use my input field as a point of reference. for that we have ref attribute */}
                <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={clear}>Clear</button>
                <button onClick={changeColor}>Change Color</button>
            </div>
        </>
    )
}

export default BasicElement


//useRef hook will give access to all the DOM properties
//It also gives object of that current property