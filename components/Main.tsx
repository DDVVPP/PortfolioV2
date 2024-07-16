import About from './About';

const Main = () => {
  return (
    // Render different sections here depending on the route, but default to About
    <div className="relative h-screen overflow-hidden">
      <About />
    </div>
  );
};

export default Main;
