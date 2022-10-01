<template>
  <div id="app" class="font-mono">
    <div class="h-screen w-screen flex justify-center items-center relative">
      <p class="text-4xl font-bold text-primary z-10">gm,42Crypto</p>
    </div>
    <div class="text flex flex-col w-screen relative items-center pb-20">
      <h2 class="text-2xl">MEMBERS</h2>
      <div class="flex flex-wrap mt-10 justify-center gap-10 max-w-5xl">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <vue-particles
      color="#000000"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#000000"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="5"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="h-screen fixed inset-0 z-0"
    >
    </vue-particles>
  </div>
</template>

<script>
import Card from "../components/card.vue"

export default {
  name: 'IndexPage',
  components: {
    Card
  },
}
</script>