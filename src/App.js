import React from 'react';
import Header from './components/Header';
import ProductSection from './components/productsection';
import ContactSection from './components/ContactSection';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <h1>Welcome to Our Store</h1>
          <p>Discover our range of products.</p>
        </section>
        <ProductSection />
        <ContactSection />
      </main>
      <div className="gap"></div>
      <Footer />
    </>
  );
}

export default App;
