import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">based out of</span>Bellevue, Washington, 98004.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">email</span>{" "}
        <a href="mailto:steve@mail.com">danila.vpopov@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

    </>
  );
};

export default Address;
