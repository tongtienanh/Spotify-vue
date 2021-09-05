<template>
    <div class="w-full">
        <Header/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name: 'SpotifySearch',
    components:{
        Header  
    },
    data() {
        return {
            
        };
    },
    created(){
        console.log(this.$route)
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>