import React from 'react';

const Home = () => {
  return (
    <div
      class="uk-container uk-margin-large-top"
      uk-scrollspy="cls: uk-animation-fade; delay: 100"
    >
      <div class="tas_slider_1 uk-slider">
        <div class="uk-position-relative">
          <div class="uk-slider-container">
            <ul class="uk-slider-items uk-child-width-1-1">
              <li>
                <div
                  class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin
                  uk-grid"
                >
                  <a href="recipe/1/mighty-super-cheesecake.html">
                    <div class="uk-card-media-left uk-cover-container">
                      <img
                        src="images/recipe_1618205715.jpg"
                        alt="Mighty Super Cheesecake"
                        uk-cover
                      />
                      {/* <canvas width="600" height="400"></canvas> */}
                    </div>
                  </a>
                  <div>
                    <div class="uk-card-body uk-text-center uk-text-left@s">
                      <div class="tas_badge uk-label">Desserts</div>

                      <a href="recipe/1/mighty-super-cheesecake.html">
                        <h2 class="uk-card-title">Mighty Super Cheesecake</h2>
                      </a>
                      <hr class="uk-divider-small" />

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>12</span>
                      </div>

                      <p>
                        Nam aliquam sem et tortor consequat. Odio tempor orci
                        dapibus ultrices in iaculis. Vitae proin sagittis nisl
                        rhoncus mattis rhoncus. Sed risus ultricies tristique
                        nulla aliquet. Excepteur sint occaecat cupidatat non
                        proident
                      </p>

                      <ul class="uk-flex-center uk-flex-left@s uk-subnav uk-margin">
                        <li>
                          <span>
                            <i class="tas_icon ti ti-users"></i> 4 Serv.
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-clock"></i> 45 Min
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* <li>
                <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin    uk-grid">
                  <a href="recipe/3/spinach-and-cheese-pasta.html">
                    <div class="uk-card-media-left uk-cover-container">
                      <img
                        src="images/recipe_1619359174.jpg"
                        alt="Spinach and Cheese Pasta"
                        uk-cover
                      />
                      <canvas width="600" height="400"></canvas>
                    </div>
                  </a>
                  <div>
                    <div class="uk-card-body uk-text-center uk-text-left@s">
                      <div class="tas_badge uk-label">Vegan</div>

                      <a href="recipe/3/spinach-and-cheese-pasta.html">
                        <h2 class="uk-card-title">Spinach and Cheese Pasta</h2>
                      </a>
                      <hr class="uk-divider-small" />

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>5</span>
                      </div>

                      <p>
                        Nam aliquam sem et tortor consequat. Odio tempor orci
                        dapibus ultrices in iaculis. Vitae proin sagittis nisl
                        rhoncus mattis rhoncus. Sed risus ultricies tristique
                        nulla aliquet. Excepteur sint occaecat cupidatat non
                        proident
                      </p>

                      <ul
                        class="uk-flex-center uk-flex-left@s uk-subnav"
                        uk-margin
                      >
                        <li>
                          <span>
                            <i class="tas_icon ti ti-users"></i> 4 Serv.
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-clock"></i> 15 Min
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li> */}

              {/* <li>
                <div
                  class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
                  uk-grid
                >
                  <a href="recipe/6/berries-and-banana-smoothie.html">
                    <div class="uk-card-media-left uk-cover-container">
                      <img
                        src="images/recipe_1620059598.jpg"
                        alt="Berries and Banana Smoothie"
                        uk-cover
                      />
                      <canvas width="600" height="400"></canvas>
                    </div>
                  </a>
                  <div>
                    <div class="uk-card-body uk-text-center uk-text-left@s">
                      <div class="tas_badge uk-label">Smoothies</div>

                      <a href="recipe/6/berries-and-banana-smoothie.html">
                        <h2 class="uk-card-title">
                          Berries and Banana Smoothie
                        </h2>
                      </a>
                      <hr class="uk-divider-small" />

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>2</span>
                      </div>

                      <p>
                        Nam aliquam sem et tortor consequat. Odio tempor orci
                        dapibus ultrices in iaculis. Vitae proin sagittis nisl
                        rhoncus mattis rhoncus. Sed risus ultricies tristique
                        nulla aliquet. Excepteur sint occaecat cupidatat non
                        proident
                      </p>

                      <ul
                        class="uk-flex-center uk-flex-left@s uk-subnav"
                        uk-margin
                      >
                        <li>
                          <span>
                            <i class="tas_icon ti ti-users"></i> 1 Serv.
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-clock"></i> 5 Min
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li> */}

              {/* <li>
                <div
                  class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
                  uk-grid
                >
                  <a href="recipe/7/how-to-make-fast-margherita-pizza.html">
                    <div class="uk-card-media-left uk-cover-container">
                      <img
                        src="images/recipe_1620060146.jpg"
                        alt="How to make fast margherita pizza"
                        uk-cover
                      />
                      <canvas width="600" height="400"></canvas>
                    </div>
                  </a>
                  <div>
                    <div class="uk-card-body uk-text-center uk-text-left@s">
                      <div class="tas_badge uk-label">Pizza</div>

                      <a href="recipe/7/how-to-make-fast-margherita-pizza.html">
                        <h2 class="uk-card-title">
                          How to make fast margherita pizza
                        </h2>
                      </a>
                      <hr class="uk-divider-small" />

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>7</span>
                      </div>

                      <p>
                        Nam aliquam sem et tortor consequat. Odio tempor orci
                        dapibus ultrices in iaculis. Vitae proin sagittis nisl
                        rhoncus mattis rhoncus. Sed risus ultricies tristique
                        nulla aliquet. Excepteur sint occaecat cupidatat non
                        proident
                      </p>

                      <ul
                        class="uk-flex-center uk-flex-left@s uk-subnav"
                        uk-margin
                      >
                        <li>
                          <span>
                            <i class="tas_icon ti ti-users"></i> 4 Serv.
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-clock"></i> 45 Min
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li> */}

              {/* <li>
                <div
                  class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
                  uk-grid
                >
                  <a href="recipe/10/blueberries-and-cream-almond-oatmeal.html">
                    <div class="uk-card-media-left uk-cover-container">
                      <img
                        src="images/recipe_1620061767.jpg"
                        alt="Blueberries and Cream almond"
                        uk-cover
                      />
                      <canvas width="600" height="400"></canvas>
                    </div>
                  </a>
                  <div>
                    <div class="uk-card-body uk-text-center uk-text-left@s">
                      <div class="tas_badge uk-label">Breakfast</div>

                      <a href="recipe/10/blueberries-and-cream-almond-oatmeal.html">
                        <h2 class="uk-card-title">
                          Blueberries and Cream almond
                        </h2>
                      </a>
                      <hr class="uk-divider-small" />

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>2</span>
                      </div>

                      <p>
                        Nam aliquam sem et tortor consequat. Odio tempor orci
                        dapibus ultrices in iaculis. Vitae proin sagittis nisl
                        rhoncus mattis rhoncus. Sed risus ultricies tristique
                        nulla aliquet. Excepteur sint occaecat cupidatat non
                        proident
                      </p>

                      <ul
                        class="uk-flex-center uk-flex-left@s uk-subnav"
                        uk-margin
                      >
                        <li>
                          <span>
                            <i class="tas_icon ti ti-users"></i> 2 Serv.
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-clock"></i> 8 Min
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>

        {/* <ul class="tas_dotnav_1 uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
      </div>
    </div>
  );
};

export default Home;
