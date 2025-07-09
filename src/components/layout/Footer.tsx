import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="footer  sm:footer-horizontal bg-base-300 text-base-content p-10 ">
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Testimony</a>
          {/* <a className="link link-hover">Press kit</a> */}
        </nav>
        <nav>
          <h6 className="footer-title">Kiddies Community</h6>
          <a className="link link-hover">Support a Child </a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Parenting Tips </a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <div className="grid grid-flow-col gap-4 text-4xl mb-4">
            {/* Colored Icons */}
            <FaFacebook color="#1877F2" /> {/* Facebook Blue */}
            <FaInstagram color="#E1306C" /> {/* Instagram Pink */}
            <FaTiktok color="#000000" /> {/* TikTok Black */}
          </div>
          <a className="link link-hover flex items-center">
            <span>
              <FaWhatsapp color="#25D366" className="text-3xl" />
            </span>
            Whatsapp: + 234 903 591 8866
          </a>
          <a className="link link-hover  flex items-center">
            <span>
              <FaPhoneAlt color="#34B7F1" className="text-3xl" />
            </span>
            Phone: + 234 903 591 8866
          </a>
        </nav>
      </footer>
    </div>
  );
}
