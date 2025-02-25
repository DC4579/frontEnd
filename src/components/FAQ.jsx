import React from "react";

const FAQs = ({ faqs }) => {
  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <button key={index} className="faq-button">
          {faq} <span>▼</span>
        </button>
      ))}
    </section>
  );
};

export default FAQs;

