import React from "react";
import Layout from "./../components/Layout/Layout";
import { FaGithub } from "react-icons/fa";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus my-5">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">LIÊN HỆ TÔI</h1>
          <p className="mt-3">
            <BiMailSend /> :masdasl60@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 09-14581176
          </p>
          <p className="mt-3">
            <FaGithub /> :
            <a
              href="https://github.com/masdasl"
              className="text-decoration-none link-info"
            >
              https://github.com/masdasl
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
