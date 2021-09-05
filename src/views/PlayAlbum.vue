<template>
    <div class="w-full">
        <Header/>
        <ListMusic/>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import ListMusic from '../components/ListMusic.vue'
export default {
    name: 'SpotifyContent',
    components:{
        Header,
        ListMusic
    },
    data() {
       return{

       }
    },
    created(){
        this.$store.dispatch('fetchYoungMusic');
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>
