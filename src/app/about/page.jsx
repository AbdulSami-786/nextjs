'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="max-w-5xl mx-auto p-8 mt-16 bg-white rounded-lg shadow-lg space-y-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Hero Section */}
      <section>
        <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
          About Our Company
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Welcome to MyStore! We are dedicated to providing the highest quality products
          while creating an exceptional shopping experience for every customer.
        </p>
      </section>

      {/* Mission Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to deliver high-quality goods at affordable prices while
          offering exceptional customer service and fostering a community of trust and loyalty.
          We believe in innovation, sustainability, and continuous improvement.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet the Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Jane Doe - CEO</h3>
            <p className="text-gray-600 leading-relaxed">
              Jane has over 15 years of experience in retail and e-commerce. She leads
              with passion and vision to make MyStore the best place to shop online.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">John Smith - CTO</h3>
            <p className="text-gray-600 leading-relaxed">
              John heads our tech department, constantly improving our platform with
              cutting-edge solutions and seamless user experiences.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Emily Johnson - Customer Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Emily ensures all customers receive top-notch support and assistance,
              making sure your experience is smooth and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li><strong>Integrity:</strong> We are honest and transparent with our customers.</li>
          <li><strong>Quality:</strong> Only the best products make it to our store.</li>
          <li><strong>Customer First:</strong> Your satisfaction is our top priority.</li>
          <li><strong>Sustainability:</strong> We strive to minimize our environmental impact.</li>
          <li><strong>Innovation:</strong> We continuously improve and adapt to serve you better.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-2">
          Have questions? Want to collaborate? Reach out to us!
        </p>
        <p className="text-lg text-blue-600 font-semibold">Email: support@mystore.com</p>
        <p className="text-lg text-blue-600 font-semibold">Phone: +1 (555) 123-4567</p>
        <p className="text-lg text-blue-600 font-semibold">Address: 123 Commerce St, Shopville, USA</p>
      </section>
    </motion.div>
  );
}
