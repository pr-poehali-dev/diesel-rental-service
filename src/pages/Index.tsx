import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import OrderForm from '@/components/OrderForm';
import Services from '@/components/Services';
import Rates from '@/components/Rates';
import Geography from '@/components/Geography';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Calculator />
      <OrderForm />
      <Services />
      <Rates />
      <Geography />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Index;
