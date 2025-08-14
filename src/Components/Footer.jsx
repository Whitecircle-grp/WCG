import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#335765] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        {/* Office Address */}
        <div>
          <h3 className="text-lg font-semibold">📍 Office Address</h3>
          <p className="mt-1 leading-relaxed">
            DesignVista Studio
            <br />
            123 Creative Lane,
            <br />
            Bhopal, MP, 462001
          </p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="text-lg font-semibold">📞 Phone</h3>
          <p className="mt-1">+91 98765 43210</p>
        </div>

        {/* Email */}
        <div>
          <h3 className="text-lg font-semibold">✉️ Email</h3>
          <p className="mt-1">hello@designvista.com</p>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-lg font-semibold">⏰ Working Hours</h3>
          <p className="mt-1 leading-relaxed">
            Mon–Fri: 10:00 AM – 7:00 PM
            <br />
            Sat: 10:00 AM – 3:00 PM
            <br />
            Sun: Closed
          </p>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="mt-10 border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-center items-center text-xs text-center sm:text-left">
        {/* <div className="ml-40 justify-center"> */}
        <p>
          &copy; {new Date().getFullYear()} DesignVista Studio. All rights
          reserved.
        </p>
        {/* </div> */}

        {/* <div className="space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-[#74A8A4]">Privacy Policy</a>
          <a href="#" className="hover:text-[#74A8A4]">Terms</a>
        </div> */}
      </div>
      <div className="mt-2 border-white/20 pt-6 flex flex-col sm:flex-row justify-end items-center text-xs text-center sm:text-left">
      <div className="space-x-4 mt-2 sm:mt-0">
        <a href="#" className="hover:text-[#74A8A4]">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-[#74A8A4]">
          Terms
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
