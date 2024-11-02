// components/FAQ.tsx
import React from 'react';

const FAQ = () => {
  const faqs = [
    { question: 'What is included in the free plan?', answer: 'Details about the free plan.' },
    { question: 'Can I switch plans later?', answer: 'Yes, you can switch plans anytime.' },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-center text-2xl font-bold mb-6">Pricing FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
