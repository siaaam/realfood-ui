import React from 'react';

const Footer = () => {
  return (
    <div class="tas-footer">
      <div class="uk-container">
        <div class="tas-widgets uk-grid-large uk-grid">
          <div class="uk-width-1-1 uk-width-1-2@s uk-width-1-2@m">
            <h4 class="tas-title">About Us</h4>
            <p class="tas-about">
              An About Us page helps your company make a good first impression,
              and is critical for building custo
            </p>
            <ul class="tas-follow uk-iconnav">
              <li>
                <a
                  href="https://www.facebook.com/"
                  uk-icon="icon: facebook"
                ></a>
              </li>
              <li>
                <a href="https://twitter.com/home" uk-icon="icon: twitter"></a>
              </li>

              <li>
                <a href="https://www.youtube.com/" uk-icon="icon: youtube"></a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  uk-icon="icon: linkedin"
                ></a>
              </li>
            </ul>
          </div>
          <div class="uk-width-1-1 uk-width-1-2@s uk-width-1-4@m">
            <h4 class="tas-title">Quick Links</h4>
            <ul class="uk-list">
              <li>
                <a href="https://wicombit.com/demo/realfood" target="_self">
                  Home Page
                </a>
              </li>
              <li>
                <a href="privacy-policy.html" target="_self">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="terms-and-conditions.html" target="_self">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div class="uk-width-1-1 uk-width-1-2@s uk-width-1-4@m">
            <h4 class="tas-title">Newsletter</h4>

            <div class="new-subscriber">
              <form>
                <div class="uk-inline uk-width-1-1">
                  <i class="ti ti-at uk-form-icon"></i>
                  <input
                    type="email"
                    id="subscriber_email"
                    name="subscriber_email"
                    class="uk-input uk-width-1-1 uk-form-large uk-border-pill"
                    placeholder="Email Address"
                  />
                </div>
                <button
                  class="uk-button uk-width-1-1 uk-button-large uk-button-primary uk-border-pill uk-margin-small-top"
                  value="Suscribe Now"
                  type="submit"
                  id="submit-subscriber"
                >
                  Suscribe Now
                </button>

                <div id="showresults"></div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="tas-copyright">
        <div class="uk-container">
          <div uk-grid>
            <div class="uk-width-1-1 uk-text-center">© 2021 Real Food</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
