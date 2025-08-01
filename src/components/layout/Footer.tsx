import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="pb-8 lg:pb-0">
      <footer className="footer lg:justify-around sm:footer-horizontal bg-base-300 text-base-content p-10 ">
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
            <a
              href="https://web.facebook.com/profile.php?id=61574480862101"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaFacebook color="#1877F2" />
            </a>{" "}
            <a
              href="https://www.instagram.com/kiddiesgrowth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaInstagram color="#E1306C" />
            </a>{" "}
            <a
              href="https://www.tiktok.com/@kiddiesgrowth?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaTiktok color="#000000" className="text-3xl" />
            </a>{" "}
          </div>
          <a href="" className="link link-hover flex gap-1 mb-2 items-center">
            <span>
              <FaWhatsapp color="#25D366" className="text-3xl" />
            </span>
            Whatsapp: + 234 903 591 8866
          </a>
          <a className="link link-hover gap-3 flex items-center">
            <span>
              <FaPhoneAlt color="#34B7F1" className="text-2xl" />
            </span>
            Phone: + 234 903 591 8866
          </a>
        </nav>
      </footer>
    </div>
  );
}
