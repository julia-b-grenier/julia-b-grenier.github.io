<template>
    <div class="col-lg-3 mb-4 px-3">
      <div class="d-flex flex-row justify-content-around align-items-center mb-3">
        <div v-for="(icon, index) in iconUrls" :key="index" class="svg-container">
          <img :class="['bd-placeholder-img', 'svg-icon']" :src="icon.src" :alt="icon.alt" />
        </div>
      </div>
      <p>{{ text }}</p>
      <!-- Slot for additional content like buttons -->
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icons: {
        type: Array,
        required: true,
        default: () => [],
      },
      text: {
        type: String,
        required: true,
      },
    },
    computed: {
      iconUrls() {
        return this.icons.map(icon => {
          return {
            ...icon,
            src: new URL(`/src/assets/img/${icon.src}`, import.meta.url).href,
          };
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .row {
    margin-left: 0;
    margin-right: 0;
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
  }
  
  .svg-icon {
    width: 60px; /* Set the desired width */
    height: 60px; /* Maintain aspect ratio */
  }
  .svg-container {
    width: 60px; /* Ensure the container has the same width */
    height: 60px; /* Set the height as desired */
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
  </style>
  