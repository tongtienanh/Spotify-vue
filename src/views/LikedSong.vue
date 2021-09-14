<template>
    <div class="w-full">
        <Header/>
        <div 
    v-for="(album,index) in albums" :key="index"
    class="flex px-10 items-center pb-6">
        <div class="mr-8" style="width:232px;height:232px">
            <img :src="`/${album.img}`" class="h-full object-cover"  alt="">
        </div>
        <div class="flex flex-col">
            <p class="uppercase text-white font-semibold">album</p>
            <h1 
            class="text-5xl text-white font-bold" style="line-height: 75.744px;">Bài Hát Đã Thích</h1>
            <div class="flex items-center">
                <img src="../../public/images/avatar.jpg" alt="" class="w-6 h-6 rounded-full">
                <p class="text-white text-xs font-semibold px-1">Tống Tiến Anh</p>
                <p class="text-lightest text-xs font-semibold">100 bài hát</p>
            </div>
        </div>
        
    </div>
    <div 
    class="bg-darkest px-10 pt-6">
        <div class=" flex items-center">
            <button class="flex transform hover:scale-110">
                <div class="w-14 h-14 rounded-full bg-green flex justify-center items-center">
                    <i class="material-icons text-white text-4xl ">play_arrow</i>
                </div>
            </button>
            <i class="material-icons text-3xl text-time mx-8">favorite_border</i>
            <i class="material-icons text-3xl text-time ">more_horiz</i>
        </div>
        <div class="flex justify-between pt-6 pb-3">
            <div class="flex items-center">
                <span class="text-lightest text-xl mr-4">#</span>
                <p class="text-time uppercase text-sm">Tiêu đề</p>
            </div>
            <p class="text-time uppercase text-sm">Like</p>
        </div>
        <div class="w-full h-px bg-light"></div>
        <div 
        v-for="(music,index) in musics" :key="index">
            <div 
            v-if="$route.params.id == index"
            v-for="(song,key) in music.songs" :key="key"
            @click="playSong({song,key})"
            class="flex justify-between items-center mt-3 mb-3 cursor-pointer rounded-md px-3 pb-1 hover:bg-light">
                <div 
                class="flex items-center">
                    <span 
                        class="text-lightest">{{key+1}}
                    </span>
                    <div class="flex flex-col ml-4">
                        <p class="text-white font-semibold">{{song.title}}</p>
                        <span class="text-time text-xs font-semibold">{{song.creator}}</span>
                    </div>
                </div>
                <span @click.stop="likeSong(song)" :class="isLike ? 'bg-green' : '' " class="text-lightest material-icons" style="font-size: 18px;">favorite_border</span>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
export default {
    name: 'SpotifyContent',
    components:{
        Header,
    },
    data() {
       return{
           likedSong:null
       }
    },
    created(){
        // this.$store.dispatch('fetchYoungMusic');
    },
    mounted() {
        this.emitter.on('liked-song',data=>{
            this.likedSong = data
            console.log(this.likedSong)
        })
    },

    methods: {
        
    },
    computed:{
        getLikeSong(){
            this.$store.state.likedSong
        }
    }
};
</script>