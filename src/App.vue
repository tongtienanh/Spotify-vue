<template>
 <div class="bg-light">
    <div class="flex">
      <Side/>
      <Home/>
    </div>
      <PlayBottom/>
 </div>
</template>
<script>

import Side from './components/Side.vue'
import Home from './components/Home.vue'
import PlayBottom from './components/PlayBottom.vue'

export default {
  name: 'SpotifyApp',
  components:{
    Side,
    Home,
    PlayBottom
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>