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
        {/*end title section*/}

        {/*start our services*/}

        {/*Service*/}
        <div className="grid_4">
          <img className="rotate" alt=""
               src="/img/section-services/service2.png" />
          <h2>Izrada kolača</h2>
          <p>Naša slastičarska radionica s ljubavlju izrađuje domaće kolače prema tradicionalnim receptima i modernim
            slatkim trendovima.
          </p>
        </div>

        {/*Service*/}
        <div className="grid_4">
          <img className="rotate" alt="" src="/img/section-services/service1.png" />
          <h2>Najbolje torte</h2>
          <p>Specijalizirani smo za izradu torti po narudžbi koje spajaju prepoznatljiv izgled i bogat okus. </p>
        </div>
        {/*Service*/}

        {/*Service*/}
        <div className="grid_4">
          <img className="rotate" alt="" src="/img/section-services/service3.png" />
          <h2>Deserti</h2>
          <p>Specijalizirani smo za izradu domaćih deserata, a posebno naših princez krafni s laganim tijestom i
            bogatim, kremastim punjenjem.</p>
        </div>
        {/*Service*/}

        {/*Service*/}
        <div className="grid_4">
          <img className="rotate" alt="" src="/img/section-services/service4.png" />
          <h2>Zajedno planiramo meni</h2>
          <p>Zajedno s vama planiramo desertni meni kako bismo svaki detalj prilagodili vašim željama i prigodi.</p>
        </div>
        {/*Service*/}

        {/*Service*/}
        <div className="grid_4">
          <img className="rotate" alt="" src="/img/section-services/service5.png" />
          <h2>Recepti</h2>
          <p>Naši provjereni recepti donose savršen spoj tradicije i kreativnosti, idealni za pripremu ukusnih domaćih
            deserata. </p>
        </div>
        {/*Service*/}

        {/*Service*/}
        <div className="grid_4">
          <img className="rotate" alt="" src="/img/section-services/service6.png" />
          <h2>Kućna dostava</h2>
          <p>Vaše slastice sigurno i pažljivo dostavljamo na željenu adresu. Brinemo da svaki desert stigne svjež i
            netaknut, spreman za posluživanje.</p>
        </div>
        {/*Service*/}

        {/*end our services*/}

      </div>
      {/*end container*/}

    </section>
  );
};

export default Services;