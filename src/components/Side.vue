<template>
      <div class="w-72 bg-black h-full px-2 sticky top-0 left-0" style="height:88vh">
        <div class="p-6">
          <img src="images/Spotify_Logo.png" class="h-10 object-cover" alt="">
        </div>
        <div 
        v-for="(page,index) in pages" :key="index"
        @click="setId = page.id"
        :class="`cursor-pointer flex items-center rounded text-sm font-semibold text-white px-4  ${setId === page.id ? 'bg-light text-white' : 'text-lightest' }`"
        style="padding-top:2px;padding-bottom:2px">
          <i class="material-icons text-3xl">{{page.icon}}</i>
          <p class="ml-3">{{page.name}}</p>
        </div>
        <div class="w-full text-lightest flex px-4 mt-6 cursor-pointer" style="padding-top:2px;padding-bottom:2px">
          <i class="material-icons text-3xl">add_box</i>
          <p class="ml-3">Tạo playlist</p>
        </div>
         <div class="w-full text-lightest flex  px-4 cursor-pointer" style="padding-top:2px;padding-bottom:2px">
          <i class="material-icons text-3xl">favorite_border</i>
          <p class="ml-3">Bài hát đã thích</p>
        </div>
        <div class="w-full px-4 my-2 h-px bg-light"></div>
        <div 
        class="w-full">
          <div href="#" class="block h-10" >
            <p v-for="(playlist,index) in playlists" :key="index"
             class="text-lightest py-1 hover:text-white px-6 overflow-ellipsis whitespace-nowrap cursor-pointer">{{playlist}}</p>
          </div>
        </div>
      </div>
     
   
</template>
<script>
export default{
  data(){
    return {
      pages:[
        {id:'home',  name:'Trang chủ',icon:'home'},
        {id:'search', name:'Tìm kiếm',icon:'search'},
        {id:'library', name:'Thư viện',icon:'bar_chart'}
      ],
      playlists:[
        'Truyện nguyễn nhật ánh',
        'Mặt trăng lớn hơn mặt trời',
        'We bare bear',
        'Phê game music'
      ],
      setId:'home'
    }
  },
  methods:{

  }
}
</script>
<style lang="scss">

</style>
