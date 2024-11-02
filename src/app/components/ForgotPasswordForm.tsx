import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
    } else {
      // Perform forgot password API call here
      console.log('Forgot Password Email:', email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mx-auto my-6 max-w-lg">
      <p className="text-sm text-gray-500 mb-4 underline">
        We&apos;ll email you instructions on how to reset your password.
      </p>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        placeholder="Enter your email address"
        error={error}
        required
      />
      <Button label="Submit" onClick={handleSubmit} type="submit" />
    </form>
  );
};

export default ForgotPasswordForm;
