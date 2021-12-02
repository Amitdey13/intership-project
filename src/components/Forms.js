import React from 'react'
import Button from './Button';
import {AiFillEye} from 'react-icons/ai'



function TextInput({placeholder}) {
    return(<input className="text-input col-12" placeholder={placeholder || "input"} />)
}

function PasswordInput({placeholder}) {
    return (
      <div className="text-input">
        <input className="col-9" type="password" placeholder={placeholder || "input"} />
        <div className="col-3 text-center font-grey"><AiFillEye className="pointer  " /></div>
      </div>
    );
}

function SignupForms() {
    return (
      <div className="col-5 pt-5 form-shadow">
        <div className="row justify-content-center pt-2 ">
          Create an Account
        </div>
        <div className="mx-5 px-5 col-9 text-start pt-4 f-1">
          <TextInput placeholder="Enter Mobile" />
        </div>
        <div className="mx-5 px-5 col-9 text-start pt-4 f-1">
          <TextInput placeholder="Enter Email" />
        </div>
        <div className="mx-5 px-5 col-9 text-start pt-4 f-1">
          <PasswordInput placeholder="Enter Password" />
        </div>
        <div className="mx-5 px-5 col-9 text-start pt-4 f-1">
          <PasswordInput placeholder="Confirm Password" />
        </div>
            <div className="d-flex align-items-center text-start mx-5 px-5 col-12 font-grey pt-4 f-4">
                <input type="checkbox" />
          <div className="mx-2">I hearby confirm that I am above 18 years old.</div>
        </div>
        <div className="mx-5 px-5 col-6 pt-2 ">
          <Button value="Verify Otp" path="/verifyemail" />
        </div>
        <div className="text-start mx-5 px-5 col-9 font-grey pt-3 f-4">
          Didn’t receive the code? By creating this account, you agree to our{" "}
          <span className="pb-1 app-blue">Privacy Policy</span> and{" "}
          <span className="pb-1 app-blue">Terms of Use</span>
        </div>
      </div>
    );
}

function VerifyForms() {
  return (
    <div className="col-5 pt-4 form-shadow">
      <div className="row mx-5 px-5 pt-2 f-3 f-900">&#129120;</div>
      <div className="row mx-5 px-5 pt-2">Verify your email</div>
      <div className="mx-5 px-5 col-9 text-start font-grey pt-3 f-1">
        A verification code has been sent to abc@gmail.com
      </div>
      <div className="mx-5 px-5 col-9 text-start pt-4 f-1">
        Verification Code
      </div>
      <div className="mx-5 px-5 col-9 text-start pt-4 f-1">
        <TextInput placeholder="6 digit verification code" />
      </div>
      <div className="text-start mx-5 px-5 col-9 font-grey pt-3 f-1">
        Didn’t receive the code? <span className="pb-1 app-blue">Resend</span>
      </div>
      <div className="row col-7 mx-5 mt-5 px-5 pt-2">
        <Button value="Verify Email" />
      </div>
    </div>
  );
}

export {SignupForms, VerifyForms}
