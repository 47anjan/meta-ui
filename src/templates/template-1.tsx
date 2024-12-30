import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WhyChooseSection from '~/components/templates/components/about/about';
import ContactForm from '~/components/templates/components/contact-form/contact-form';
import FAQ from '~/components/templates/components/faq/faq';
import Footer from '~/components/templates/components/footer/footer';
import GallerySection from '~/components/templates/components/gallery/gallery';
import Header from '~/components/templates/components/header/header';
import HeroSection from '~/components/templates/components/hero/hero';
import ServeAreaSection from '~/components/templates/components/locations/serve-area';
import QuoteSection from '~/components/templates/components/quote/quote';
import FeatureSection from '~/components/templates/components/services/feature';
import ReviewSection from '~/components/templates/components/services/review';
import StatsSection from '~/components/templates/components/stats/stats';

const Template1 = () => {
  return (
    <main className='min-h-screen w-full text-[#02050B]'>
      <Header />
      <HeroSection />
      <FeatureSection />
      <WhyChooseSection />
      <QuoteSection />
      <GallerySection />
      <StatsSection />
      <ReviewSection />
      <ContactForm />
      <FAQ />
      <ServeAreaSection />
      <Footer />
      <ToastContainer position='bottom-right' />
    </main>
  );
};
export default Template1;
