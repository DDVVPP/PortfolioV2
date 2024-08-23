import Home from '@/components/Home';
import Footer from '@/components/shared/Footer';

const HomeWrapper = () => {
  return (
    <>
      <section className="w-full bg-slate-900">
        <Home />
      </section>
      <Footer isHomePage={true} />
    </>
  );
};

export default HomeWrapper;
