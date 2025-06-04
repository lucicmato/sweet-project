import Anchors from '@/app/components/anchors';

import { socialMedia } from '@/app/data/data';
import { SocialMedia } from '@/app/types/types';

const Social = () => {
  return (
    <section id="oursocial">
      <Anchors upperSectionId={'sectionskills'} lowerSectionId={'contacts'} />

      {/* start container */}
      <div
        className="container clearfix"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* start title section */}
        <div className="grid_12 titlesection">
          <h1>Pratite nas...</h1>
        </div>
        {/* end title section */}

        <div key="media">
          {socialMedia.map((media: SocialMedia, index) => (
            <div className="grid_2" key={index}>
              <a href={media.url}>
                <img className="rotate" alt="Media" src={media.icon} />
              </a>
            </div>
          ))}
        </div>

        {/* end social icons */}
      </div>
      {/* end container */}
    </section>
  );
};

export default Social;
