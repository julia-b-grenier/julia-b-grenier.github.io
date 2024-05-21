<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div id="page" class="container-fluid m-0 p-0">
      <header>
          <nav class="navbar navbar-expand-md navbar-dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">My Portfolio</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                  <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" target="_blank" href="https://github.com/julia-b-grenier">GitHub</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/julia-b-grenier/">LinkedIn</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" title="PDF of my resume" target="_blank" href="cvs/CV_JuliaBGrenier_en.pdf">Resume</a>
                  </li>
              </ul>
              </div>
          </div>
          </nav>
      </header>

      <div>
          <!-- skillmessaging and featurettes
          ================================================== -->
          <!-- Wrap the rest of the page in another container to center all the content. -->

          <div class="container skill">

          <!-- START THE FEATURETTES -->

          <div id="presentation" class="row featurette pt-5" v-motion-fade-visible-once >
              <div class="col-md-7">
              <h1 class="featurette-heading fw-normal lh-1 ml12">Julia B.Grenier</h1>
              <h2 class="fw-light lh-2 mb-4">Software Engineering Student</h2>
              <p class="fw-normal">I'm currently completing my third year at McGill University.</p>
              <p class="fw-normal">I love making games, software and web app!!</p>
              <p class="fw-normal">I'm also a member of GameDev, the game development student society of McGill University.</p>
              <p class="fw-normal">When I'm not coding, I love doing badminton and trying out new board games.</p>
              
              </div>
              <div class="col-md-5 text-center my-auto">
              <img width="300" height="300" class="rounded-circle" id="pfp" src="/src/assets/img/pfp.jpg" alt="Julia B.Grenier profil picture"/>
              </div>
          </div>

          <hr class="featurette-divider">
          <!-- Three columns of text below -->
          <div id="Skill-section" class="row"  v-motion-slide-visible-once-bottom >
              <h1 class="fw-normal text-center pt-0 mb-4">Skills</h1>
              <div class="col-lg-4">
                  <div class="d-flex flex-row justify-content-around align-items-center mb-2">
                      <div class="svg-container">
                          <img class="bd-placeholder-img svg-icon" src="/src/assets/img/cpp.svg" alt="C++ programming language logo"/>
                      </div>
                      <div class="svg-container">
                          <img class="bd-placeholder-img svg-icon" src="/src/assets/img/qt.svg" alt="Qt logo"/>
                      </div>
                      <div class="svg-container">
                          <img class="bd-placeholder-img svg-icon" src="/src/assets/img/sfml-icon.svg" alt="SFML library logo"/>
                      </div>
                  </div>
                  <p>After making small projects and games using C++, I apply my knowledge during my software engineering internship last summer!</p>
              </div><!-- /.col-lg-4 -->
              <div class="col-lg-4">
                  <img class="bd-placeholder-img svg-icon mb-2" src="/src/assets/img/python.svg" alt="Python programming language logo"/>
                  <p>I used my knowledge in Python to program a machine-learning model during the CodeML hackathon.</p>
                  <p><a class="btn btn-secondary" href="#CodeML">View project &raquo;</a></p>
              </div><!-- /.col-lg-4 -->
              <div class="col-lg-4">
                  <div class="d-flex flex-row justify-content-around align-items-center mb-2">
                      <div class="svg-container">
                          <img class="bd-placeholder-img svg-icon mb-2" src="/src/assets/img/csharp.svg" alt="C# programming language logo"/>
                      </div>
                      <div class="svg-container">
                          <img class="bd-placeholder-img svg-icon" src="/src/assets/img/unity.svg" alt="Unity logo"/>
                      </div>
                  </div>
                  <p>With Unity, I developed in a team of 5 a 2D game called "All Rat Remains" during the McGameJam Hackathon.</p>
                  <p><a class="btn btn-secondary" href="#AllRatRemains">View project &raquo;</a></p>
              </div><!-- /.col-lg-4 -->
              <div class="col-lg-4">
                  <div class="d-flex flex-row justify-content-around align-items-center mb-2">
                      <div class="svg-container">
                          <img class="bd-placeholder-img svg-icon mb-2" src="/src/assets/img/java.svg" alt="Java programming language logo"/>
                      </div>
                      <div class="svg-container">
                          <img class="bd-placeholder-img svg-icon" src="/src/assets/img/spring-boot.svg" alt="Unity logo"/>
                      </div>
                  </div>
                  <p>I developed a desktop application in Java using JavaFX and a web application using Spring Boot.</p>
                  <div>
                      <a class="btn btn-secondary" href="#AssetPlus">View Desktop App &raquo;</a>
                      <a class="btn btn-secondary m-1" href="#FitHub">View Web App &raquo;</a>
                  </div>
              </div><!-- /.col-lg-4 -->
              <div class="col-lg-4">
                  <div class="d-flex flex-row justify-content-around align-items-center">
                      <div class="svg-container">
                      <img class="bd-placeholder-img svg-icon" src="/src/assets/img/html.svg" alt="HTML"/>
                      </div>
                      <div class="svg-container">
                      <img class="bd-placeholder-img svg-icon" src="/src/assets/img/css.svg" alt="CSS"/>
                      </div>
                      <div class="svg-container">
                      <img class="bd-placeholder-img svg-icon" src="/src/assets/img/javascript.svg" alt="JavaScript"/>
                      </div>
                      <div class="svg-container">
                      <img class="bd-placeholder-img svg-icon" src="/src/assets/img/vue-js-icon.svg" alt="Vue.js"/>
                  </div>
              </div>
              <div class="row mt-3">
                  <p>I am trying to learn more about Web Development by coding this website! I am using Bootstrap for responsive design.</p>
              </div>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
              <div class="d-flex flex-row justify-content-around align-items-center mb-2">
                  <div class="svg-container">
                      <img class="bd-placeholder-img svg-icon mb-2" src="/src/assets/img/git.svg" alt="Java programming language logo"/>
                  </div>
                  <img class="bd-placeholder-img png-icon" src="/src/assets/img/perforce.png" alt="Perforce logo"/>
              </div>
              <p>I have experience using different version control system such as Git and Perforce.</p>
          </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->

      <hr class="featurette-divider">

      <h1 class="fw-normal text-center">Software Engineering Experience</h1>

      <div id="Software Engineering Internship" ></div>
          <div class="row featurette" v-motion-slide-visible-once-right>
              <div class="">
              <h2 class="featurette-heading fw-normal">Software Engineer Intern</h2>
              <h3 class="fw-normal lh-3">Mirametrix Inc., C++</h3>
              <ul class="lead">
                  <li>Identified and resolved over 15 bugs in the C++ codebase to enhance overall software quality, using strong problem-solving and debugging abilities. </li>
                  <li>Utilized Perforce as the primary version control system, effectively managing code, tracking changes, and facilitating adherence to a structured agile development process. </li>
                  <li>Engaged in code reviews, providing suggestions to team members, resulting in improved code quality. </li>
                  <li>Participated in daily stand-up meetings following the Scrum methodology to foster open communication and provide updates on the progress of tasks tracked on Jira, the project management tool</li>
              </ul>
              </div>
          </div>

          <hr class="featurette-divider">
          <h1 class="fw-normal text-center pb-4 mb-4">Projects</h1>

          <div id="FitHub"></div>
          <div class="row featurette" v-motion-slide-visible-once-right>
              <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">FitHub</h2>
              <h3 class="fw-normal lh-3">Full Stack Web Application, Java</h3>
              <ul class="lead">
                  <li>Designed and developed a full-stack web application for managing a local sport center, providing a platform for owners and instructors to schedule classes and enabling customers to register for sessions.</li>
                  <li>Spring Boot for the backend, Vue.js for the frontend, and PostgreSQL for the database to create a seamless and efficient user experience.</li>
                  <li>RESTful APIs with Spring Boot to handle CRUD operations, user authentication, and data validation, ensuring secure and reliable data management.</li>
              </ul>
              <p><a class="btn btn-secondary" target="_blank" href="https://github.com/McGill-ECSE321-Winter2024/FitHub/wiki/Screenshots">See more! &raquo;</a></p>
              </div>
              <div class="col-md-5">
              <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mb-1" width="400" src="/src/assets/img/FitHub_login.png" alt="FitHub Login Page" />
              <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" src="/src/assets/img/FitHub_explore.png" alt="FitHub Explore Page" />
              </div>
          </div>

          <div id="AssetPlus"></div>
          <hr class="featurette-divider">
          <div class="row featurette" v-motion-slide-visible-once-left>
              <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">AssetPlus</h2>
              <h3 class="fw-normal lh-3">Desktop Application, Java</h3>
              <ul class="lead">
                  <li>Developed a modern desktop application using Java and JavaFX in a team of 6 with an appealing UI that keeps track of the defective assets in a hotel.</li>
                  <li>Utilized Umple to generate Java code from models, significantly reducing development time.</li>
                  <li>Implemented tests applying the concepts of behavior-driven development using Junit, Gherkin, and Cucumber.io</li>
                  <li>Employed Git to manage the codebase efficiently by making pull requests and reviewing and merging them.</li>
                  <li>Won the title "Best Application" against 15 other teams after presenting the app's efficiency and showcasing the additional features added, such as multi-language support.</li>
              </ul>
              <p><a class="btn btn-secondary" target="_blank" href="https://github.com/F2023-ECSE223/ecse223-group-project-p12/wiki/Iterations-4%E2%80%905">See more! &raquo;</a></p>
              </div>
              
              <div class="col-md-5">
              <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mb-1" width="500" src="/src/assets/img/assetplus.png" alt="AssetPlus" />
              <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" src="/src/assets/img/assetplus2.png" alt="AssetPlus" />
              </div>
          </div>

          <div id="CoveoBlitz"></div>
          <hr class="featurette-divider">
          <div class="row featurette" v-motion-slide-visible-once-right>
              <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">Coveo Blitz</h2>
              <h3 class="fw-normal lh-3">Programming competition, Python</h3>
              <ul class="lead">
                  <li>Coded in a team of 4 an algorithm that builds defensive structures in a "Tower Defense" game to defeat the other groups.</li>
                  <li>Discussed with my team the different strategies to implement in the game and used Git to manage the different versions.</li>
              </ul>
              </div>
              <div class="col-md-5 order-md-1">
              <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" src="/src/assets/img/coveoblitz.png" alt="CoveoBlitz" />
              </div>
          </div>

          <div id="AllRatRemains"></div>
          <hr class="featurette-divider">

          <div class="row featurette" v-motion-slide-visible-once-left>
              <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">All Rat Remains</h2>
              <h3 class="fw-normal lh-3">McGameJam Hackathon, 2D Unity game</h3>
              <ul class="lead">
                  <li>Collaborated with 4 teammates to create a 2D game in C# incorporating mazes, puzzles and a mysterious plot.</li>
                  <li>Won the category "Best Audio Design".</li>
                  <li>Efficiently managed the game's implementations using Unity and Git.</li>
              </ul>
              <p><a class="btn btn-secondary" target="_blank" href="https://ethearian.itch.io/all-rat-remains">Play it! &raquo;</a></p>
              </div>
              <div class="col-md-5">
              <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" src="/src/assets/img/all_rat_remains.png" alt="All Rat Remains 2D Unity game" />
              </div>
          </div>

          <div id="CodeML"></div>
          <hr class="featurette-divider">

          <div class="row featurette" v-motion-slide-visible-once-right>
              <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">AI model predicting the risk of a stroke</h2>
              <h3 class="fw-normal lh-3">CodeML Hackathon, Python</h3>
              <ul class="lead">
                  <li>Worked in a team of 4 with Google Colab to build an artificial intelligence model in Python that predicts if someone will have a stroke.</li>
                  <li>Reached the top 5 of our ranking with the model developed.</li>
                  <li>Train the model using classifiers from the Scikit-learn library on Google Colab to analyze 2000 data.</li>
                  <li>Learned in a machine-learning workshop how to train a model to recognize clothes.</li>
              </ul>
              </div>
              <div class="col-md-5 order-md-1">
              <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" src="/src/assets/img/codeml.png" alt="Code ML model on Google Colab" />
              </div>
          </div>
          
          <div id="Fractal"></div>
          <hr class="featurette-divider">

          <div class="row featurette" v-motion-slide-visible-once-left>
              <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">Research project on fractals</h2>
              <h3 class="fw-normal lh-3">Processing and Java</h3>
              <ul class="lead">
                  <li>Programmed various fractals in Java using Processing.</li>
                  <li>Presented in a team of 4 our research project to 40 people on fractals at a symposium and won the audience choice.</li>
              </ul>
              </div>
              <div class="col-md-5 text-center">
              <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="200" src="/src/assets/img/fractal.png" alt="Mandelbrot Fractal" />
              </div>
          </div>

          <div id="Tic-Tac-Toe"></div>
          <hr class="featurette-divider">

          <div class="row featurette" v-motion-slide-visible-once-right>
              <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">TicTacToe</h2>
              <h3 class="fw-normal lh-3">C++ game</h3>
              <ul class="lead">
                  <li>Programmed a Tic-Tac-Toe game in C++ with the SFML software development library.</li>
              </ul>
              <p><a class="btn btn-secondary" target="_blank" href="https://github.com/julia-b-grenier/tictactoe">See more! &raquo;</a></p>
              </div>
              <div class="col-md-5 order-md-1 text-center">
              <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" src="/src/assets/img/tictactoe1.png" alt="TicTacToe 2D game" />
              </div>
          </div>

          <hr class="featurette-divider">

          <!-- /END THE FEATURETTES -->

          </div><!-- /.container -->
      </div>
      <div class="row align-items-center pb-5">
          <div class="text-center">© Copyright 2023 by Julia B.Grenier</div>
      </div>
  </div>
