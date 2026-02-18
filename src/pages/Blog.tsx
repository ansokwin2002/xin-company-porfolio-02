import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import StartYourNextBigProject from '../components/sections/StartYourNextBigProject';

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-16"> {/* pt-16 to offset fixed header */}
        <section className="py-8 text-center">
          <h1 className="text-3xl font-bold">Hello from Blog Page!</h1>
        </section>
        <StartYourNextBigProject />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;