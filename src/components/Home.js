import React from 'react'
import Button from './Button'

function Home() {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center min-h">
            <Button value="Sign Up" path="/signup" />
            <Button value="Verify Email" path="/verifyemail" />
        </div>
    )
}

export default Home
