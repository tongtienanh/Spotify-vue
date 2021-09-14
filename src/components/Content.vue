<template>
    <div class="bg-light w-auto">
    <h1 class="text-2xl text-white font-semibold mb-3 px-6 pt-8">Dành cho bạn</h1>
    <p class="text-lightest text-sm px-6">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
    <Carousel :settings="settings" :breakpoints="breakpoints" :touchDrag="true" :mouseDrag="true" class="box-content px-8 pt-6">
        <Slide 
        
         class="w-full content mr-4" style=""
         v-for="(album,index) in albums" :key="index">
            <router-link :to="`/album/${album.id}`"
            @mousemove="hover = album.id"
            @mouseleave="hover = false"
            class="bg-dark rounded p-4 relative hover:bg-bg">
                <img :src="album.img" class="rounded-sm" alt="">
                <h1 class="text-white text-lg mt-3 font-semibold cursor-pointer">{{album.title}}</h1>
                <p class="mt-2 truncate mb-3 overflow-hidden overflow-ellipsis cursor-pointer text-white text-xs">{{album.dec}}</p>
                <button 
                v-if="hover === album.id"
                class="w-9 h-9 rounded-full absolute right-6 bottom-28 bg-green">
                    <i class="material-icons text-white align-middle shadow-xl">play_arrow</i>
                </button>
            </router-link >
        </Slide>
    </Carousel>
    <h1 class="text-2xl text-white font-semibold mb-3 px-6 pt-8">Lựa chọn của Spotify</h1>
    <!-- <div class="px-8 pt-6 grid grid-flow-col grid-cols-5 gap-6">
        <router-link to="/album" class="w-full" v-for="(album,index) in albums" :key="index">
            <div 
            @mousemove="hover = album.id"
            @mouseleave="hover = false"
            class="bg-dark rounded p-4 relative hover:bg-bg">
                <img :src="album.img" class="rounded-sm" alt="">
                <h1 class="text-white text-lg mt-3 font-semibold cursor-pointer">{{album.title}}</h1>
                <p class="mt-2 truncate mb-3 overflow-hidden overflow-ellipsis cursor-pointer text-white text-xs">{{album.dec}}</p>
                <button 
                v-if="hover === album.id"
                class="w-9 h-9 rounded-full absolute right-6 bottom-28 bg-green">
                    <i class="material-icons text-white align-middle shadow-xl">play_arrow</i>
                </button>
            </div>
        </router-link >
    </div> -->
    </div>
</template>

<script>
// import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default {
    name: 'SpotifyContent',
    components:{
        Carousel,
        Slide,
    },
    data() {
        return {
            hover:false,
            settings:{
                itemsToShow: 4,
            },
            breakpoints: {
                1280:{
                    itemsToShow: 4,
                },
                 1100: {
                    itemsToShow: 4,
                },
                900:{
                    itemsToShow: 3,
                },
                768:{
                    itemsToShow: 2,
                },
                375:{
                    itemsToShow:2,
                }
            }
        };
    },
    created(){
        this.$store.dispatch('fetchYoungMusic');
    },
    mounted() {
        
    },
    computed:{
        typeMusic(){
            return this.$store.state.typeMusic
        },
        albums(){
            return this.$store.state.albums
        },
       musics(){
           return this.$store.state.music
       }
    },
    methods: {
        
    },
};
</script>

<style lang="css" scoped>

     /* @media (min-width: 900px) and (max-width: 1100px) {
        .box-content{
                grid-template-columns: repeat(4, minmax(0, 1fr));
        }
}

  @media (min-width: 768px) and (max-width: 899px) {
        .box-content{
                grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .content:last-child{
            display: none;
        }
}
  @media (min-width: 650px) and (max-width: 768px) {
        .box-content{
                grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .content:nth-child(3){
            display: none;
        }
        .content:last-child{
            display: none;
        }
} */
</style>