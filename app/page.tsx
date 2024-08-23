import Home from '@/components/Home';

const HomeWrapper = () => {
  return (
    <>
      <section className="w-full bg-slate-900">
        <Home />
      </section>
      <footer className="mb-0 flex w-full justify-center bg-slate-900 py-5 pr-[51px] align-bottom text-xs font-light text-slate-400 max-md:justify-center max-md:text-wrap max-md:px-12 max-md:text-center">
        © Designed & Built by Darshin Van Parijs & Deployed with Vercel
      </footer>
    </>
  );
};

export default HomeWrapper;
