import Anchors from '@/app/components/anchors';
import Image from 'next/image';

import { priceCardsData } from '@/app/data/data';
import { PriceCard } from '@/app/types/types';

const Prices = () => {
  return (
    <section id="sectionprices">
      <Anchors upperSectionId={'sectionportfolio'} lowerSectionId={'sectionteam'} />

      {/*start container*/}
      <div className="container clearfix">
        {/*start titlesection*/}
        <div className="grid_12 titlesection">
          <h1>Naše cijene</h1>
        </div>
        {/*end title section*/}

        {/*price*/}

        {priceCardsData.map((priceCardData: PriceCard, index) => (
          <div className="grid_3 expand" key={index}>
            <div className="logoprice">
              <Image className="rotate" alt="" src={priceCardData.imageSrc} />
            </div>
            <div className="ribbon">
              <h2>
                {`${priceCardData.priceLabel} - `}
                <span>{priceCardData.category}</span>
              </h2>
            </div>
            <div className="price">
              <p>{priceCardData.description}</p>

              <ul>
                {priceCardData.items &&
                  priceCardData.items.length > 0 &&
                  priceCardData.items?.map((item: string, index) => (
                    <li key={index}>
                      <p>{item}</p>
                    </li>
                  ))}
              </ul>

              <p className="btn green">
                <a>{priceCardData.category}</a>
              </p>
            </div>
            <div className="triangle"></div>
          </div>
        ))}

        <div className="grid_12 titlesection">
          <h1 style={{ color: 'red' }}>
            Cijene nisu usklađene i nisu točne... Work in progress...{' '}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Prices;
