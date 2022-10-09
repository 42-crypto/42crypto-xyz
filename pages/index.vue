<template>
  <div id="app" class="font-mono">
    <div class="navbar z-50 fixed opacity-100">
      <div class="flex-1">
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <label class="swap swap-rotate">
          <input type="checkbox" @click="toggleTheme"/>
            <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
          </label>
        </button>
      </div>
    </div>
    <div class="h-screen w-screen flex justify-center items-center relative">
      <p v-if="theme == 'black'" class="text-4xl font-bold text-primary-content z-10">gm,42Crypto</p>
      <p v-else class="text-4xl font-bold text-primary z-10">gm,42Crypto</p>
    </div>
    <div class="text flex flex-col w-screen relative items-center pb-20">
      <h2 class="text-2xl">MEMBERS</h2>
      <div class="flex flex-wrap mt-10 justify-center gap-10 max-w-5xl">
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
      </div>
    </div>
    <vue-particles
      color="#0891B2"
      :particleOpacity="0.7"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="2"
      linesColor="#0891B2"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="1"
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
  data: () => ({
    theme: "black",
    members: []
  }),
  async mounted() {
    if (localStorage.theme === 'black' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute("data-theme", 'black');
      this.theme = "black";
    } else {
      document.documentElement.setAttribute("data-theme", 'lofi');
      this.theme = "lofi";
    }

    const data = await fetch('https://api.notion.com/v1/databases/f227cb3970aa47718bd5461296a2c1db', {
      headers: {
        'Authorization': `Bearer: ${process.env.NOTION_KEY}`,
        'Notion-Version': '2022-06-28'
      }
    })
    console.log(data);
    // const json = await data.json();
    // console.log(json);
  },
  methods: {
    toggleTheme() {
      if(document.documentElement.getAttribute('data-theme') == 'black'){
        document.documentElement.setAttribute("data-theme", 'lofi');
        localStorage.theme = 'lofi';
        this.theme = "lofi";
      } else {
        document.documentElement.setAttribute("data-theme", 'black');
        localStorage.theme = 'black';
        this.theme = "black";
      }
    }
  }
}
</script>