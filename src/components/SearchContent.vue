<template>
    <div v-if="searchText" 
    class="px-8 flex w-full">
        <div>
            <h1 class="text-white font-bold text-2xl"> Kết quả hàng đầu </h1>
            <div class="rounded-md bg-darkest my-6 p-7 hover:bg-bg cursor-pointer" style="width:440px">
                <div class="flex items-start px-3 flex-col">
                    <img src="https://i.scdn.co/image/ab67706f000000023a3e92735a80354a35694409" class="w-23 h-23 rounded" alt="">
                    <h1 class="text-white text-3xl py-2 font-bold">Video Game Soundtrack</h1>
                    <div class="flex">
                        <p class="text-time text-sm mr-2">Của spotify</p>
                        <button class="bg-dark text-white text-sm">PLAYLIST</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-start flex-col w-full pl-6">
            <div class="flex justify-between w-full mb-6">
                <h1 class="text-white font-bold text-2xl">Bài hát</h1>
                <p class="text-time text-xs hover:underline">XEM TẤT CẢ</p>
            </div>
            <div v-for="(item,index) in resultQuery" :key="index"
                @click="play(item)"
                class="flex justify-between w-full cursor-pointer items-center rounded hover:bg-darkest" style="padding:6px">
                <div class="flex">
                    <img :src="item.avatar" class="w-10 h-10 mr-3 object-cover" alt="">
                    <div class="flex flex-col">
                        <h3 class="text-white font-bold text-base">{{item.title}}</h3>
                        <p class="text-time text-sm">{{item.creator}}</p>
                    </div>
                </div>
                <i class="material-icons text-white">favorite_border</i>
            </div>
        </div>
    </div>






    <h1 class="text-white px-8 text-2xl font-bold">Các tìm kiếm gần đây</h1>
    <div class="px-8 pt-6 grid grid-flow-col grid-cols-5 gap-6">
    <a href="/album/0" class="w-full relative">
        <div class="bg-dark rounded p-4 relative hover:bg-bg">
            <img src="images/nhactre100.jpg" class="rounded-sm" alt="" />
            <h1 class="text-white text-lg mt-3 font-semibold cursor-pointer">Nhạc Trẻ Mới Nhất</h1>
            <p class="mt-2 truncate mb-3 overflow-hidden overflow-ellipsis cursor-pointer text-white text-xs">Danh sách tổng hợp nhạc mới hàng tuần. Cập nhật mỗi thứ Hai.</p>
        </div>
        <button class="rounded-full w-6 h-6 text-white absolute right-2 top-2 material-icons" style="background:rgba(0,0,0,.3)">close</button>
    </a>
    </div>
    <h1 class="text-white px-8 pt-8 text-2xl font-bold">Gợi ý tìm kiếm</h1>
    <div class="px-8 grid grid-flow-col grid-cols-4 gap-6">
        <div class="mt-6 w-full rounded-lg relative bg-recommend col-span-2" style="height:220px">
            <h3 class="absolute left-0 top-0 text-4xl p-4 text-white font-bold">Pop</h3>
            <img src="https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3" aria-hidden="false" draggable="false" class="absolute right-0 bottom-0 transform rotate-12 h-32 w-32" alt="">
        </div>
    </div>
   

</template>

<script>
export default {
    name: 'SpotifySearchrent',
    components:{
    },
    data() {
        return {
            searchText:null,
            audio:null,
            isData:false,
            isPlaying:false,
            durationTime:null,
            processTime:null,
        };
    },

    mounted() {
        this.emitter.on('search-text',data=>{
            this.searchText = data 
        })
         this.emitter.on('seek-time',data =>{
            this.audio.currentTime = data
        })
    },
    computed:{
       songs(){
           return this.$store.state.songs
       },
        resultQuery(){
           if(this.searchText){
                return this.songs.filter(data => data.title.toLowerCase().includes(this.searchText.toLowerCase()) || data.creator.toLowerCase().includes(this.searchText.toLowerCase()))
           }
        }
    },
    methods: {
        play(data){
            if(this.audio != null){
                this.audio.src = ''
            }
            this.isData = true
            this.isPlaying = true
            this.audio = new Audio(data.music)
            this.audio.play()
            this.emitter.emit('play-song',{data:data,isData:this.isData,isPlaying:this.isPlaying})
            var that = this
            this.audio.addEventListener("loadeddata", function() {
                that.emitter.emit('duration-time',this.duration)
                that.durationTime = this.duration
            });
            this.audio.ontimeupdate = function(){
                that.emitter.emit('process-time',{process:Math.round(that.audio.currentTime / that.audio.duration * 100),current:Math.round(that.audio.currentTime)})
                that.processTime =Math.round(that.audio.currentTime / that.audio.duration * 100) 
            }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>