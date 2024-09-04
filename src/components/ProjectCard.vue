<template>
  <div class="row featurette" :id="`${id}`" :class="{'order-md-2': reverse}" v-motion-slide-visible-once-right>
    <div :class="['col-md-7', reverse ? 'order-md-2 d-flex align-items-center' : 'd-flex align-items-center']">
      <div>
        <h2 class="featurette-heading fw-normal lh-1">{{ title }}</h2>
        <h3 class="fw-normal lh-3">{{ subtitle }}</h3>
        <ul class="fw-normal">
          <li v-for="(point, index) in bulletPoints" :key="index" v-html="formatText(point)"></li>
        </ul>
        <p v-if="link">
          <a class="btn btn-secondary" :href="link" target="_blank">See more! &raquo;</a>
        </p>
      </div>
    </div>
    <div class="col-md-5" :class="{'order-md-1': reverse}">
      <img
        v-for="(image, index) in imageUrls"
        :key="index"
        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mb-1"
        :src="image"
        :alt="`Screenshot of ${image}`"
        width="500"
      />
    </div>
  </div>
  <hr class="w-50 mx-auto featurette-divider">
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    bulletPoints: {
      type: Array,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    images: {
      type: Array,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageUrls() {
      return this.images.map(image => new URL(`/src/assets/img/${image}`, import.meta.url).href);
    }
  },
  methods: {
    formatText(text) {
      return text.replace(/BOLD\((.*?)\)/g, '<strong>$1</strong>');
    }
  }
};
</script>
