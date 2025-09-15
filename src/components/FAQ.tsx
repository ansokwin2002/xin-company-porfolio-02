import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on complexity and scope. Simple websites typically take 1-2 weeks, while complex web applications can take 4-8 weeks. I provide detailed timelines during the initial consultation and keep you updated throughout the development process.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'My pricing is project-based and depends on complexity, features, and timeline. Simple websites start at $1,500, while custom web applications range from $3,000-$10,000+. I provide detailed quotes after understanding your specific requirements and always maintain transparent pricing with no hidden costs.'
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes! I offer comprehensive maintenance packages starting at $200/month, which include regular updates, security monitoring, backups, performance optimization, and technical support. I also provide emergency support and can handle urgent issues quickly.'
    },
    {
      question: 'How many revisions are included in the project?',
      answer: 'I include up to 3 rounds of revisions in all my projects to ensure you\'re completely satisfied with the final result. Additional revisions beyond this can be accommodated at an hourly rate. I work closely with clients throughout the process to minimize the need for extensive revisions.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in modern web technologies including Laravel (PHP), Vue.js, React, Next.js, Node.js, and Tailwind CSS. I also work with databases like MySQL and PostgreSQL, and have experience with various APIs and third-party integrations.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! I work with clients worldwide and am comfortable with different time zones. I use various communication tools like Slack, Zoom, and email to ensure smooth collaboration regardless of location. All project documentation and communication are conducted in English.'
    },
    {
      question: 'Can you help with existing website improvements?',
      answer: 'Yes, I can help improve existing websites by adding new features, optimizing performance, updating designs, fixing bugs, or migrating to modern technologies. I\'ll first audit your current site and provide recommendations for improvements.'
    },
    {
      question: 'What information do you need to start a project?',
      answer: 'To get started, I need to understand your business goals, target audience, preferred design style, required features, and any specific technical requirements. I typically start with a detailed consultation call followed by a comprehensive project brief.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'While I don\'t directly provide hosting services, I can help you choose the right hosting solution for your needs and assist with setup and deployment. I work with various hosting providers and can recommend the best options based on your project requirements and budget.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'I typically work with a 50% upfront payment to begin the project, with the remaining 50% due upon completion. For larger projects, I can arrange milestone-based payments. I accept various payment methods and provide detailed invoices for all transactions.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <HelpCircle className="text-red-600" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about my web development services, 
            pricing, and process. Can't find what you're looking for? Feel free to contact me!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    activeIndex === index ? 'transform rotate-180 text-red-600' : ''
                  }`}
                />
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-white rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            I'm here to help! Get in touch and I'll answer any questions you have about your project.
          </p>
          <button
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;