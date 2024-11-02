import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

interface OrganizationLoginFormProps {
  onForgotPassword: () => void; // Define the type for the prop
}

const OrganizationLoginForm: React.FC<OrganizationLoginFormProps> = ({ onForgotPassword }) => {
  const router = useRouter(); // Initialize the Next.js router
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    const newErrors = { email: '', password: '' };

    if (!form.email) newErrors.email = 'Organization email is required';
    if (!form.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.values(newErrors).every(x => x === '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', form);
      // If validation passes, navigate to the organization page
      router.push('/organization'); // Adjust the path to your organization page
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mx-auto my-6 max-w-lg">
      <Input
        label="Organization Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        name="email"
        placeholder="Enter your organization email address"
        error={errors.email}
        required
      />
      <Input
        label="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
        name="password"
        placeholder="Enter your password"
        error={errors.password}
        required
      />

      {/* "Forgot Password?" Link Button */}
      <div className="text-right">
        <button
          type="button"
          className="text-themeColor font-themeFont hover:underline focus:outline-none mb-1"
          onClick={onForgotPassword} // Call the onForgotPassword prop
        >
          Forgot Password?
        </button>
      </div>

      <Button label="Login" onClick={handleSubmit} type="submit" />
    </form>
  );
};

export default OrganizationLoginForm;
