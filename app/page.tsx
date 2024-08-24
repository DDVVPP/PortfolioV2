import Home from '@/components/Home';
import Footer from '@/components/shared/Footer';

const HomeWrapper = () => {
  return (
    <div className="w-full">
      <Home />
      <Footer isHomePage={true} />
    </div>
  );
};

export default HomeWrapper;
