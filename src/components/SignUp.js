import React from 'react'

// custom  component imports
import {SignupForms} from './Forms'
import TopBar from './Topbar'
import SideDiv from './SideDiv'

function SignUp() {
    return (
        <div className="app-dark-bg min-h w-100">
            <div className="container">
                <TopBar brand="Subspace." />
                <div className="d-flex white-bg rounded">
                    <SignupForms />
                    <SideDiv />
                </div>
            </div>
        </div>
    )
}

export default SignUp
