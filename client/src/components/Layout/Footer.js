import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p className="text-center mt-3 ">
        <Link to="/about">Về chúng tôi</Link>|
        <Link to="/contact"> Liên hệ</Link>|<Link to="/policy">Bảo Mật</Link>
      </p>
    </div>
  );
};

export default Footer;
