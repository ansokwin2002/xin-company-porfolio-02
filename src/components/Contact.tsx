import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface ContactProps {
  showAnimations: boolean;
}

const Contact: React.FC<ContactProps> = ({ showAnimations }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    company: Yup.string(),
    website: Yup.string().url(),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string(),
    subject: Yup.string().required('Project type is required'),
    department: Yup.string(),
    services: Yup.array().of(Yup.string()),
    referral: Yup.string(),
    message: Yup.string().required('Project details are required'),
    budget: Yup.string(),
    timeline: Yup.string(),
    priority: Yup.string(),
    file: Yup.mixed(),
  });

  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you within 24 hours.');
      resetForm();
      setIsSubmitting(false);
      setSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'alex.johnson@example.com',
      href: 'mailto:alex.johnson@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'New York, USA',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showAnimations ? (
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Let's Work <span className="text-red-600">Together</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your next project? Get in touch and let's discuss how 
                I can help bring your vision to life with modern web development solutions.
              </p>
            </div>
          </Fade>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Work <span className="text-red-600">Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch and let's discuss how 
              I can help bring your vision to life with modern web development solutions.
            </p>
          </div>
        )}

        {/* Contact Information */}
        {showAnimations ? (
          <Fade direction="left" delay={200} triggerOnce>
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I'm always interested in new projects and opportunities. 
                  Whether you need a simple website or a complex web application, 
                  I'm here to help you succeed.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                      <info.icon className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center w-12 h-12 bg-white rounded-lg hover:bg-red-50 transition-colors group border border-gray-200"
                    >
                      <social.icon className="text-gray-600 group-hover:text-red-600 transition-colors" size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-green-800">Available for Projects</span>
                </div>
                <p className="text-green-700 text-sm">
                  Currently accepting new projects with start dates in February 2024
                </p>
              </div>
            </div>
          </Fade>
        ) : (
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in new projects and opportunities. 
                Whether you need a simple website or a complex web application, 
                I'm here to help you succeed.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                    <info.icon className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-lg hover:bg-red-50 transition-colors group border border-gray-200"
                  >
                    <social.icon className="text-gray-600 group-hover:text-red-600 transition-colors" size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-green-800">Available for Projects</span>
              </div>
              <p className="text-green-700 text-sm">
                Currently accepting new projects with start dates in February 2024
              </p>
            </div>
          </div>
        )}

        {/* Contact Form */}
        {showAnimations ? (
          <Fade direction="right" delay={400} triggerOnce>
            <div className="">
              <div className="bg-white p-10 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
                
                <Formik
                  initialValues={{
                    name: '',
                    company: '',
                    website: '',
                    email: '',
                    phone: '',
                    subject: '',
                    department: '',
                    services: [],
                    referral: '',
                    message: '',
                    budget: '',
                    timeline: '',
                    priority: '',
                    file: ''
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                            placeholder="Your name"
                          />
                          <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <Field
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                            placeholder="Your company"
                          />
                          <ErrorMessage name="company" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                            placeholder="your.email@example.com"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Field
                            type="text"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                            placeholder="Your phone number"
                          />
                          <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                          Website
                        </label>
                        <Field
                          type="url"
                          id="website"
                          name="website"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                          placeholder="https://yourwebsite.com"
                        />
                        <ErrorMessage name="website" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type *
                        </label>
                        <Field
                          as="select"
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                        >
                          <option value="">Select project type</option>
                          <option value="website">New Website</option>
                          <option value="webapp">Web Application</option>
                          <option value="ecommerce">E-Commerce Store</option>
                          <option value="redesign">Website Redesign</option>
                          <option value="maintenance">Maintenance & Support</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </Field>
                        <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                        <div role="group" aria-labelledby="referral-group" className="space-y-2">
                          <label className="flex items-center">
                            <Field type="radio" name="referral" value="Google" className="form-radio h-5 w-5 text-red-600" />
                            <span className="ml-2">Google</span>
                          </label>
                          <label className="flex items-center">
                            <Field type="radio" name="referral" value="Social Media" className="form-radio h-5 w-5 text-red-600" />
                            <span className="ml-2">Social Media</span>
                          </label>
                          <label className="flex items-center">
                            <Field type="radio" name="referral" value="Friend" className="form-radio h-5 w-5 text-red-600" />
                            <span className="ml-2">Friend</span>
                          </label>
                          <label className="flex items-center">
                            <Field type="radio" name="referral" value="Other" className="form-radio h-5 w-5 text-red-600" />
                            <span className="ml-2">Other</span>
                          </label>
                        </div>
                        <ErrorMessage name="referral" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                            Budget Range
                          </label>
                          <Field
                            as="select"
                            id="budget"
                            name="budget"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                          >
                            <option value="">Select budget range</option>
                            <option value="1000-2500">$1,000 - $2,500</option>
                            <option value="2500-5000">$2,500 - $5,000</option>
                            <option value="5000-10000">$5,000 - $10,000</option>
                            <option value="10000+">$10,000+</option>
                          </Field>
                          <ErrorMessage name="budget" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                            Timeline
                          </label>
                          <Field
                            as="select"
                            id="timeline"
                            name="timeline"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-2weeks">1-2 weeks</option>
                            <option value="1month">1 month</option>
                            <option value="2-3months">2-3 months</option>
                            <option value="flexible">I'm flexible</option>
                          </Field>
                          <ErrorMessage name="timeline" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                          Priority
                        </label>
                        <Field
                          as="select"
                          id="priority"
                          name="priority"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                        >
                          <option value="">Select priority</option>
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </Field>
                        <ErrorMessage name="priority" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      <div>
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                          Attachments
                        </label>
                        <Field
                          type="file"
                          id="file"
                          name="file"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                        />
                        <ErrorMessage name="file" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors resize-none"
                          placeholder="Tell me about your project requirements, goals, and any specific features you need..."
                        />
                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Fade>
        ) : (
          <div className="">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              
              <Formik
                initialValues={{
                  name: '',
                  company: '',
                  website: '',
                  email: '',
                  phone: '',
                  subject: '',
                  department: '',
                  services: [],
                  referral: '',
                  message: '',
                  budget: '',
                  timeline: '',
                  priority: '',
                  file: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                          placeholder="Your name"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <Field
                        as="select"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                      >
                        <option value="">Select project type</option>
                        <option value="website">New Website</option>
                        <option value="webapp">Web Application</option>
                        <option value="ecommerce">E-Commerce Store</option>
                        <option value="redesign">Website Redesign</option>
                        <option value="maintenance">Maintenance & Support</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </Field>
                      <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <Field
                          as="select"
                          id="budget"
                          name="budget"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="1000-2500">$1,000 - $2,500</option>
                          <option value="2500-5000">$2,500 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000+">$10,000+</option>
                        </Field>
                        <ErrorMessage name="budget" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline
                        </label>
                        <Field
                          as="select"
                          id="timeline"
                          name="timeline"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-2weeks">1-2 weeks</option>
                          <option value="1month">1 month</option>
                          <option value="2-3months">2-3 months</option>
                          <option value="flexible">I'm flexible</option>
                        </Field>
                        <ErrorMessage name="timeline" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors resize-none"
                        placeholder="Tell me about your project requirements, goals, and any specific features you need..."
                      />
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;