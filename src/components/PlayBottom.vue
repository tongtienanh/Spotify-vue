<template>
     <div class="w-full sticky bottom-0 flex items-center" style="height:12vh;background:#181818">
         <div 
         :class="`min-w-45 ${ isData ? 'visible' : 'invisible' }`" style="width:30%">
             <div 
             class="flex justify-center">
                 <img :src="songInfos.avatar" class="w-14 h-14 rounded" alt="">
                <div class="flex flex-col mx-4"> 
                    <h3 class="text-white text-sm font-semibold hover:underline cursor-pointer">{{songInfos.title}}</h3>
                    <small class="text-time hover:underline hover:text-white cursor-pointer">{{songInfos.creator}}</small>
                </div>
                <div class="flex justify-center items-center">
                    <button><i class="material-icons text-time text-xl hover:text-white">favorite_border</i></button>
                </div>
             </div>
         </div>
         <div class="w-2/5 flex justify-center items-center flex-col">
            <div>
                <div class="w-full flex gap-2 mb-3">
                    <div class="flex justify-end">
                        <button>
                            <i class="material-icons text-alo hover:text-lightest">shuffle</i>
                        </button>
                        <button>
                            <i class="material-icons text-alo ml-4 hover:text-lightest">skip_previous</i>
                        </button>
                    </div>
                    <div 
                    @click="pauseOrPlay,isPlaying = !isPlaying,pause = !pause"
                    class="w-8 h-8 rounded-full bg-lightest flex items-center justify-items-end transform hover:scale-110">
                        <i 
                        v-if="!isPlaying"
                        class="material-icons text-black text-center ml-1 cursor-pointer ">play_arrow</i>
                         <i 
                        v-if="isPlaying"
                        class="material-icons text-black text-center ml-1 cursor-pointer ">pause</i>
                    </div>

                    <div class="justify-start">
                        <button @click="nextSong">
                            <i class="material-icons text-alo hover:text-lightest">skip_next</i>
                        </button>
                         <button>
                            <i class="material-icons text-alo ml-4 hover:text-lightest">repeat_one</i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center w-full">
                <div class="text-time text-xs mr-2">{{timeCurrent()}}</div>
                <div class="h-1 relative w-full bg-light flex items-center">
                    <input @change="rewindSong" id="progress" class="progress w-full h-1" type="range" :value="processTime" step="1" min="0" max="100">
                    <audio id="audio" src=""></audio>
                </div>
                <div class="text-time text-xs ml-2">{{duration()}}</div>
            </div>
         </div>
         <div style="width:30%">
             <div class="flex justify-center items-center ">
                 <button>
                     <i class="material-icons text-xl text-alo hover:text-lightest">playlist_play</i> 
                 </button>
                 <button class="mr-3">
                     <i class="material-icons text-xl text-alo hover:text-lightest">volume_up</i> 
                 </button>
                <div class="h-1 relative w-1/3 bg-light flex items-center">
                    <div class="w-1/3 bg-lightest h-1 rounded-full hover:bg-green"></div>
                </div>
             </div>
         </div>
     </div>
</template>

<script>
export default {
    name: 'SpotifyPlaybottom',
    data() {
        return {
            isPlaying:false,
            songInfos:[],
            isData:null,
            durationTime:null,
            processTime:null,
            currentTime:null,
            pause:true,
            count:0
        };
    },
    mounted() {
        this.emitter.on('play-song',data =>{
            this.isPlaying = data.isPlaying
            this.songInfos = data.data
            this.isData = data.isData
        })
        this.emitter.on('duration-time',data =>{
            this.durationTime = data
            console.log(this.durationTime)
        })
        this.emitter.on('process-time',data =>{
            this.processTime = data.process
            this.currentTime = data.current
        })
    },

    methods: {
        duration(){
            return Math.round(this.durationTime/60) + ':' + (this.durationTime%10 < 10 ? '0' : '') + Math.round(this.durationTime%10)
        },
        timeCurrent(){
             return Math.round(this.currentTime/60) + ':' + (this.currentTime%10 < 10 ? '0' : '') + Math.round(this.currentTime%10)
        },
        rewindSong(event){
            this.emitter.emit('seek-time',Math.round(this.durationTime /100 * event.target.value))
        },
        puaseOrPlay(){
            this.emitter.emit('play-or-pause',this.pause)
        },
        nextSong(){
            this.count++
            this.emitter.emit('count-index',this.count)
              
        }
    },
    computed:{
        // puaseOrPlay(){
        //     return this.isPlaying = !this.isPlaying
        // }
    }
};
</script>

<style lang="scss" scoped>
</style>