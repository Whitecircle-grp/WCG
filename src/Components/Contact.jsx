import React from 'react';
import artImage from '../assets/art.webp'; // adjust path as needed

const ContactSection = () => {
  return (
    <section className="bg-[#DBE2DC] py-16 px-6 text-[#335765]" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#7F543D] mb-12">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-15">
          {/* Image with Hover Effect */}
          <div className="relative group rounded-lg overflow-hidden shadow-md h-100 w-130 mt-7">
            <img
              src={artImage}
              alt="Appointment"
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-xl font-semibold bg-[#335765cc] px-6 py-3 rounded-md">
                Book your Appointment 
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#7F543D]">Send a Message</h3>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#74A8A4]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#74A8A4]"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full mb-4 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#74A8A4] text-[#335765]"
              />
              <select
                className="w-full mb-4 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#74A8A4]"
                defaultValue=""
              >
                <option value="" disabled >Select Time Slot</option>
                <option>10:00 AM – 11:00 AM</option>
                <option>11:00 AM – 12:00 PM</option>
                <option>12:00 PM – 1:00 PM</option>
                <option>1:00 PM – 2:00 PM</option>
                <option>2:00 PM – 3:00 PM</option>
                <option>3:00 PM – 4:00 PM</option>
                <option>4:00 PM – 5:00 PM</option>
                <option>5:00 PM – 6:00 PM</option>
                <option>6:00 PM – 7:00 PM</option>
              </select>
              <button
                type="button"
                className="bg-[#7F543D] text-white py-2 px-6 rounded-md hover:bg-[#74A8A4] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
