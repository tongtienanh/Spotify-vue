<template>
    <div class="w-full">
        <Header/>
        <keep-alive>
            <searchRent/>
        </keep-alive>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import searchRent from '../components/SearchContent.vue'
export default {
    name: 'SpotifySearch',
    components:{
        Header,
        searchRent
    },
    data() {
        return {
            
        };
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

<style lang="scss" scoped>

</style>