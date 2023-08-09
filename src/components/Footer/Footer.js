import React from "react";

const Footer = () => {
  return (
    <footer className="footer grid-col-2 p-10 bg-black text-neutral-content">
      <div>
        <span className="footer-title font-semibold text-2xl">HirePath</span>
        <p>
          HirePath is a leading job finding agency committed to connecting{" "}
          <br /> talented professionals with top employers. <br /> Our mission
          is to help individuals find their dream jobs <br /> and assist
          companies in finding the right candidates <br /> for their open
          positions.
        </p>
        <img src="assets/Icons/Group 9969.png" alt="logos" />
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Work</a>
        <a className="link link-hover">Latest News</a>
        <a className="link link-hover">Careers</a>
      </div>
      <div>
        <span className="footer-title">Product</span>
        <a className="link link-hover">Prototype</a>
        <a className="link link-hover">Plans & Pricing</a>
        <a className="link link-hover">Customers</a>
        <a className="link link-hover">Integrations</a>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <a className="link link-hover">Help Desk</a>
        <a className="link link-hover">Sales</a>
        <a className="link link-hover">Become a Partner</a>
        <a className="link link-hover">Developer</a>
      </div>
      <div>
        <span className="footer-title">Contacts</span>
        <a className="link link-hover">524 Broadway, NYC</a>
        <a className="link link-hover">+1777 - 987 - 5570</a>
      </div>
    </footer>
  );
};

export default Footer;
