const Contacts = () => {
  return (
    <footer id="contacts">

      <div className="topwaves"></div>
      {/*waves*/}

      {/*/!*anchor back to top*!/*/}
      {/*<a className="backtotop" href="#navigationmenu">*/}
      {/*  <img alt="" src="/img/anchors/backtotop.png" />*/}
      {/*</a>*/}
      {/*/!*end anchor back to top*!/*/}


      {/*  /!*big marker*!/*/}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
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
      </div>
      {/*end big marker*/}

      {/*little marker*/}
      <div id="littlemarker" className="rotate">
        <a href="#"> <img alt="" src="/img/section-contact/littlemarker.png" /></a>
      </div>
      {/*end little marker*/}


    </footer>
  );
};

export default Contacts;
