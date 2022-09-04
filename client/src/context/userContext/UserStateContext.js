import React, { useState } from 'react'
import userContext from './userContext'

const UserStateContext = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    return (
        <userContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{props.children}</userContext.Provider>
    )
}

export default UserStateContext