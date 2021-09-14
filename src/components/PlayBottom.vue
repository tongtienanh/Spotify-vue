<template>
     <div :class="isData ? 'sm:visible' : 'sm:invisible' " class="player-bottom w-full sticky bottom-0 flex items-center sm:justify-between sm:bottom-12" style="background:#181818">
         <div 
         :class="`min-w-45 ${ isData ? 'visible' : 'invisible' }`" class="ml-6 w-2/6 sm:w-1/2">
             <div 
             class="flex justify-start">
                 <img :src="songInfos.avatar" class="w-14 h-14 rounded sm:h-10 sm:w-10" alt="">
                <div class="flex flex-col mx-4 sm:justify-center"> 
                    <h3 class="text-white text-sm font-semibold hover:underline cursor-pointer whitespace-nowrap">{{songInfos.title}}</h3>
                    <small class="text-time hover:underline hover:text-white cursor-pointer">{{songInfos.creator}}</small>
                </div>
                <div class="flex justify-center items-center sm:hidden">
                    <button><i class="material-icons text-time text-xl hover:text-white"></i></button>
                </div>
             </div>
         </div>
         <div class="w-2/5 flex justify-center items-center flex-col sm:w-auto">
            <div>
                <div class="w-full flex gap-2 mb-3 sm:mb-0">
                    <div class="flex justify-end sm:hidden">
                        <button @click="randomSong">
                            <i class="material-icons text-alo hover:text-lightest">shuffle</i>
                        </button>
                        <button @click="preSong">
                            <i class="material-icons text-alo ml-4 hover:text-lightest">skip_previous</i>
                        </button>
                    </div>
                    <div 
                    @click="puaseOrPlay"
                    class="w-8 h-8 rounded-full bg-lightest flex items-center justify-items-end transform sm:mr-8 hover:scale-110">
                        <i 
                        v-if="!isPlaying"
                        class="material-icons text-black text-center ml-1 cursor-pointer ">play_arrow</i>
                         <i 
                        v-if="isPlaying"
                        class="material-icons text-black text-center ml-1 cursor-pointer ">pause</i>
                    </div>

                    <div class="justify-start sm:hidden">
                        <button @click="nextSong">
                            <i class="material-icons text-alo hover:text-lightest">skip_next</i>
                        </button>
                         <button>
                            <i class="material-icons text-alo ml-4 hover:text-lightest">repeat_one</i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center w-full sm:hidden">
                <div class="text-time text-xs mr-2">{{timeCurrent}}</div>
                <div class="h-1 relative w-full bg-light flex items-center">
                    <input @change="rewindSong" id="progress" class="progress w-full h-1" type="range" :value="`${isData ? processTime : '0'}`" step="1" min="0" max="100">
                    <audio id="audio" src=""></audio>
                </div>
                <div class="text-time text-xs ml-2">{{duration()}}</div>
            </div>
         </div>
         <div class="sm:hidden" style="width:30%">
             <div class="flex justify-center items-center ">
                 <button>
                     <i class="material-icons text-xl text-alo hover:text-lightest"></i> 
                 </button>
                 <button class="mr-3">
                     <i class="material-icons text-xl text-alo hover:text-lightest">volume_up</i> 
                 </button>
                    <input @change="volumeControl" type="range" class="w-1/3 h-1">
                <!-- <div class="h-1 relative w-1/3 bg-light flex items-center">
                    <div class="w-1/3 bg-lightest h-1 rounded-full hover:bg-green"></div>
                </div> -->
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
            audio:null,
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
        this.emitter.on('volume',data =>{
            this.audio = data
        })
    },

    methods: {
        duration(){
            return Math.round(this.durationTime/60) + ':' + (this.durationTime%10 < 10 ? '0' : '') + Math.round(this.durationTime%10)
        },
       randomSong(){
           this.count = Math.round(Math.random()*100)
           this.emitter.emit('random-song',Math.round(Math.random()*100))
       },
        rewindSong(event){
            this.emitter.emit('seek-time',Math.round(this.durationTime /100 * event.target.value))
        },
        puaseOrPlay(){
            if(this.isData){
                this.isPlaying = !this.isPlaying
            }
            this.emitter.emit('play-or-pause',this.isPlaying)
        },
        nextSong(){
            this.emitter.emit('count-index',1)
              
        },
        preSong(){
            this.emitter.emit('pre-song',1)
            console.log(this.count)
        },
        volumeControl(e){
           this.audio.volume = e.currentTarget.value / 100
        // console.log(this.audio.volume)
        }
    },
    computed:{
        timeCurrent(){
            return  (this.currentTime-(this.currentTime%=60))/60+(9<this.currentTime?':':':0')+this.currentTime
        }
    }
};
</script>

<style lang="css" scoped>
    .player-bottom{
        height: 12vh;
    }
    @media (min-width: 375px) and (max-width: 768px){
        .player-bottom{
            height: 10vh;
        }
    }
</style>