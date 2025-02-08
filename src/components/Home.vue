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
          <a class="navbar-brand" href="#">Julia's Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">{{ $t('navbar.home') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" target="_blank" href="https://github.com/julia-b-grenier">{{ $t('navbar.github') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/julia-b-grenier/">{{ $t('navbar.linkedin') }}</a>
              </li>
              <li class="nav-item">
                <button class="nav-link" @click="toggleLocale">{{ currentLocale.toUpperCase() }}</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div>
      <div class="mx-5">
        <div id="presentation" class="featurette" v-motion-fade-visible-once >
          <div class="d-flex flex-column">
            <h1 class="ml12 text-center mb-5 align-items-center">Welcome!</h1>
            <h2 class="text-center">{{ $t('name') }}</h2>
            <h3 class="text-center lead mb-5">{{ $t('title') }}</h3>
            
            <div class="d-flex justify-content-center">
              <v-icon name="hi-solid-star" scale="1.2"/><p class="ml12 text-center mb-5 align-items-center mx-2"> {{ $t('checkout') }} </p><v-icon name="hi-solid-star" scale="1.2"/>
            </div>
            <div class="container">
              <div class="d-flex justify-content-evenly flex-wrap">
                <div class="border border-1 rounded-pill border-light btn-section p-2 px-4 my-2">
                  <a :href="link" target="_blank">Skills &raquo;</a>
                </div>
                <div class="border border-1 rounded-pill border-light btn-section p-2 px-4 my-2">
                  <a :href="link" target="_blank">Experience &raquo;</a>
                </div>
                <div class="border border-1 rounded-pill border-light btn-section p-2 px-4 my-2">
                  <a :href="link" target="_blank">Projects &raquo;</a>
                </div>
                <div class="border border-1 rounded-pill border-light btn-section p-2 px-4 my-2">
                  <a :href="link" target="_blank">Involment &raquo;</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="featurette-divider">

        <div id="skills.section" class=""  v-motion-slide-visible-once-bottom >
          <h2 class="fw-normal text-center pt-0 mb-4">Skills</h2>
          <div class="d-flex flex-wrap justify-content-evenly">
            <SkillCard
              :icons="[
                { src: 'cpp.svg', alt: 'C++ programming language logo' },
                { src: 'qt.svg', alt: 'Qt logo' },
                { src: 'sfml-icon.svg', alt: 'SFML library logo' }
              ]"
              :text="$t('skills.cpp')"
              >
              <p><a class="btn btn-secondary" href="#Internships">Internships &raquo;</a></p>
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'python.svg', alt: 'Python programming language logo' }
              ]"
              :text="$t('skills.python')"
              >
              <div>
                <a class="btn btn-secondary" href="#CodeML">ML model &raquo;</a>
                <a class="btn btn-secondary m-1" href="#Internships">Autodesk &raquo;</a>
              </div>
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'csharp.svg', alt: 'C# programming language logo' },
                { src: 'unity.svg', alt: 'Unity logo' }
              ]"
              :text="$t('skills.csharp')"
              >
              <p><a class="btn btn-secondary" href="#AllRatRemains">2D Game &raquo;</a></p>
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'java.svg', alt: 'Java programming language logo' },
                { src: 'spring-boot.svg', alt: 'Spring Boot logo' }
              ]"
              :text="$t('skills.java')"
              >
              <div>
                <a class="btn btn-secondary" href="#AssetPlus">Desktop App &raquo;</a>
                <a class="btn btn-secondary m-1" href="#FitHub">Web App &raquo;</a>
              </div>
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'html.svg', alt: 'HTML logo' },
                { src: 'css.svg', alt: 'CSS logo' },
                { src: 'javascript.svg', alt: 'JavaScript logo' },
                { src: 'vue-js-icon.svg', alt: 'Vue.js logo' }
              ]"
              :text="$t('skills.web')"
              >
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'git.svg', alt: 'Git logo' },
                { src: 'perforce.svg', alt: 'Perforce logo' }
              ]"
              :text="$t('skills.version_control')"
              >
              <p><a class="btn btn-secondary" href="#Internships">Internships &raquo;</a></p>
            </SkillCard>
          </div>
        </div><!-- /.row -->    

        <hr class="featurette-divider">

        <h1 id="Internships" class="fw-normal text-center">Software Engineering Experience</h1>
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
  },
  data() {
    return {
      currentLocale: this.$i18n.locale
    };
  },
  methods: {
    toggleLocale() {
      const newLocale = this.currentLocale === 'en' ? 'fr' : 'en';
      this.$i18n.locale = newLocale;
      this.currentLocale = newLocale;
    }
  }
};
</script>
<style scoped>
#page {
  background-color: #141414;
  margin: 0px;
  padding: 0px;
  height: 100%;
}

#presentation {
  min-height: 80vh;
  background-color: #141414;
  border-width: 2px;
  border-color: #333333;
  padding: 3rem;
}

.navbar-brand {
  color: #C3F25588;
}
.navbar-brand:hover {
  color: #C3F255;
}

.navbar {
  background-color: #141414 ;
}

.navbar-collapse {
  text-align: right;
}

@media (max-width: 767.98px) {
  .navbar-collapse {
    text-align: center;
  }
}

.navbar-nav .nav-item .nav-link {
  min-width: 100px;
  text-align: center;
  margin: auto;
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
