import React from 'react';

const Header = () => {
  return (
    <>
      <div className="uk-section-primary uk-visible@m">
        <div className="uk-container">
          <div className="tas_top_nav uk-padding-small">
            <div className="uk-container">
              <nav
                className="uk-navbar-container uk-navbar-transparent
                uk-navbar"
              >
                <div className="uk-navbar-left">
                  <a
                    className="uk-navbar-item uk-logo"
                    href="https://wicombit.com/demo/realfood"
                  >
                    <img src="images/1618276318.png" />
                  </a>
                </div>

                <div className="uk-navbar-center">
                  <ul className="uk-navbar-nav">
                    <li>
                      <a
                        href="https://wicombit.com/demo/realfood"
                        target="_self"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="search.html" target="_self">
                        Search
                      </a>
                    </li>
                    <li>
                      <a href="members.html" target="_self">
                        Members
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <a
                    className="uk-button uk-button-default uk-text-truncate uk-border-pill"
                    href="signin.html"
                  >
                    <i className="ti ti-plus"></i> Create Recipe
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <nav
        class="tas_mobile_nav uk-navbar-container uk-padding uk-hidden@m"
        uk-navbar
      >
        <div class="uk-navbar-left">
          <a
            class="uk-button uk-button-link tas_button"
            href="index.html#sidemenu"
            uk-toggle
          >
            <i class="ti ti-align-justified"></i>
          </a>
        </div>

        <div class="uk-navbar-center">
          <a
            class="uk-navbar-item uk-logo"
            href="https://wicombit.com/demo/realfood"
          >
            <img src="images/1618276318.png" />
          </a>
        </div>

        <div class="uk-navbar-right">
          <a class="uk-button uk-button-link tas_button" href="search.html">
            <i class="ti ti-search"></i>
          </a>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
