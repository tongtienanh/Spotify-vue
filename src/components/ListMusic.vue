<template>
    <div 
    v-for="(album,index) in albums" :key="index"
    class="flex px-10 items-center pb-6">
        <div class="mr-8 xs:hidden" style="width:232px;height:232px ">
            <img :src="`/${album.img}`" class="h-full object-cover"  alt="">
        </div>
        <div class="flex flex-col">
            <p class="uppercase text-white font-semibold">album</p>
            <h1 
            class="text-5xl text-white font-bold" style="line-height: 75.744px;">{{album.title}}</h1>
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
</template>

<script>
export default {
    name: 'SpotifyListmusic',
    data() {
        return {
            data:[],
            ablumName:[],
            isPlaying:false,
            isData:false,
            pause:null,
            hoved:false,
            durationTime:null,
            processTime:null,
            audio:null,
            pause:null,
            allSong:null,
            index:null,
            nextSong:null,
            isLike:null,
            likedSong:[]
        };
    },

    mounted() {
        this.emitter.on('play-or-pause',data =>{
            this.isPlaying = data
            this.isPlaying ? this.audio.play() : this.audio.pause()
        })
         this.emitter.on('seek-time',data =>{
            this.audio.currentTime = data
        })
        this.emitter.on('count-index',data =>{
            this.audio.src = ''
            this.index += data
            this.audio = new Audio(this.checkNextSong.music)
            this.audio.play()
            this.emitter.emit('play-song',{data:this.checkNextSong,isPlaying:this.isPlaying,isData:this.isData})
            var that = this
            that.audio.addEventListener("loadeddata", function() {
                    that.emitter.emit('duration-time',this.duration)
                    that.durationTime = this.duration
                });
                that.audio.ontimeupdate = function(){
                    that.emitter.emit('process-time',{process:Math.round(that.audio.currentTime / that.audio.duration * 100),current:Math.round(that.audio.currentTime)})
                    
                    that.processTime =Math.round(that.audio.currentTime / that.audio.duration * 100) 
                    }
        })
        this.emitter.on('random-song',data=>{
            this.isPlaying = true
            this.isData = true
            this.index +=data
            this.audio = new Audio(this.checkNextSong.music)
            this.audio.play()
            this.emitter.emit('play-song',{data:this.checkNextSong,isPlaying:this.isPlaying,isData:this.isData})
            var that = this
            that.audio.addEventListener("loadeddata", function() {
                    that.emitter.emit('duration-time',this.duration)
                    that.durationTime = this.duration
                });
                that.audio.ontimeupdate = function(){
                    that.emitter.emit('process-time',{process:Math.round(that.audio.currentTime / that.audio.duration * 100),current:Math.round(that.audio.currentTime)})
                    
                    that.processTime =Math.round(that.audio.currentTime / that.audio.duration * 100) 
                    }
        })
        this.emitter.on('pre-song',data=>{
            this.audio.src = ''
            this.index -= data
            this.audio = new Audio(this.checkNextSong.music)
            this.audio.play()
            this.emitter.emit('play-song',{data:this.checkNextSong,isPlaying:this.isPlaying,isData:this.isData})
            var that = this
            that.audio.addEventListener("loadeddata", function() {
                    that.emitter.emit('duration-time',this.duration)
                    that.durationTime = this.duration
                });
                that.audio.ontimeupdate = function(){
                    that.emitter.emit('process-time',{process:Math.round(that.audio.currentTime / that.audio.duration * 100),current:Math.round(that.audio.currentTime)})
                    
                    that.processTime =Math.round(that.audio.currentTime / that.audio.duration * 100) 
                    }
        })
        console.log('dit nhau')
    },
    computed:{
        musics(){
           return this.allSong = this.data = this.$store.state.music
        },
        albums(){
            return  this.$store.state.albums.filter(s=> s.id == this.$route.params.id)
        },
        checkNextSong(){
            if(this.allSong[this.$route.params.id].songs[this.index]){
                return this.allSong[this.$route.params.id].songs[this.index]
            }
        }
    },
    methods: {
        playSong(data){
            if(this.audio){
                this.audio.src= ''
            }
            this.isPlaying = true
            this.isData = true
            this.index = data.key
            this.emitter.emit('play-song',{data:data.song,isPlaying:this.isPlaying,isData:this.isData})
            this.audio = new Audio(data.song.music)
            this.audio.play()
            var that = this
             this.audio.addEventListener('ended',function(){
                that.index +=1
                console.log(that.index)
                that.emitter.emit('play-song',{data:that.checkNextSong,isPlaying:that.isPlaying,isData:that.isData})
                that.audio = new Audio(that.checkNextSong.music)
                that.audio.play()
                that.audio.addEventListener("loadeddata", function() {
                    that.emitter.emit('duration-time',this.duration)
                    that.durationTime = this.duration
                });
                that.audio.ontimeupdate = function(){
                    that.emitter.emit('process-time',{process:Math.round(that.audio.currentTime / that.audio.duration * 100),current:Math.round(that.audio.currentTime)})
                    
                    that.processTime =Math.round(that.audio.currentTime / that.audio.duration * 100) 
                    }
            })
            this.audio.addEventListener("loadeddata", function() {
                that.emitter.emit('duration-time',this.duration)
                that.durationTime = this.duration
            });
            this.audio.ontimeupdate = function(){
                that.emitter.emit('process-time',{process:Math.round(that.audio.currentTime / that.audio.duration * 100),current:Math.round(this.currentTime)})
                that.processTime =Math.round(that.audio.currentTime / that.audio.duration * 100) 
            }
           
        },
        autoNext(){
             this.audio.addEventListener('ended',function(){
                that.index +=1
                console.log(that.index)
                that.emitter.emit('play-song',{data:that.checkNextSong,isPlaying:that.isPlaying,isData:that.isData})
                that.audio = new Audio(that.checkNextSong.music)
                that.audio.play()
                that.audio.addEventListener("loadeddata", function() {
                    that.emitter.emit('duration-time',this.duration)
                    that.durationTime = this.duration
                });
                that.audio.ontimeupdate = function(){
                    that.emitter.emit('process-time',{process:Math.round(that.audio.currentTime / that.audio.duration * 100),current:Math.round(that.audio.currentTime)})
                    
                    that.processTime =Math.round(that.audio.currentTime / that.audio.duration * 100) 
                    }
            })
        },
        likeSong(song){
            this.isLike ? this.isLike = false : this.isLike = true
            if(this.isLike){
                this.likedSong.push(song)
            }
            console.log(this.likedSong)
            this.$store.dispatch('likedSong', this.likedSong)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>