import React from 'react'
import Button from './Button'

import v1 from "../img/logo 2/v1.png"
import v2 from "../img/logo 2/v2.png"
import v3 from "../img/logo 2/v3.png"
import v4 from "../img/logo 2/v4.png"
import v5 from "../img/logo 2/v5.png"
import v6 from "../img/logo 2/v6.png"
import v7 from "../img/logo 2/v7.png"
import v8 from "../img/logo 2/v8.png"
import v9 from "../img/logo 2/v9.png"


function Topbar({ brand }) {
  let b1_imgs = [v1,v2,v3,v4]
  let b2_imgs = [v6,v7,v8,v9]
  return (
    <div className="d-flex justify-content-between py-4 align-items-center">
      <div className="app-brand align-items-end d-flex">
        {b1_imgs.map((img, index) => (
          <img src={img} alt="" key={index} />
        ))}
        <img className="app-trans" src={v5} alt=""/>
        {b2_imgs.map((img, index) => (
          <img src={img} alt="" key={index} />
        ))}
      </div>
      <div className="d-flex align-items-center font-white">
        <span className="mr-2 f-600">Already a user?</span>
        <Button value="Login" />
      </div>
    </div>
  );
}

export default Topbar
