import React from 'react'

// img imports
import b1 from "../img/brandImg/b1.png"
import b2 from "../img/brandImg/b2.png"
import b3 from "../img/brandImg/b3.png"
import b4 from "../img/brandImg/b4.png"
import b5 from "../img/brandImg/b5.png"
import b6 from "../img/brandImg/b6.png"
import b7 from "../img/brandImg/b7.png"
import b8 from "../img/brandImg/b8.png"
import b9 from "../img/brandImg/b9.png"
import b10 from "../img/brandImg/b10.png"
import b11 from "../img/brandImg/b11.png"
import b12 from "../img/brandImg/b12.png"

// brand secctions
function ImageRow({ imgs }) {
    return (<div className="row justify-content-center my-4 mx-4">
        {imgs.map((img,index)=><div className="col-2"><img className="b_size" src={img} key={index} alt="brand" /></div>)}
    </div>)
}

function SideDiv() {
    let brands = [[b1,b2,b3,b4],[b5,b6,b7,b8],[b9,b10,b11,b12]]
    return (
      <div className="col-7 mt-5">
        <div className="row justify-content-center f-600">
          Why choose SubSpace?
        </div>
        <p className="row justify-content-center font-grey my-2 f-2">
          2000+ businesses trust their payments with SubSpace
        </p>
        <div className="container my-5">
          {brands.map((imgs) => (
            <ImageRow imgs={imgs} />
          ))}
        </div>
        <div className="justify-content-center font-grey pt-3 my-5 f-1">
          Need help? We are just a click away. <span className="pb-1 app-contact">Contact Us</span>
        </div>
      </div>
    );
}

export default SideDiv
