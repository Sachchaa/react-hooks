import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
        console.log('Resource Changed')
    }, [resourceType])

    return (
        <>
            <div>
                <button onClick={() => setResourceType('Posts')}>Posts</button>
                <button onClick={() => setResourceType('Users')}>Users</button>
                <button onClick={() => setResourceType('Comments')}>Comments</button>
            </div>

        </>
    );
}

export default UseEffectHook
