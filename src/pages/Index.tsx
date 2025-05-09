
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Differentials from '@/components/Differentials';
import Clients from '@/components/Clients';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  // Simple scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Differentials />
      <Clients />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
