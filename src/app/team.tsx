const Team = () => {
  return (
    <section id="sectionteam">

      {/*start anchors*/}
      <div className="anchors">
        <div className="contanchors">
          <a href="#sectionprices"><img className="anchortop" alt="" src="/img/anchors/topteam.png" /></a>
          <a href="#sectionskills"><img className="anchorbottom" alt="" src="/img/anchors/bottomteam.png" /></a>
        </div>
      </div>
      {/*end anchors*/}

      {/*start container*/}
      <div className="container clearfix">

        {/*start titlesection*/}
        <div className="grid_12 titlesection">
          <h1>O meni</h1>
        </div>
        {/*end title section*/}

        {/*start team*/}
        <div className="grid_3">
          <div className="avatar">
            <img className="opacity" alt=""
                 src="/img/section-team/team1.png" />
          </div>
          <div className="team">
            <div className="bordertopteam"></div>
            <h2>Ime i prezime</h2>
            <p>Strastvena slastičarka koja s ljubavlju pretvara ideje u nezaboravne deserte.</p> {/*you can edit*/}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }} className="socialteam">
            <a href="#"><img className="rotate" alt=""
                             src="/img/section-team/instagramicon.png" /></a>
            <a href="#"><img className="rotate" alt=""
                             src="/img/section-team/facebookicon.png" /></a>

          </div>
        </div>
        {/*end team*/}

        <div className="grid_12 titlesection">
          <h1 style={{ color: 'red' }}>Work in progress... </h1>
        </div>

      </div>
      {/*end container*/}

    </section>

  );
};

export default Team;