</template>


<script>
import anime from 'animejs';

export default {
    data() {
        return {
        };
    },
    mounted() {
        // Wrap every letter in a span
        const textWrapper = this.$el.querySelector('.ml12');
        if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({ loop: false })
            .add({
            targets: '.ml12 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
            });
        }

    },
}
</script>
<style scoped>
#page {
    background-color: #FDFFFC;
    margin: 0px;
    padding: 0px;
    height: 100%;
}

#presentation {
    min-height: 80vh;
}

.navbar {
    background-color: #2589BD;
}

h1 {
    color: #20BF55;
}

h2 {
    color: #FF8CC6;
}

h3 {
    color: #F6BD60;
}

.row {
    margin-left: 0;
    margin-right: 0;
}

.section {
    min-height: 100vh;
}

.image-container {
    width: 300px;
}

img {
    max-width: inherit;
    height: inherit;
    min-width: 200px;
}

.png-icon {
    height: auto; /* Maintain aspect ratio */
    width: 60px !important; /* Set the desired width */
    max-width: 100%;
    min-width: 60px;
    height: auto;
}

.svg-icon {
    width: 80px; /* Set the desired width */
    height: 80px; /* Maintain aspect ratio */
}
.svg-container {
    width: 80px; /* Ensure the container has the same width */
    height: 80px; /* Set the height as desired */
    display: flex;
    justify-content: center;
    align-items: center;
}
.d-flex img {
    flex-shrink: 0; /* Prevent images from shrinking */
}
.col {
    min-width: 400px;
}

.btn-secondary {
    background-color: #A54657;
    border: #A54657;
    border-radius: 20px;
}

.btn-secondary:hover {
    background-color: #7c2d3c;
    border: #7c2d3c;
}

/* SKILLS CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.skill .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.skill .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 3rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the skillheadings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -.05rem;
}

/* rtl:end:remove */


/* RESPONSIVE CSS
-------------------------------------------------- */

@media (max-width: 50em) {
  #pfp {
    min-width: 150px;
    max-width: 150px;
    height: auto;
  }
}

@media (min-width: 40em) {
  /* Bump up size of carousel content */

  .featurette-heading {
    font-size: 2.5rem;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 2rem;
  }
}

.ml12 .letter {
  display: inline-block;
}
</style>
