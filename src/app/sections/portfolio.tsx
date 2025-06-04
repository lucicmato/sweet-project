import Anchors from '@/app/components/anchors';

const Portfolio = () => {
  return (
    <section id="sectionportfolio">
      <Anchors upperSectionId={'testimonials'} lowerSectionId={'sectionprices'} />

      {/*start container*/}
      <div className="container clearfix">
        {/*start titlesection*/}
        <div className="grid_12 titlesection">
          <h1>Galerija :) </h1>
        </div>
        {/*end title section*/}

        {/*start options*/}
        <div className="grid_12">
          <div id="options" className="clear">
            <ul id="filters" className="option-set clearfix" data-option-key="filter">
              <li className="orange">
                <a href="#filter" data-option-value="*" className="selected">
                  Prikaži sve
                </a>
              </li>
              <li className="blue">
                <a href="#filter" data-option-value=".blue">
                  Kolači
                </a>
              </li>
              <li className="yellow">
                <a href="#filter" data-option-value=".yellow">
                  Torte
                </a>
              </li>
              <li className="navi">
                <a href="#filter" data-option-value=".green">
                  Deserti
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/*PLACEHOLDER*/}

        <div className="grid_12 titlesection">
          <h1 style={{ color: 'red' }}>Galerija se trenutno radi... Work in progress... </h1>
        </div>
      </div>
      {/*end container*/}
    </section>
  );
};

export default Portfolio;
