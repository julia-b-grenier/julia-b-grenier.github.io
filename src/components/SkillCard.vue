<template>
    <div class="col-lg-4 mb-4">
        <div class="d-flex flex-row justify-content-around align-items-center mb-3">
            <div v-for="(icon, index) in icons" :key="index" class="svg-container">
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
  };
  </script>
  
<style scoped>

.row {
    margin-left: 0;
    margin-right: 0;
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

</style>