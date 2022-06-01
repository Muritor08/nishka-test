import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function PrivateRoute({
   component:Component,
    ...rest
}) {
    const { token } = useContext(AppContext)

    return (
        <Route
         {...rest}
        render={
            props=>token?(<Component
                {...props}
            />):(
                <Redirect to={{pathname:'/login',state:{from:props.location}}}></Redirect>
            )
        }></Route>
    )
}

export default PrivateRoute
