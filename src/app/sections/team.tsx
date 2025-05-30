import Anchors from '@/app/components/anchors';

import { teamMembers } from '@/app/data/data';
import { Social, TeamMember } from '@/app/types/types';

const Team = () => {
  return (
    <section id="sectionteam">

      <Anchors upperSectionId={'sectionprices'} lowerSectionId={'sectionskills'} />

      {/*start container*/}
      <div className="container clearfix">

        {/*start titlesection*/}
        <div className="grid_12 titlesection">
          <h1>O meni</h1>
        </div>
        {/*end title section*/}

        {teamMembers.map((member: TeamMember, index) => (
          <div className="grid_3" key={index}>
            <div className="avatar">
              <img className="opacity" alt=""
                   src={member.imageSrc} />
            </div>
            <div className="team">
              <div className="bordertopteam"></div>
              <h2>{member.name}</h2>
              <p>{member.description}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className="socialteam">
              {member.socialLinks.length > 0 && member.socialLinks.map((social: Social) => (
                <a href={social.url}><img className="rotate" alt=""
                                          src={social.icon} /></a>))
              }

            </div>
          </div>
        ))}

        <div className="grid_12 titlesection">
          <h1 style={{ color: 'red' }}>Work in progress... </h1>
        </div>

      </div>
      {/*end container*/}

    </section>

  );
};

export default Team;