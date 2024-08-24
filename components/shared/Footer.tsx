const Footer = ({ isHomePage }: { isHomePage: boolean }) => {
  return (
    <footer
      className={`flex w-full py-5 pr-[51px] align-bottom text-xs font-light text-slate-400  max-md:justify-center max-md:text-wrap max-md:px-12 max-md:text-center ${
        isHomePage ? `mb-0  justify-center` : `justify-end`
      }`}
    >
      © Designed & Built by Darshin Van Parijs & Deployed with Vercel
    </footer>
  );
};

export default Footer;
