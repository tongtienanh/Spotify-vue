<template>
     <div class="relative w-full bg-light"> 
        <div 
        @scroll="scrollFn"
        :class="`w-full h-full sticky top-0 p-2 z-10 ${ scroll ? 'bg-black' : ''}`">
            <div class="flex justify-between px-8 py-4">
                <div class="flex items-center">
                 
                    <div v-if="$route.path == '/search'" class="relative">
                    <input  class=" h-10 rounded-full py-2 px-12 text-sm outline-none w-112 xs:w-75"
                             v-model="searchText"
                             @change="inputText"
                             placeholder="Tìm kiếm nghệ sỹ hoặc bài hát" type="text">
                    <span class="material-icons absolute left-3 top-1 text-dark text-3xl">search</span>
                    </div>

                </div>
                    <div class="flex items-center">
                        <div 
                        class="flex text-white desktop:hidden medium:hidden">
                            <p class="mr-6 font-semibold hover:scale-105 transform cursor-pointer ">Premium</p>
                            <p class="mr-6 font-semibold hover:scale-105 transform cursor-pointer ">Hỗ trợ</p>
                            <p class="font-semibold mr-6 hover:scale-105 transform cursor-pointer ">Tải xuống</p>
                            <div class="bg-white w-px" style="height:25px"></div>
                            <button class="rounded-full text-sm mx-6 hover:scale-105 transform cursor-pointer text-white font-semibold flex items-center border border-lightest px-3 py-px ">Nâng cấp</button>
                         </div>
                        <div class="relative">
                         <button
                          @click="show = !show"
                          class="hover:bg-lightest rounded-full bg-dark flex items-center justify-around xs:hidden">
                             <img src="https://nuotvl.com/wp-content/uploads/2020/12/hot_girl_gai_xinh-1548.jpg" class="w-8 h-8 rounded-full object-cover" alt="">
                             <p class="text-white text-sm font-semibold mx-2">{{userInfo}}</p>
                             <i class="material-icons text-white text-xl mr-px">arrow_drop_down</i>
                         </button>
                        <div v-if="show"
                        class="bg-light shadow-default h-32 mt-2 p-1 w-49 absolute right-0" style="width:196px">
                            <p 
                            v-for="(profile,index) in profiles" :key="index"
                            @click="signOut(profile.name)"
                            :class="`text-white rounded-sm hover:bg-dark py-2 pl-3 pr-4 flex justify-between cursor-pointer items-center `"
                            >{{profile.name}}
                            <span class="material-icons font-thin transform rotate-180">{{profile.icon}}</span>
                            </p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
import Token from '../helpers/token'
import Content from './Content.vue'
export default {
    name: 'SpotifyContent',
    components:{
        Content,
    },
    data() {
        return {
            profiles:[
                {name:'Tài khoản',icon:'transit_enterexit'},
                {name:'Hồ sơ',icon:''},
                {name:'Đăng xuất',icon:''}
            ],
            hover: 'Tài khoản',
            show: false,
            scroll:false,
            searchText:null,
            userInfo:''
        };
    },
    created(){
        window.addEventListener('scroll', this.scrollFn);
    },
    mounted() {
           
    },
    destroyed () {
    window.removeEventListener('scroll', this.scrollFn);
  },
    methods: {
        scrollFn:function(){
         if(window.scrollY > 40){
             this.scroll = true
         }
         else{
             this.scroll = false
         }
        },
        inputText(){
           this.emitter.emit('search-text',this.searchText)
        },
        signOut(name){
            if(name !== 'Đăng xuất') return
            Token.removeToken()
            this.$router.push({name:'Login'})
        }
    },
    computed:{
      
    }
};
</script>

<style lang="scss" scoped>

</style>