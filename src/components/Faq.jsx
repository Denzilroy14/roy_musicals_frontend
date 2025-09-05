import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is Roy Musicals?',
    answer: 'Roy Musicals is a musical instrument retailer and service provider.'
  },
  {
    question: 'What does Roy Musicals do?',
    answer: 'They sell instruments, offer music lessons, and provide repair services.'
  }
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="arrow">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </section>
  );
};

export default Faq;
