<template>
  <div id="app">
    <div class="text h-screen w-screen flex justify-center items-center">
      <p class="text-4xl font-mono font-black">gm,0ch</p>
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
      class="h-screen fixed inset-0"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
  },
}
</script>

<style scoped>
#app{
  background-color: white;
}
</style>