<template>
    <div class="hidden sm:block h-12 sticky bottom-0 left-0">
        <div class="flex justify-around bg-black h-full">
        <router-link :to="`/${page.id}`"
          v-for="(page,index) in pages" :key="index"
          @click="setId = page.id"
          :class="`cursor-pointer flex items-center rounded text-sm font-semibold text-white px-4  ${setId === page.id ? 'bg-light text-white' : 'text-lightest' }`"
          style="padding-top:2px;padding-bottom:2px">
          <div class="flex justify-items-center items-center">
            <i class="material-icons text-3xl">{{page.icon}}</i>
            <!-- <p class="ml-3">{{page.name}}</p> -->
          </div>
        </router-link >
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpotifyBottombar',
    data() {
        return {
            pages:[
                {id:'/',  name:'Trang chủ',icon:'home'},
                {id:'search', name:'Tìm kiếm',icon:'search'},
                {id:'library', name:'Thư viện',icon:'bar_chart'}
      ],
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>