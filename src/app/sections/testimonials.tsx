const Testimonials = () => {
  return (
    <section id="testimonials">

      {/*start anchors*/}
      <div className="anchors">
        <div className="contanchors">
          <a href="#services"><img className="anchortop" alt="" src="/img/anchors/toptestimonials.png" /></a>
          <a href="#sectionportfolio"><img className="anchorbottom" alt="" src="/img/anchors/bottomtestimonials.png" /></a>
        </div>
      </div>
      {/*end anchors*/}

      {/*start dark filter*/}
      <div id="darkfilter">

        {/*start container*/}
        <div className="container clearfix">

          {/*top quote*/}
          <div className="grid_12 topquote">
            <img alt="" src="/img/section-testimonials/topquote.png" />
          </div>
          {/*top quote*/}

          {/*left testimonial*/}
          <div className="grid_6 lefttestimonials">
            <h2>Torte su ne samo prekrasne, već i savršeno ukusne! Svaka narudžba je nadmašila naša očekivanja – od
              izgleda do okusa. Preporučujem svima koji žele nešto posebno za svoju proslavu.</h2>
            <p>Bilo je pravo zadovoljstvo surađivati — sve je prošlo glatko, od dogovora do dostave. Tortu su svi gosti
              hvalili, a vizualno je bila pun pogodak. Osjeti se da je rađena s puno pažnje i ljubavi.</p>
          </div>
          {/*end left testimonial*/}

          {/*right testimonial*/}
          <div className="grid_6 righttestimonials">
            <h2>Princez krafne su apsolutno božanstvene! Sve je bilo svježe, ukusno i dostavljeno na vrijeme. Odlična
              usluga i vrhunska kvaliteta, svaka pohvala! </h2>
            <p>Naručili smo princez krafne za obiteljski ručak i bili smo oduševljeni. Kremasti nadjev i lagano
              tijesto čine ih najboljima koje smo ikad probali. Definitivno ćemo ponovno naručivati!
            </p>
          </div>
          {/*right testimonial*/}

          {/*bottom quote*/}
          <div className="grid_12 bottomquote">
            <img alt="" src="/img/section-testimonials/bottomquote.png" />
          </div>
          {/*bottom quote*/}

        </div>
        {/*end container*/}

      </div>
      {/*end dark filter*/}

    </section>
  );
};

export default Testimonials;