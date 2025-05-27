const Contacts = () => {
  return (
    <footer id="contacts">

      <div className="topwaves"></div>
      {/*waves*/}

      {/*anchor back to top*/}
      <a className="backtotop" href="#navigationmenu">
        <img alt="" src="/img/anchors/backtotop.png" />
      </a>
      {/*end anchor back to top*/}

      {/*/!*all markers*!/*/}
      <div id="markers">

        {/*  /!*big marker*!/*/}
        {/*<div id="bigmarker">*/}
        <h1>Slatko i točka</h1>
        <ul>
          <li>
            <p>Srijemska ulica 62, OSIJEK</p> {/*insert your address*/}
          </li>
          <li>
            <p>Telefon: 0998335271</p> {/*insert your telephone number*/}
          </li>
          <li>
            <p>Mail:
              <a title="Kontaktiraj me ♥"
                 href="mailto:slatkoitocka@gmail.com">slatkoitocka@gmail.com</a>
            </p>
          </li>
        </ul>
        {/*</div>*/}
        {/*  /!*end big marker*!/*/}

        {/*  /!*little marker*!/*/}
        {/*  <div id="littlemarker" className="rotate">*/}
        {/*    <img alt="" src="img/section-contact/littlemarker.png" />*/}
        {/*  </div>*/}
        {/*  /!*end little marker*!/*/}

        {/*  /!*little marker close: need for js effect*!/*/}
        {/*  <div id="littlemarkerclose" className="rotate">*/}
        {/*    <img alt="" src="img/section-contact/littlemarkerclose.png" />*/}
        {/*  </div>*/}
        {/*  /!*end little marker*!/*/}

      </div>
      {/*/!*end all markers*!/*/}

      {/*google maps*/}
      {/*<div id="map-canvas"></div>*/}
      {/*google maps*/}

    </footer>
  );
};

export default Contacts;
