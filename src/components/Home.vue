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
      <div class="container skill">
        <div id="presentation" class="row featurette pt-4 d-flex align-items-center" v-motion-fade-visible-once >
          <div class="col-md-7">
            <h1 class="featurette-heading fw-normal lh-1 ml12">{{ $t('name') }}</h1>
            <h2 class="fw-light lh-2 mb-4">{{ $t('title') }}</h2>
            <p class="lead" v-html="$t('bio').replace(/\n/g, '<br><br>')"></p>
          </div>
          <div class="col-md-5 text-center my-auto">
            <img width="300" height="300" class="rounded-circle" id="pfp" src="/src/assets/img/pfp.jpg" alt="Julia B.Grenier profil picture"/>
          </div>
        </div>

        <hr class="featurette-divider">
        
        <div id="skills.section" class="row"  v-motion-slide-visible-once-bottom >
          <h1 class="fw-normal text-center pt-0 mb-4">Skills</h1>
          <SkillCard
            :icons="[
              { src: '/src/assets/img/cpp.svg', alt: 'C++ programming language logo' },
              { src: '/src/assets/img/qt.svg', alt: 'Qt logo' },
              { src: '/src/assets/img/sfml-icon.svg', alt: 'SFML library logo' }
            ]"
            :text="$t('skills.cpp')"
          />
          <SkillCard
            :icons="[
              { src: '/src/assets/img/python.svg', alt: 'Python programming language logo' }
            ]"
            :text="$t('skills.python')"
            >
            <p><a class="btn btn-secondary" href="#CodeML">View project &raquo;</a></p>
          </SkillCard>
          <SkillCard
            :icons="[
              { src: '/src/assets/img/csharp.svg', alt: 'C# programming language logo' },
              { src: '/src/assets/img/unity.svg', alt: 'Unity logo' }
            ]"
            :text="$t('skills.csharp')"
            >
            <p><a class="btn btn-secondary" href="#AllRatRemains">View project &raquo;</a></p>
          </SkillCard>
          <SkillCard
            :icons="[
              { src: '/src/assets/img/java.svg', alt: 'Java programming language logo' },
              { src: '/src/assets/img/spring-boot.svg', alt: 'Spring Boot logo' }
            ]"
            :text="$t('skills.java')"
            >
            <div>
              <a class="btn btn-secondary" href="#AssetPlus">View Desktop App &raquo;</a>
              <a class="btn btn-secondary m-1" href="#FitHub">View Web App &raquo;</a>
            </div>
          </SkillCard>
          <SkillCard
            :icons="[
              { src: '/src/assets/img/html.svg', alt: 'HTML logo' },
              { src: '/src/assets/img/css.svg', alt: 'CSS logo' },
              { src: '/src/assets/img/javascript.svg', alt: 'JavaScript logo' },
              { src: '/src/assets/img/vue-js-icon.svg', alt: 'Vue.js logo' }
            ]"
            :text="$t('skills.web')"
            >
          </SkillCard>
          <SkillCard
            :icons="[
              { src: '/src/assets/img/git.svg', alt: 'Git logo' },
              { src: '/src/assets/img/perforce.svg', alt: 'Perforce logo' }
            ]"
            :text="$t('skills.version_control')"
            >
          </SkillCard>
        </div><!-- /.row -->    

        <hr class="featurette-divider">

        <h1 class="fw-normal text-center">Software Engineering Experience</h1>
        <div>
          <InternshipCard
            v-for="(internshipKey, index) in internshipKeys"
            :key="index"
            :title="internships[internshipKey].title"
            :subtitle="internships[internshipKey].subtitle"
            :duration="internships[internshipKey].duration"
            :bulletPoints="internships[internshipKey].info"
          />
        </div>

        <hr class="featurette-divider">
        <h1 class="fw-normal text-center pb-4 mb-4">Projects</h1>

        <ProjectCard
          v-for="(projectKey, index) in projectKeys"
          :key="index"
          :id="projectKey"
          :title="projects[projectKey].title"
          :subtitle="projects[projectKey].subtitle"
          :bulletPoints="projects[projectKey].info"
          :images="projects[projectKey].images"
          :link="projects[projectKey].link"
          :reverse="index % 2 === 1"
        />
      </div>
      
      <div class="row align-items-center pb-5">
          <div class="text-center">© Copyright 2023 by Julia B.Grenier</div>
      </div>

    </div>
  </div>
</template>


<script>
import SkillCard from './SkillCard.vue'; // adjust the path as needed
import InternshipCard from './InternshipCard.vue';
import ProjectCard from './ProjectCard.vue';
import anime from 'animejs';

export default {
  data() {
      return {
      };
  },
  mounted() {
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
  components: {
      SkillCard,
      InternshipCard,
      ProjectCard
  },
  computed: {
      internshipKeys() {
          return Object.keys(this.internships);
      },
      internships() {
          return this.$i18n.messages[this.$i18n.locale].internships;
      },
      projectKeys() {
          return Object.keys(this.projects);
      },
      projects() {
          return this.$i18n.messages[this.$i18n.locale].projects;
      }
  }
};
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

.btn-secondary {
  background-color: #A54657;
  border: #A54657;
  border-radius: 20px;
}

.btn-secondary:hover {
  background-color: #7c2d3c;
  border: #7c2d3c;
}

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
