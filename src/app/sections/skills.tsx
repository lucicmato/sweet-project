import Anchors from '@/app/components/anchors';

const Skills = () => {

  return (
    <section id="sectionskills">

      <Anchors upperSectionId={'sectionteam'} lowerSectionId={'oursocial'} />

      {/*start container*/}
      <div className="container clearfix">

        {/*start titlesection*/}
        <div className="grid_12 titlesection">
          <h1>Naša kvaliteta</h1>
        </div>
        {/*end title section*/}

        {/*start left content*/}
        <div className="grid_5">

          {/*skill*/}
          <div className="skilldescription">
            <div id="operator"></div>
            <img alt=""
                 src="/img/section-skills/icon1.png" />
            <h2>Kolači</h2>
            <p>Naši kolači su čista čarolija u zalogaju – savršeno izbalansirani okusi, domaći sastojci i izgled koji
              mami osmijeh. Bilo da se radi o klasičnim receptima ili modernim kombinacijama, svaki kolač izrađen je s
              puno pažnje i ljubavi.</p>
          </div>
          {/*skill*/}

          {/*skill*/}
          <div className="skilldescription">
            <img alt=""
                 src="/img/section-skills/icon2.png" /> {/*you can edit the image, open the psd file for the vector image format*/}
            <h2>Torte</h2> {/*you can edit*/}
            <p>Naše torte su prava mala remek-djela – vizualno očaravaju, a okusom obaraju s nogu. Svaki sloj pažljivo
              je osmišljen da spoji bogate kreme, sočne biskvite i neodoljive detalje u tortu koja se
              pamti.</p> {/*you can edit*/}
          </div>
          {/*skill*/}

          {/*skill*/}
          <div className="skilldescription">
            <img alt=""
                 src="/img/section-skills/icon3.png" /> {/*you can edit the image, open the psd file for the vector image format*/}
            <h2>Deserti</h2> {/*you can edit*/}
            <p>Naše princez krafne su apsolutno neodoljive – lagano, prozračno tijesto i bogata, kremasta punjenja
              stvaraju savršen spoj okusa. Ručno rađene s puno pažnje, postale su naš prepoznatljiv desert koji svi
              obožavaju.</p> {/*you can edit*/}
          </div>
          {/*skill*/}

        </div>
        {/*end left content*/}

        {/*start clip*/}
        <div className="grid_2 clip">
          <img className="opacity" alt="" src="/img/section-skills/clip.png" />
        </div>
        {/*end clip*/}

        <div className="grid_5">

          <div id="allprogresbar">

            {/*progresbar*/}
            <div className="progresbar">
              <p>SVJEŽE VOĆE</p> {/*you can edit*/}
              <p className="numberbar">100</p> {/*you can edit*/}
              <div><span className="fivebar"></span></div>
              {/*edit the respective css className in style.css */}
            </div>

            {/*progresbar*/}
            <div className="progresbar">
              <p>RUČNA IZRADA</p> {/*you can edit*/}
              <p className="numberbar">100</p> {/*you can edit*/}
              <div><span className="fivebar"></span></div>
              {/*edit the respective css className in style.css */}
            </div>

            {/*progresbar*/}
            <div className="progresbar">
              <p>DOMAĆI SASTOJCI</p> {/*you can edit*/}
              <p className="numberbar">100</p> {/*you can edit*/}
              <div><span className="fivebar"></span></div>
              {/*edit the respective css className in style.css */}
            </div>

            {/*progresbar*/}
            <div className="progresbar">
              <p>ESTETIKA</p> {/*you can edit*/}
              <p className="numberbar">100</p> {/*you can edit*/}
              <div><span className="fivebar"></span></div>
              {/*edit the respective css className in style.css */}
            </div>

          </div>

        </div>

      </div>
      {/*end container*/}

    </section>
  );
};

export default Skills;