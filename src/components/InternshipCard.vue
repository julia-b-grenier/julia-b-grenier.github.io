<template>
    <div class="row featurette mb-4" v-motion-slide-visible-once-right>
        <div>
            <h2 class="featurette-heading fw-normal">{{ title }}</h2>
            <div class="row">
                <h3 class="fw-normal col text-start">{{ subtitle }}</h3>
                <h3 class="fw-normal col text-end">{{ duration }}</h3>
            </div>
            <ul class="fw-normal">
                <li v-for="(point, index) in bulletPoints" :key="index" v-html="formatText(point)"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
        type: String,
        required: true,
        },
        subtitle: {
        type: String,
        required: true,
        },
        duration: {
        type: String,
        required: true,
        },
        bulletPoints: {
        type: Array,
        required: true,
        },
    },
    methods: {
        formatText(text) {
            return text.replace(/BOLD\((.*?)\)/g, '<strong>$1</strong>');
        }
    }
};
</script>