<template>
  <div class="min-vh-100 d-flex justify-content-center align-items-center flex-column text-center">
    <iframe
      src="/game/RubanElectrique/index.html"
      frameborder="0"
      class="responsive-iframe"
      style="border: none;">
    </iframe>
    <p style="font-size: .6rem;">
      Crédits pour les images de rubans
      <a href="http://www.freepik.com" target="_blank">upklyak / Freepik</a>
    </p>
  </div>
</template>

<style scoped>
.responsive-iframe {
  width: 500px;
  height: 500px;
}

@media (max-width: 600px) {
  .responsive-iframe {
    width: 90vw;
    height: 90vw;
  }
}
</style>
