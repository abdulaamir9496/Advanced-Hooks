import React from 'react'

const Count = ({text, count}) => {
    console.log(`Renderind ${text}`)
    return (
        <>
            <div>{text} - {count}</div>
        </>
    )
}

// export default Count
export default React.memo(Count)