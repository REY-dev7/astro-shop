import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-16 md:px-20 lg:px-28 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-500">
          Have a question or comment? We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form className="mt-16 sm:px-20 md:px-24 shadow-lg pb-10 rounded-2xl">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">First Name</label>
            <input type="text" name="first-name" id="first-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg" required />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">Last Name</label>
            <input type="text" name="last-name" id="last-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg" required />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
          <input type="email" name="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg" required />
        </div>

        <div className="mt-6">
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg" required></textarea>
        </div>

        <div className="mt-6">
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;