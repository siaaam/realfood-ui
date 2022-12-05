import React from 'react';

const RandomRecipies = () => {
  return (
    <div
      class="uk-section uk-section-primary uk-preserve-color uk-margin-top"
      uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100"
    >
      <div class="uk-container">
        <h2 class="tas_heading uk-heading-line uk-text-center">
          <span>Random Recipes</span>
        </h2>

        <div uk-slider="finite: true">
          <div class="uk-position-relative uk-visible-toggle" tabindex="-1">
            <ul
              class="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-3@l"
              uk-grid
              uk-height-match="target: > li > div > .uk-card"
            >
              <li>
                <div class="tas_card_1">
                  <div class="uk-card uk-card-default uk-border-rounded">
                    <a href="recipe/3/spinach-and-cheese-pasta.html">
                      <div class="uk-card-media-top uk-cover-container">
                        <img
                          src="images/recipe_1619359174.jpg"
                          alt="Spinach and Cheese Pasta"
                          uk-cover
                        />
                        <canvas width="600" height="300"></canvas>
                      </div>
                    </a>

                    <div class="uk-card-body">
                      <div class="uk-card-badge uk-label">Vegan</div>

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>5</span>
                      </div>

                      <a
                        class="uk-card-title"
                        href="recipe/3/spinach-and-cheese-pasta.html"
                      >
                        Spinach and Cheese Pasta
                      </a>

                      <ul class="uk-subnav" uk-margin>
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

                    <div class="uk-card-footer">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                          <a href="user/1.html">
                            <div class="uk-cover-container uk-border-circle">
                              <img src="images/1621537827.jpg" uk-cover />
                              <canvas width="40" height="40"></canvas>
                            </div>
                          </a>
                        </div>
                        <div class="uk-width-expand">
                          <h5 class="uk-margin-remove-bottom uk-flex uk-flex-middle">
                            <a class="uk-link-muted" href="user/1.html">
                              Wicombit
                            </a>
                            <img
                              class="verify-badge"
                              width="14"
                              src="assets/img/badge.svg"
                            />
                          </h5>
                          <p class="uk-text-meta uk-margin-remove-top">
                            12/04/2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="tas_card_1">
                  <div class="uk-card uk-card-default uk-border-rounded">
                    <a href="recipe/1/mighty-super-cheesecake.html">
                      <div class="uk-card-media-top uk-cover-container">
                        <img
                          src="images/recipe_1618205715.jpg"
                          alt="Mighty Super Cheesecake"
                          uk-cover
                        />
                        <canvas width="600" height="300"></canvas>
                      </div>
                    </a>

                    <div class="uk-card-body">
                      <div class="uk-card-badge uk-label">Desserts</div>

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>12</span>
                      </div>

                      <a
                        class="uk-card-title"
                        href="recipe/1/mighty-super-cheesecake.html"
                      >
                        Mighty Super Cheesecake
                      </a>

                      <ul class="uk-subnav" uk-margin>
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

                    <div class="uk-card-footer">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                          <a href="user/1.html">
                            <div class="uk-cover-container uk-border-circle">
                              <img src="images/1621537827.jpg" uk-cover />
                              <canvas width="40" height="40"></canvas>
                            </div>
                          </a>
                        </div>
                        <div class="uk-width-expand">
                          <h5 class="uk-margin-remove-bottom uk-flex uk-flex-middle">
                            <a class="uk-link-muted" href="user/1.html">
                              Wicombit
                            </a>
                            <img
                              class="verify-badge"
                              width="14"
                              src="assets/img/badge.svg"
                            />
                          </h5>
                          <p class="uk-text-meta uk-margin-remove-top">
                            14/04/2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="tas_card_1">
                  <div class="uk-card uk-card-default uk-border-rounded">
                    <a href="recipe/9/tasty-croissant-and-tea.html">
                      <div class="uk-card-media-top uk-cover-container">
                        <img
                          src="images/recipe_1620061168.jpg"
                          alt="Tasty croissant and tea"
                          uk-cover
                        />
                        <canvas width="600" height="300"></canvas>
                      </div>
                    </a>

                    <div class="uk-card-body">
                      <div class="uk-card-badge uk-label">Breakfast</div>

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>2</span>
                      </div>

                      <a
                        class="uk-card-title"
                        href="recipe/9/tasty-croissant-and-tea.html"
                      >
                        Tasty croissant and tea
                      </a>

                      <ul class="uk-subnav" uk-margin>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-users"></i> 3 Serv.
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-clock"></i> 25 Min
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div class="uk-card-footer">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                          <a href="user/1.html">
                            <div class="uk-cover-container uk-border-circle">
                              <img src="images/1621537827.jpg" uk-cover />
                              <canvas width="40" height="40"></canvas>
                            </div>
                          </a>
                        </div>
                        <div class="uk-width-expand">
                          <h5 class="uk-margin-remove-bottom uk-flex uk-flex-middle">
                            <a class="uk-link-muted" href="user/1.html">
                              Wicombit
                            </a>
                            <img
                              class="verify-badge"
                              width="14"
                              src="assets/img/badge.svg"
                            />
                          </h5>
                          <p class="uk-text-meta uk-margin-remove-top">
                            12/04/2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="tas_card_1">
                  <div class="uk-card uk-card-default uk-border-rounded">
                    <a href="recipe/8/crispy-burger-with-blue-cheese.html">
                      <div class="uk-card-media-top uk-cover-container">
                        <img
                          src="images/recipe_1620060348.jpg"
                          alt="Crispy Burger with Blue Cheese"
                          uk-cover
                        />
                        <canvas width="600" height="300"></canvas>
                      </div>
                    </a>

                    <div class="uk-card-body">
                      <div class="uk-card-badge uk-label">Burger</div>

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>2</span>
                      </div>

                      <a
                        class="uk-card-title"
                        href="recipe/8/crispy-burger-with-blue-cheese.html"
                      >
                        Crispy Burger with Blue Cheese
                      </a>

                      <ul class="uk-subnav" uk-margin>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-users"></i> 4 Serv.
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-clock"></i> 30 Min
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div class="uk-card-footer">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                          <a href="user/1.html">
                            <div class="uk-cover-container uk-border-circle">
                              <img src="images/1621537827.jpg" uk-cover />
                              <canvas width="40" height="40"></canvas>
                            </div>
                          </a>
                        </div>
                        <div class="uk-width-expand">
                          <h5 class="uk-margin-remove-bottom uk-flex uk-flex-middle">
                            <a class="uk-link-muted" href="user/1.html">
                              Wicombit
                            </a>
                            <img
                              class="verify-badge"
                              width="14"
                              src="assets/img/badge.svg"
                            />
                          </h5>
                          <p class="uk-text-meta uk-margin-remove-top">
                            12/04/2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="tas_card_1">
                  <div class="uk-card uk-card-default uk-border-rounded">
                    <a href="recipe/10/blueberries-and-cream-almond-oatmeal.html">
                      <div class="uk-card-media-top uk-cover-container">
                        <img
                          src="images/recipe_1620061767.jpg"
                          alt="Blueberries and Cream almond"
                          uk-cover
                        />
                        <canvas width="600" height="300"></canvas>
                      </div>
                    </a>

                    <div class="uk-card-body">
                      <div class="uk-card-badge uk-label">Breakfast</div>

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>2</span>
                      </div>

                      <a
                        class="uk-card-title"
                        href="recipe/10/blueberries-and-cream-almond-oatmeal.html"
                      >
                        Blueberries and Cream almond
                      </a>

                      <ul class="uk-subnav" uk-margin>
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

                    <div class="uk-card-footer">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                          <a href="user/1.html">
                            <div class="uk-cover-container uk-border-circle">
                              <img src="images/1621537827.jpg" uk-cover />
                              <canvas width="40" height="40"></canvas>
                            </div>
                          </a>
                        </div>
                        <div class="uk-width-expand">
                          <h5 class="uk-margin-remove-bottom uk-flex uk-flex-middle">
                            <a class="uk-link-muted" href="user/1.html">
                              Wicombit
                            </a>
                            <img
                              class="verify-badge"
                              width="14"
                              src="assets/img/badge.svg"
                            />
                          </h5>
                          <p class="uk-text-meta uk-margin-remove-top">
                            12/04/2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="tas_card_1">
                  <div class="uk-card uk-card-default uk-border-rounded">
                    <a href="recipe/7/how-to-make-fast-margherita-pizza.html">
                      <div class="uk-card-media-top uk-cover-container">
                        <img
                          src="images/recipe_1620060146.jpg"
                          alt="How to make fast margherita pizza"
                          uk-cover
                        />
                        <canvas width="600" height="300"></canvas>
                      </div>
                    </a>

                    <div class="uk-card-body">
                      <div class="uk-card-badge uk-label">Pizza</div>

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>7</span>
                      </div>

                      <a
                        class="uk-card-title"
                        href="recipe/7/how-to-make-fast-margherita-pizza.html"
                      >
                        How to make fast margherita pizza
                      </a>

                      <ul class="uk-subnav" uk-margin>
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

                    <div class="uk-card-footer">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                          <a href="user/2.html">
                            <div class="uk-cover-container uk-border-circle">
                              <img src="images/1621975380.png" uk-cover />
                              <canvas width="40" height="40"></canvas>
                            </div>
                          </a>
                        </div>
                        <div class="uk-width-expand">
                          <h5 class="uk-margin-remove-bottom uk-flex uk-flex-middle">
                            <a class="uk-link-muted" href="user/2.html">
                              Hanan
                            </a>
                          </h5>
                          <p class="uk-text-meta uk-margin-remove-top">
                            12/04/2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="tas_card_1">
                  <div class="uk-card uk-card-default uk-border-rounded">
                    <a href="recipe/5/brownies-with-walnuts.html">
                      <div class="uk-card-media-top uk-cover-container">
                        <img
                          src="images/recipe_1620058937.jpg"
                          alt="Brownies with Walnuts"
                          uk-cover
                        />
                        <canvas width="600" height="300"></canvas>
                      </div>
                    </a>

                    <div class="uk-card-body">
                      <div class="uk-card-badge uk-label">Desserts</div>

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>2</span>
                      </div>

                      <a
                        class="uk-card-title"
                        href="recipe/5/brownies-with-walnuts.html"
                      >
                        Brownies with Walnuts
                      </a>

                      <ul class="uk-subnav" uk-margin>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-users"></i> 3 Serv.
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-clock"></i> 25 Min
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div class="uk-card-footer">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                          <a href="user/1.html">
                            <div class="uk-cover-container uk-border-circle">
                              <img src="images/1621537827.jpg" uk-cover />
                              <canvas width="40" height="40"></canvas>
                            </div>
                          </a>
                        </div>
                        <div class="uk-width-expand">
                          <h5 class="uk-margin-remove-bottom uk-flex uk-flex-middle">
                            <a class="uk-link-muted" href="user/1.html">
                              Wicombit
                            </a>
                            <img
                              class="verify-badge"
                              width="14"
                              src="assets/img/badge.svg"
                            />
                          </h5>
                          <p class="uk-text-meta uk-margin-remove-top">
                            12/04/2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="tas_card_1">
                  <div class="uk-card uk-card-default uk-border-rounded">
                    <a href="recipe/6/berries-and-banana-smoothie.html">
                      <div class="uk-card-media-top uk-cover-container">
                        <img
                          src="images/recipe_1620059598.jpg"
                          alt="Berries and Banana Smoothie"
                          uk-cover
                        />
                        <canvas width="600" height="300"></canvas>
                      </div>
                    </a>

                    <div class="uk-card-body">
                      <div class="uk-card-badge uk-label">Smoothies</div>

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>2</span>
                      </div>

                      <a
                        class="uk-card-title"
                        href="recipe/6/berries-and-banana-smoothie.html"
                      >
                        Berries and Banana Smoothie
                      </a>

                      <ul class="uk-subnav" uk-margin>
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

                    <div class="uk-card-footer">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                          <a href="user/1.html">
                            <div class="uk-cover-container uk-border-circle">
                              <img src="images/1621537827.jpg" uk-cover />
                              <canvas width="40" height="40"></canvas>
                            </div>
                          </a>
                        </div>
                        <div class="uk-width-expand">
                          <h5 class="uk-margin-remove-bottom uk-flex uk-flex-middle">
                            <a class="uk-link-muted" href="user/1.html">
                              Wicombit
                            </a>
                            <img
                              class="verify-badge"
                              width="14"
                              src="assets/img/badge.svg"
                            />
                          </h5>
                          <p class="uk-text-meta uk-margin-remove-top">
                            12/04/2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="tas_card_1">
                  <div class="uk-card uk-card-default uk-border-rounded">
                    <a href="recipe/2/broad-beans-tomato-garlic-mozzarella-cheese-bruschetta.html">
                      <div class="uk-card-media-top uk-cover-container">
                        <img
                          src="images/recipe_1620056120.jpg"
                          alt="Mozzarella Cheese Bruschetta"
                          uk-cover
                        />
                        <canvas width="600" height="300"></canvas>
                      </div>
                    </a>

                    <div class="uk-card-body">
                      <div class="uk-card-badge uk-label">Pasta</div>

                      <div class="tas_rating">
                        <img src="assets/img/like.svg" />
                        <span>1</span>
                      </div>

                      <a
                        class="uk-card-title"
                        href="recipe/2/broad-beans-tomato-garlic-mozzarella-cheese-bruschetta.html"
                      >
                        Mozzarella Cheese Bruschetta
                      </a>

                      <ul class="uk-subnav" uk-margin>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-users"></i> 2 Serv.
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="tas_icon ti ti-clock"></i> 5 Min
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div class="uk-card-footer">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                          <a href="user/1.html">
                            <div class="uk-cover-container uk-border-circle">
                              <img src="images/1621537827.jpg" uk-cover />
                              <canvas width="40" height="40"></canvas>
                            </div>
                          </a>
                        </div>
                        <div class="uk-width-expand">
                          <h5 class="uk-margin-remove-bottom uk-flex uk-flex-middle">
                            <a class="uk-link-muted" href="user/1.html">
                              Wicombit
                            </a>
                            <img
                              class="verify-badge"
                              width="14"
                              src="assets/img/badge.svg"
                            />
                          </h5>
                          <p class="uk-text-meta uk-margin-remove-top">
                            12/04/2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <ul class="tas_dotnav_2 uk-slider-nav uk-dotnav uk-flex-center uk-margin-large-top"></ul>
        </div>
      </div>
    </div>
  );
};

export default RandomRecipies;
