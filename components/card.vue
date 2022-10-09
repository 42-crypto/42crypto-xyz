<template>
  <div class="flex flex-row gap-10 flex-wrap">
    <div v-bind:class="[ theme == 'black' ? 'card card-compact w-72 backdrop-filter backdrop-blur-sm bg-opacity-60 border rounded-none z-10' : 'card card-compact w-72 bg-base-100 shadow-2xl rounded-none z-10']">
      <figure class="px-5 pt-5 w-full aspect-square">
        <img src="https://pbs.twimg.com/profile_images/1542070815340261377/w5ukqkQK_400x400.png" alt="chillx2land" class="rounded-none"/>
      </figure>
      <div class="card-body items-start text-left gap-0">
        <h2 class="card-title text-xl font-bold mb-0">chillx2land</h2>
        <p class="text-xs break-all mt-0">0x2c39Fb1F67994fF66b617A1DDffC70075fEAb535</p>
        <div>
          <p class="mt-2">works:</p>
          <div class="break-words">
            <a href="https://newn.co" v-bind:class="[ theme == 'black' ? 'underline hover:text-white' : 'underline']">newn.co</a> / <a href="https://crftr.xyz" v-bind:class="[ theme == 'black' ? 'underline hover:text-white' : 'underline']">crftr</a> / <a href="https://0ch.io" v-bind:class="[ theme == 'black' ? 'underline hover:text-white' : 'underline']">0ch.io</a> / <a>NFT Admin</a>
          </div>
        </div>
        <a class="m-auto" href="https://twitter.com/chillx2land" target="_blank">
          <svg v-bind:class="[ theme == 'black' ? 'mt-2 hover:fill-white fill-primary-content' : 'mt-2 hover:drop-shadow-xl']" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['theme']
}
</script>