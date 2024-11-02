import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const CandidateForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validate = () => {
    const newErrors = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    if (!form.fullName) newErrors.fullName = 'Full name is required';
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!form.password) newErrors.password = 'Password is required';
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

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
      // You can add further processing here, such as an API call
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-4 mx-auto my-6 max-w-lg" // Keep margin and centering
    >
      <Input
        label="Full Name"
        type="text"
        value={form.fullName}
        onChange={handleChange}
        name="fullName"
        placeholder="Enter your full name" // Add placeholder
        error={errors.fullName} // Pass error message to Input
        required // Mark field as required
      />
      <Input
        label="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        name="email"
        placeholder="Enter your email address" // Add placeholder
        error={errors.email} // Pass error message to Input
        required // Mark field as required
      />
      <Input
        label="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
        name="password"
        placeholder="Enter your password" // Add placeholder
        error={errors.password} // Pass error message to Input
        required // Mark field as required
      />
      <Input
        label="Confirm Password"
        type="password"
        value={form.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
        placeholder="Re-enter your password" // Add placeholder
        error={errors.confirmPassword} // Pass error message to Input
        required // Mark field as required
      />
      
      {/* Password criteria text */}
      <p className="text-sm text-gray-400 mb-4"> {/* Style to match hint text */}
        Password Criteria:   <br /> <br />
        <span>&bull;</span> 16-32 character length <br />
        <span>&bull;</span> Mix of alphabet, numbers, and special characters <br />
        <span>&bull;</span> Mix of upper and lowercase alphabets
      </p>

      <Button label="Sign Up" onClick={handleSubmit} type="submit" />
    </form>
  );
};

export default CandidateForm;
