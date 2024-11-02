import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const validate = () => {
    const newErrors = { firstName: '', lastName: '', email: '', message: '' };

    if (!form.firstName) newErrors.firstName = 'First name is required';
    if (!form.lastName) newErrors.lastName = 'Last name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.values(newErrors).every(x => x === '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', form);
      // Further processing like API call can go here
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {/* Left Side: Form */}
      <div className="md:w-1/2 w-full p-4">
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 mx-auto my-6 max-w-lg">
          {/* First Name & Last Name in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              name="firstName"
              placeholder="Enter your first name"
              error={errors.firstName}
              required
            />
            <Input
              label="Last Name"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              name="lastName"
              placeholder="Enter your last name"
              error={errors.lastName}
              required
            />
          </div>

          {/* Email */}
          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            name="email"
            placeholder="Enter your email address"
            error={errors.email}
            required
          />

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className={`mt-1 p-2 w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md 
                focus:ring-2 focus:ring-themeColor focus:border-themeColor outline-none`}
              rows={4}
              required
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <Button label="Send Message" onClick={handleSubmit} type="submit" />
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 w-full p-4 flex justify-center items-center">
        <img 
          src="/Images/image3.png" 
          alt="Contact Us" 
          className="w-full max-w-sm h-auto object-contain rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContactForm;
