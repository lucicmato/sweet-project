const Social = () => {
  return (
    <section id="oursocial">

      {/* start anchors */}
      <div className="anchors">
        <div className="contanchors">
          <a href="#sectionskills">
            <img className="anchortop" alt="" src="/img/anchors/topsocial.png" />
          </a>
          <a href="#contacts">
            <img className="anchorbottom" alt="" src="/img/anchors/bottomsocial.png" />
          </a>
        </div>
      </div>
      {/* end anchors */}

      {/* start container */}
      <div className="container clearfix" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        {/* start title section */}
        <div className="grid_12 titlesection">
          <h1>Pratite nas...</h1>
        </div>
        {/* end title section */}

        <div>
          {/* start social icons */}
          <div className="grid_2">
            <a href="https://www.facebook.com/p/Slatko-i-to%C4%8Dka-100077599387672/">
              <img className="rotate" alt="" src="/img/section-oursocial/facebook.png" />
            </a>
          </div>
          <div className="grid_2">
            <a href="https://www.instagram.com/_slatko_i_.tocka_/">
              <img className="rotate" alt="" src="/img/section-oursocial/instagram.png" />
            </a>
          </div>
        </div>

        {/* end social icons */}

      </div>
      {/* end container */}

    </section>
  );
};

export default Social;