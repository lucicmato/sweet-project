import Header from '@/app/header';
import Services from '@/app/services';
import Testimonials from '@/app/testimonials';
import Portfolio from '@/app/portfolio';
import Prices from '@/app/prices';
import Team from '@/app/team';

const Home = () => {
  return (
    <>
      <main>
        <Header />
        {/*<Banner />*/}
        <Services />
        <Testimonials />
        <Portfolio />
        <Prices />
        <Team />
      </main>
    </>
  );
};

export default Home;
