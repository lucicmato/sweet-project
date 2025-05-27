const Header = () => {
  return (<>
      {/*!--start navigationmenu-->*/}
      <header id="navigationmenu">

        {/*<!--start container-->*/}
        <div className="container clearfix">

          {/* <!--left navigation-->*/}
          <div className="grid_5">
            <nav className="leftnavigation">
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#sectionportfolio">Works</a></li>
                <li><a href="#sectionprices">Prices</a></li>
              </ul>
            </nav>
          </div>
          {/* <!--end left navigation-->*/}

          {/* <!--start logo-->*/}
          <div className="grid_2 logo">
            <img alt="" src="/img/slatkoitocka/logo.png" /> {/*<!--Include your logo with size 180px X 239 px-->*/}
          </div>
          {/* <!--end logo-->*/}

          {/* <!--right navigation-->*/}
          <div className="grid_5">
            <nav className="rightnavigation">
              <ul>
                <li><a href="#sectionteam">Our Team</a></li>
                <li><a href="#sectionskills">Our Skills</a></li>
                <li><a href="#oursocial">Social</a></li>
                <li><a href="#contacts">Contacts</a></li>
              </ul>
            </nav>
          </div>
          {/* <!--end right navigation-->*/}

        </div>
        {/*  <!--end container-->*/}

      </header>
      {/*<!--end navigationmenu-->*/}
    </>
  );

};

export default Header;