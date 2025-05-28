import Navigation from '@/app/navigation';
import Services from '@/app/sections/services';
import Testimonials from '@/app/sections/testimonials';
import Portfolio from '@/app/sections/portfolio';
import Prices from '@/app/sections/prices';
import Team from '@/app/sections/team';
import Skills from '@/app/sections/skills';
import Social from '@/app/sections/social';
import Contacts from '@/app/sections/contacts';

const Home = () => {
  return (
    <>
      <main>
        <Navigation />
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
