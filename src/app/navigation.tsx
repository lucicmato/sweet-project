const Navigation = () => {
  return (
    <>
      <header id="navigationmenu">
        {/*<!--start container-->*/}
        <div className="container clearfix">
          {/* <!--left navigation-->*/}
          <div className="grid_5">
            <nav className="leftnavigation">
              <ul>
                <li>
                  <a href="#sectionteam">O meni</a>
                </li>
                <li>
                  <a href="#services">Usluge</a>
                </li>
                <li>
                  <a href="#sectionskills">Što nudimo</a>
                </li>
                <li>
                  <a href="#sectionportfolio">Galerija</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!--end left navigation-->*/}

          {/* <!--start logo-->*/}
          <div className="grid_2 logo">
            <img alt="Logo" src="/img/slatkoitocka/logo.png" />
            {/*<!--Include your logo with size 180px X 239 px-->*/}
          </div>
          {/* <!--end logo-->*/}

          {/* <!--right navigation-->*/}
          <div className="grid_5">
            <nav className="rightnavigation">
              <ul>
                <li>
                  <a href="#sectionprices">Cijene</a>
                </li>
                <li>
                  <a href="#testimonials">Osvrti</a>
                </li>
                <li>
                  <a href="#oursocial">Pratite nas</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!--end right navigation-->*/}
        </div>
        {/*  <!--end container-->*/}
      </header>
    </>
  );
};

export default Navigation;
