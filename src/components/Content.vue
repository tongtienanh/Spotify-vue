<template>
    <h1 class="text-2xl text-white font-semibold mb-3 px-6 pt-8">Dành cho bạn</h1>
    <p class="text-lightest text-sm px-6">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
    <div class="px-8 pt-6 grid grid-flow-col grid-cols-5 gap-6">
        <div class="w-full" v-for="(album,index) in albums" :key="index">
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
        </div>
    </div>
    <h1 class="text-2xl text-white font-semibold mb-3 px-6 pt-8">Lựa chọn của Spotify</h1>
     <div class="px-8 pt-6 grid grid-flow-col grid-cols-5 gap-6">
        <div class="w-full" v-for="(album,index) in albums" :key="index">
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpotifyContent',
    data() {
        return {
            hover:false,
            albums:[
                {id:'1',img:'images/abulm.jpg',title:'Khám phá hàng tuần',dec:'Danh sách tổng hợp nhạc mới hàng tuần. Cập nhật mỗi thứ Hai.'},
                {id:'2',img:'images/default.jpg',title:'Mới ra lò',dec:'Nhún nhảy theo những giai điệu mới toanh từ nghệ sĩ bạn theo dõi và đĩa đơn mới dành cho bạn. Cập nhật mỗi thứ Sáu.'},
                { id:'3',img:'images/2.jpg',title:'Uncharted 4',dec:'Henry Jackman'},
                { id:'4',img:'images/2.jpg',title:'Uncharted 4',dec:'Henry Jackman'}

            ]
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