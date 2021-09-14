<template>
    <div class="w-inherit" style="width:-webkit-fill-available;">
        <Header/>
        <Content/>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Content from '../components/Content.vue'
export default {
    name: 'SpotifyContent',
    components:{
        Header,
        Content
    },
    data() {
       return{

       }
    },
    created(){

    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>
