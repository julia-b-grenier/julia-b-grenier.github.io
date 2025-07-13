<template>
  <div class="mx-auto text-center">
    <iframe
      src="/game/RubanElectrique/index.html"
      frameborder="0"
      class="responsive-iframe"
      style="border: none;">
    </iframe>
    <div>
      <p style="font-size: .6rem;">Crédits pour les images de rubans <a href="http://www.freepik.com" target="_blank">upklyak / Freepik</a></p> 
    </div>
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
