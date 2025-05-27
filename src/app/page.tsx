import Header from '@/app/header';
import Services from '@/app/services';
import Testimonials from '@/app/testimonials';
import Portfolio from '@/app/portfolio';
import Prices from '@/app/prices';
import Team from '@/app/team';
import Skills from '@/app/skills';
import Social from '@/app/social';
import Contacts from '@/app/contacts';

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
        <Skills />
        <Social />
        <Contacts />
      </main>
    </>
  );
};

export default Home;
