import Main from '../components/Main';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <main className="m-10 flex max-h-screen gap-x-4 overflow-hidden">
      <div className="w-2/5 content-center">
        <Navbar />
      </div>
      <div className="content-center">
        <Main />
      </div>
    </main>
  );
};

export default Home;
