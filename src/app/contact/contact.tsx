import React from 'react';

const Contact = () => {
  return (
    <>
      <header className="bg-cover bg-center h-64 relative" style={{ backgroundImage: "url('https://static.wixstatic.com/media/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold z-10">Contact Us</h1>
        </div>
      </header>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Your Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Your Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700">Subject</label>
                    <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Your Message</label>
                    <textarea id="message" name="message"  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Send Message</button>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
                <p className="mb-4">Fill up the form and our team will get back to you within 24 hours.</p>
                <ul className="mb-4">
                  <li className="mb-2"><strong>Call Us:</strong> +123 456 7890</li>
                  <li className="mb-2"><strong>Email Us:</strong> example@example.com</li>
                  <li className="mb-2"><strong>Website:</strong> www.example.com</li>
                  <li className="mb-2"><strong>Address:</strong> 123 Main Street, Anytown, USA</li>
                </ul>
                <h3 className="text-xl font-semibold mb-4">Follow Us On</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.07966955936!2d-74.0059728!3d40.7127754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzQ1LjkiTiA3NMKwMDAnMDUuNyJX!5e0!3m2!1sen!2sus!4v1633093798351!5m2!1sen!2sus"
          width="100%" height="450" style="border:0;" allowFullScreen="" loading="lazy"></iframe> */}
      </section>

      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-4">Genical</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <h3 className="text-xl font-semibold text-white mb-4">Information</h3>
              <ul>
                <li><a href="#" className="hover:text-white">Intellectual Property</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
