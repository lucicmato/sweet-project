import { servicesData } from '@/app/data/data';
import Image from 'next/image';

const Services = () => {
  return (
    <section id="services">
      <div className="bottomwaves"></div>
      {/*need for slide*/}

      {/*start container*/}
      <div className="container clearfix">
        {/*start titlesection*/}
        <div className="grid_12 titlesection">
          <h1>Usluge koje nudimo</h1>
        </div>

        {servicesData.map((data, index) => (
          <div className="grid_4" key={index}>
            <Image className="rotate" src={data.imageSrc} alt="Usluge" />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
