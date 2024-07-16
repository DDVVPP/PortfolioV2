import Main from './components/Main';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <main className="m-10 flex w-full ">
      <div className="w-1/4">
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
    </main>
  );
};

export default Home;
