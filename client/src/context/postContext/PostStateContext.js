import React, { useState } from 'react'
import postContext from './postContext'

const PostStateContext = (props) => {
    const [data, setData] = useState([])
    return (
        <postContext.Provider value={{ data, setData }}>{props.children}</postContext.Provider>
    )
}

export default PostStateContext