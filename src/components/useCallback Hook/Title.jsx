import React from 'react'

const Title = () => {
    console.log('Rendering Title')
    return (
        <>
            <h1>useCallback Hook Title</h1>
        </>
    )
}

// export default Title
export default React.memo(Title)
