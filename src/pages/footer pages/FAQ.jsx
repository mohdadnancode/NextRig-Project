import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you offer Cash on Delivery?",
      answer:
        "Yes, we offer Cash on Delivery (COD) and Pay on Delivery options for selected locations. A small convenience fee of ₹15 applies.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Orders are usually processed within 24 hours and delivered within 3-7 business days depending on your location.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 7 days of delivery if the product is unused and in original packaging. Read our Returns Policy for details.",
    },
    {
      question: "Do you provide warranty for products?",
      answer:
        "Yes. All components sold on NextRig come with the brand's official warranty as mentioned in the product description.",
    },
    {
      question: "Can I cancel my order after placing it?",
      answer:
        "Yes, cancellation is allowed before the order is shipped. Once shipped, it can only be returned after delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200 py-20 px-6 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#76b900] border-b border-[#76b900]/30 inline-block pb-2 mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#76b900]/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-white focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  size={20}
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#76b900]" : "text-gray-400"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;