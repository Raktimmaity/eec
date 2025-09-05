import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
// import eecLogo from "@/assets/eec-logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-slate-800 ">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Get a demo of our digital solution and see how we transform your school
          </h2>
          <div className="mt-6">
            <Link
              to="/request-demo"
              className="inline-block px-6 py-3 rounded-full text-white bg-amber-600 hover:bg-amber-700 shadow-lg transition font-semibold"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Tagline (soft, optional) */}
        {/* <p className="text-3xl md:text-4xl font-extrabold text-amber-300/60 text-center mt-14 select-none">
          The future is here. Embrace it now!
        </p> */}

        {/* Middle: logo + columns */}
        <div className="mt-12 md:mt-28 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Brand / Contact / Socials */}
          <div className="flex flex-col gap-4">
            <Link to="/">
              <img src="/logo_new.png" alt="EEC" className="w-48 hover:scale-105 transition-all" />
            </Link>
            {/* <div className="text-2xl font-bold">
              <span className="text-slate-900">EEC</span>
              <span className="text-amber-600">.</span>
            </div> */}

            <div className="flex items-center gap-3 text-sm text-slate-700">
              <FaEnvelope className="shrink-0" />
              <a href="mailto:eec@electroniceducare.com" className="hover:text-amber-700">
                eec@electroniceducare.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <FaPhone className="shrink-0" />
              <a href="tel:+919830590929" className="hover:text-amber-700">
                +91 9830590929
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="p-2 rounded-full border border-amber-200 bg-white hover:bg-amber-50 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-amber-200 bg-white hover:bg-amber-50 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div>
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-amber-700">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-700">About Us</Link></li>
              {/* <li><Link to="/academy" className="hover:text-amber-700">EEC Academy</Link></li>
              <li><Link to="/portfolio" className="hover:text-amber-700">Our Portfolio</Link></li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-amber-700">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-700">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/terms-of-service" className="hover:text-amber-700">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-amber-700">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-black/30 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-center text-xs text-slate-500">
          <div>
            All rights reserved. <span className="text-slate-700 font-medium">EEC</span> © {new Date().getFullYear()}
          </div>
          {/* <div className="mt-3 md:mt-0">
            Web design &amp; dev: <span className="text-slate-700 font-medium">EEC Team</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
