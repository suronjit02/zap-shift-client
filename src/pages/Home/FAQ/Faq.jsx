import { useState } from "react";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";

const faqData = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, our posture corrector is fully adjustable and designed to fit a wide range of body types. It's suitable for teens, adults, and seniors alike, though we recommend checking the size chart before ordering.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Many users report noticeable relief within a few weeks of consistent use. It works by gently pulling your shoulders back, reducing strain on your upper back and neck, and building muscle memory for better posture over time.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Select models come with a built-in smart sensor that gently vibrates whenever it detects slouching, reminding you to correct your posture in real time throughout the day.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "Simply enter your email on the product page and we'll send you a notification the moment the item is restocked. No spam, just a one-time alert.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="mt-3 text-secondary-content max-w-xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        <div className="mt-10 space-y-3 text-left">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#eaf4f2] border-[#0e2f2b]/30"
                    : "bg-white border-transparent"
                }`}
              >
                {/* button */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-secondary">
                    {item.question}
                  </span>
                  <FiChevronDown
                    className={`shrink-0 text-[#0e2f2b] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-[#0e2f2b]/10 pt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <button className="bg-accent hover:bg-accent/80 transition-colors text-[#0e2f2b] font-semibold px-6 py-3 rounded-xl">
            See More FAQ's
          </button>
          <button className="bg-secondary hover:bg-secondary/90 transition-colors text-primary p-3 rounded-full">
            <FiArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
