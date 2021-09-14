<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
import aboutLayout from './layout/auth.vue';
import defaultLayout from './layout/default.vue';
export default {
  name: 'SpotifyApp',
  components:{
    aboutLayout,
    defaultLayout,
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },
  computed: {
    layout() {
      return this.$router.currentRoute.value.meta.layout;
    }
    },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>