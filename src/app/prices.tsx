const Prices = () => {
  return (
    <section id="sectionprices">

      {/*start anchors*/}
      <div className="anchors">
        <div className="contanchors">
          <a href="#sectionportfolio"><img className="anchortop" alt="" src="/img/anchors/topprices.png" /></a>
          <a href="#sectionteam"><img className="anchorbottom" alt="" src="/img/anchors/bottomprices.png" /></a>
        </div>
      </div>
      {/*end anchors*/}


      {/*start container*/}
      <div className="container clearfix">

        {/*start titlesection*/}
        <div className="grid_12 titlesection">
          <h1>Naše cijene</h1>
        </div>
        {/*end title section*/}

        {/*price*/}
        <div className="grid_3 expand">
          <div className="logoprice">
            <img className="rotate" alt=""
                 src="/img/section-prices/price1.png" />
          </div>
          <div className="ribbon">
            <h2>€ XX <span>/kg</span></h2>
          </div>
          <div className="price">
            <p>Cijene sitnih kolača ovise o vrsti, sastojcima i kompleksnosti izrade. U nastavku donosimo okvirne cijene
              po kilogramu:</p>
            <ul>
              <li><p>Klasični domaći kolači (medena pita, mađarica, bajadera, kokos kocke, rum kuglice...):
                XX € / kg</p></li>

              <li><p>Premium kolači s luksuznim sastojcima (pistacija, cheesecake varijante, dekorirani zalogaji):
                XX € / kg</p></li>

              <li><p className="noborder">Specijalni kolači (bezglutenski, keto, veganski):
                XX € / kg</p></li>
            </ul>
            <p className="btn red"><a>Kolači</a></p>
          </div>
          <div className="triangle"></div>
        </div>
        {/*price*/}

        {/*price*/}
        <div className="grid_3 expand">
          <div className="logoprice">
            <img className="rotate" alt="" src="/img/section-prices/price2.png" />
          </div>
          <div className="ribbon">
            <h2>€ XX - <span>Torta</span></h2>
          </div>
          <div className="price">
            <p>Cijena torte ovisi o veličini, okusu, dekoraciji i posebnim zahtjevima. Svaka torta izrađuje se po
              narudžbi, uz dogovor s vama. </p>
            <ul>
              <li><p>Klasične torte (čokoladne, voćne, kombinacije kreme i biskvita):
                XX € / kg</p></li>
              <li><p>Dekorirane torte s temom (rođendani, dječje torte, jednostavni fondant detalji):
                XX € / kg</p></li>
              <li><p className="noborder">Premium i svečane torte (vjenčanja, slojevite torte, zahtjevnija dekoracija,
                fondant obloge):
                XX € / kg</p></li>
            </ul>
            <p className="btn blue"><a>Torte</a></p>
          </div>
          <div className="triangle"></div>
        </div>
        {/*price*/}

        {/*price*/}
        <div className="grid_3 expand">
          <div className="logoprice">
            <img className="rotate" alt="" src="/img/section-prices/price3.png" />
          </div>
          <div className="ribbon">
            <h2>€ XX - <span>Deserti</span></h2>
          </div>
          <div className="price">
            <p>Naši deserti su prava mala remek-djela slatkog užitka! Svaki zalogaj donosi bogatstvo okusa, pažljivo
              odabranih sastojaka i domaću pripremu.</p>
            <ul>
              <li><p>Kolači u čašici</p></li>
              <li><p>Tiramisu</p></li>
              <li><p>Panna cotta</p></li>
              <li><p className="noborder">Princes krafne</p></li>
            </ul>
            <p className="btn yellow"><a>Deserti</a></p>
          </div>
          <div className="triangle"></div>
        </div>
        {/*price*/}

        {/*price*/}
        <div className="grid_3 expand">
          <div className="logoprice">
            <img className="rotate" alt="" src="/img/section-prices/price4.png" />
          </div>
          <div className="ribbon">
            <h2>€ XX - <span>Posebne narudžbe</span></h2>
          </div>
          <div className="price">
            <p>Za posebne narudžbe kreiramo slastice po vašoj želji – birate okuse, boje, oblike i dekoracije.</p>

            <p className="btn green"><a>Posebne želje</a></p>
          </div>
          <div className="triangle"></div>
        </div>
        {/*price*/}

        <div className="grid_12 titlesection">
          <h1 style={{ color: 'red' }}>Cijene nisu usklađene i nisu točne... Work in progress... </h1>
        </div>
      </div>

    </section>
  );
};

export default Prices;