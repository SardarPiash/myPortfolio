import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS service configuration with provided IDs
        const serviceID = 'service_dsg2fg6';
        const templateID = 'template_nw2tje8';
        const userID = 'G-EDaPLjHnaiKHegg';

        const templateParams = {
            name: formData.name,
            user_email: formData.email,
            message: formData.query
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                toast.success('Response submitted! Check your email.', {
                    position: "bottom-right",
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }, (error) => {
                toast.error('Email sending failed. Try again.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                
            });


        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            query: ''
        });
    };

    return (
        <div className='w-full md:w-ful'>
        <div id='contact' className="text-center text-white w-[600px] md:mx-auto py-10 md:py-20" data-aos="fade-up">
            <div className="px-5 md:px-0">
                <p className="text-white text-lg mb-5" data-aos="fade-up">
                    What's Next?
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mb-5" data-aos="fade-up" style={{ color: "#F8F8FF" }}>
                    Get In Touch
                </h2>
                <p className="text-base text-justify mb-10 md:w-[400px] mx-auto" data-aos="fade-up">
                    I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
                
                {/* Form starts here */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 bg-transparent border border-white text-white placeholder-white focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full px-3 py-2 bg-transparent border border-white text-white placeholder-white focus:outline-none"
                        required
                    />
                    <textarea
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        placeholder="Your Query"
                        className="w-full px-3 py-2 bg-transparent border border-white text-white placeholder-white focus:outline-none h-32"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="mt-5 px-8 py-3 bg-transparent border border-white text-white font-bold rounded-none hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Send
                    </button>
                    
                </form>
                
            </div>
            
        </div>
        <ToastContainer />
        </div>
    );
};

export default Contact;
