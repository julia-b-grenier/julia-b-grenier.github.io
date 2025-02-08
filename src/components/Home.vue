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
      <nav class="navbar navbar-expand-md">
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
            <h1 class="ml12 text-center mb-5 align-items-center">{{ $t('welcome') }}</h1>
            <div class="mx-auto mb-3">
              <img width="100" height="100" class="rounded-circle" id="pfp" src="/src/assets/img/pfp.jpg" alt="Julia B.Grenier profil picture"/>
            </div>
            <h2 class="text-center">{{ $t('name') }}</h2>
            <h3 class="text-center lead mb-5">{{ $t('title') }}</h3>
            
            <div class="d-flex justify-content-center">
              <v-icon name="hi-solid-star" scale="1.2"/><p class="ml12 text-center mb-4 align-items-center mx-2"> {{ $t('checkout') }} </p><v-icon name="hi-solid-star" scale="1.2"/>
            </div>
            <div class="container">
              <div class="d-flex justify-content-evenly flex-wrap">
                <div class="">
                  <a class="btn btn-section rounded-pill border border-2 p-2 px-4 my-2" href="#Skills">{{ $t('sections.skills') }} &raquo;</a>
                </div>
                <div class="">
                  <a class="btn btn-section rounded-pill border border-2 p-2 px-4 my-2" href="#Experience">{{ $t('sections.experience_short') }} &raquo;</a>
                </div>
                <div class="">
                  <a class="btn btn-section rounded-pill border border-2 p-2 px-4 my-2" href="#Projects">{{ $t('sections.projects') }} &raquo;</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="featurette-divider">

        <div id="skills.section" class=""  v-motion-slide-visible-once-bottom >
          <h2 class="text-center pt-0 mb-4" id="Skills">{{ $t('sections.skills') }}</h2>
          <div class="d-flex flex-wrap justify-content-evenly">
            <SkillCard
              :icons="[
                { src: 'cpp.svg', alt: 'C++ programming language logo' },
                { src: 'qt.svg', alt: 'Qt logo' },
                { src: 'sfml-icon.svg', alt: 'SFML library logo' }
              ]"
              :text="$t('skills.cpp')"
              >
              <div class="d-flex justify-content-evenly">
                <a class="btn btn-secondary border border-2 p-2 px-4 " href="#Internships">{{ $t('sections.experience_short') }} &raquo;</a>
              </div>  
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'javascript.svg', alt: 'JavaScript logo' },
                { src: 'typescript.svg', alt: 'Vue.js logo' },
                { src: 'react.svg', alt: 'React logo' },
                { src: 'vue-js-icon.svg', alt: 'Vue.js logo' }
              ]"
              :text="$t('skills.web')"
              >
              <div class="d-flex justify-content-evenly">
                <a class="btn btn-secondary border border-2 p-2 px-4 " href="#Projects">{{ $t('sections.projects') }} &raquo;</a>
              </div>  
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'git.svg', alt: 'Git logo' },
                { src: 'perforce.svg', alt: 'Perforce logo' }
              ]"
              :text="$t('skills.version_control')"
              >
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'postgresql.svg', alt: 'PostgreSQL logo' },
                { src: 'firebase.svg', alt: 'Firebase logo' }
              ]"
              :text="$t('skills.databases')"
              >
              <div class="d-flex justify-content-evenly">
                <a class="btn btn-secondary border border-2 p-2 px-4 " href="#Projects">{{ $t('sections.projects') }} &raquo;</a>
              </div>  
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'docker.svg', alt: 'PostgreSQL logo' },
                { src: 'jenkins.svg', alt: 'Firebase logo' },
                { src: 'jira.svg', alt: 'Jira logo'}
              ]"
              :text="$t('skills.other')"
              >
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'java.svg', alt: 'Java programming language logo' },
                { src: 'spring-boot.svg', alt: 'Spring Boot logo' }
              ]"
              :text="$t('skills.java')"
              >
              <div class="d-flex justify-content-evenly">
                <a class="btn btn-secondary border border-2  p-2 px-4 " href="#AssetPlus">AssetPlus &raquo;</a>
                <a class="btn btn-secondary border border-2 p-2 px-4" href="#FitHub">FitHub &raquo;</a>
              </div>
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'python.svg', alt: 'Python programming language logo' }
              ]"
              :text="$t('skills.python')"
              >
              <div class="d-flex justify-content-evenly">
                <a class="btn btn-secondary border border-2  p-2 px-4 " href="#Internships">Autodesk &raquo;</a>
                <a class="btn btn-secondary border border-2  p-2 px-4 " href="#CodeML">CodeML &raquo;</a>
              </div>
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'csharp.svg', alt: 'C# programming language logo' },
                { src: 'unity.svg', alt: 'Unity logo' }
              ]"
              :text="$t('skills.csharp')"
              >
              <div class="d-flex justify-content-evenly">
                <a class="btn btn-secondary border border-2  p-2 px-4" href="#AllRatRemains">All Rat Remains &raquo;</a>
              </div>
            </SkillCard>
            <SkillCard
              :icons="[
                { src: 'visual-studio-code.svg', alt: 'React logo' },
                { src: 'vim.svg', alt: 'Vim logo' }
              ]"
              :text="$t('skills.editors')"
              >
            </SkillCard>
          </div>
        </div><!-- /.row -->    

        <hr class="featurette-divider">

        <h2 id="Internships" class="text-center">{{ $t('sections.experience') }}</h2>
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
        <h2 class="text-center pb-4 mb-4">{{ $t('sections.projects') }}</h2>

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
          <div class="text-center">© Copyright 2025 by Julia B.Grenier</div>
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
  background-color: whitesmoke;
  margin: 0px;
  padding: 0px;
  height: 100%;
}

#presentation {
  min-height: 80vh;
  background-color: white;
  border-width: 2px;
  border-color: #333333;
  padding: 3rem;
  color: #a5a5a5;
}

.navbar-brand {
  color: #33333355;
}
.navbar-brand:hover {
  color: #333333;
}

.navbar {
  background-color: whitesmoke ;
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
  min-width: 80px;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (max-width: 50em) {
#pfp {
  min-width: 70px;
  max-width: 70px;
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
