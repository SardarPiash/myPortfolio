import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service configuration with provided IDs
    const serviceID = "service_dsg2fg6";
    const templateID = "template_nw2tje8";
    const userID = "G-EDaPLjHnaiKHegg";

    const templateParams = {
      name: formData.name,
      user_email: formData.email,
      message: formData.query,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        toast.success("Response submitted! Check your email.", {
          position: "bottom-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
      (error) => {
        toast.error("Email sending failed. Try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    );

    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      query: "",
    });
  };

  return (
    <div className="w-full md:w-ful md:mt-10">
      <div
        className="mx-auto md:w-[700px] border rounded-sm border-softBlue "
        data-aos="fade-up"
      >
        <div
          id="contact"
          className="text-center text-white w-[600px] md:mx-auto py-10 md:py-20 "
        >
          <div className="px-5 md:px-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-softBlue">
              Get In Touch
            </h2>
            <div className="my-[-2rem] md:my-5 ml-6 md:ml-[120px] w-1/2 md:w-[360px] h-1 bg-softBlue   "></div>
            <p className="text-base text-softBlack  mb-10 md:w-[400px] mx-auto">
              I’m currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I’ll try
              my best to get back to you!
            </p>

            {/* Form starts here */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-[#1A1A1A] border rounded border-softBlue text-softBlack placeholder-softBlack focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-3 py-2 bg-[#1A1A1A] border rounded border-softBlue text-softBlack placeholder-softBlack focus:outline-none"
                required
              />
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Your Query"
                className="w-full px-3 py-2 bg-[#1A1A1A] border rounded border-softBlue text-softBlack placeholder-softBlack focus:outline-none h-32"
                required
              ></textarea>

              <button className="mx-auto mt-12 px-6 py-2 bg-[#4A4A4A] text-[#FFFFFF] hover:bg-[#2C3E50] hover:text-[#E0E0E0] border border-transparent rounded flex items-center">
                <div className=" flex">
                  <div className="my-auto">
                    <HiOutlineMail />
                  </div>
                  <div className="ml-1">Send</div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
