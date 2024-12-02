import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

const Parent = () => {
    const [age, setAge] = useState(28)
    const [salary, setSalary] = useState(80000)

    //Without useCallback function
    // const IncrementAge = () => {
    //     setAge(age + 1)
    // }

    //using useCallback function, making age increment dependent only specific to age
    const IncrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    //Without useCallback function
    // const IncrementSalary = () => {
    //     setSalary(salary + 5000)
    // }

    //using useCallback function, making salary increment dependent only specific to salary
    const IncrementSalary = useCallback(() => {
        setSalary(salary + 5000)
    }, [salary])

    return (    
        <>
            <div>
                <Title />
                <Count text='Age' count={age}/>
                <Button handleClick={IncrementAge}>Increment Age</Button>
                <Count text='Salary'count={salary}/>
                <Button handleClick={IncrementSalary}>Increment Salary</Button>
            </div>
        </>
    )
}

export default Parent

//useCallback is used to contain a complete function, completely cache's the complete function
//When I click on Increment Age button or when I click on Increment salary button,
//All the other components get re-rendered in console.
//I don't want unnecessary to render other components when It is not even clicked.
//What if I use many components and I don't want to render many components at once, until I have clicked them to render.
//Which will create a performance issue. That will make our apps slow down.
//Which is not good for user experience and react application
//So how can I manage this issue ?
//1st thing we can use here is react.memo this is not a useMemo hook.
//react.memo is a property of a react. This memo is memoization. 
//What is this memoization ?
//Whenever some complex computing/ calculations happens it stores it somewhere. 
//To get the value of that only instead of recalculating same value. Like in cache
//If results change then we have to recalculate the value. This is called memoization
//Even after using React.memo still we see all other functions are getting invocked, 
//So here we use useCallback hook for performance optimization
