<template>
 <div class="bg-light">
     <div class="flex">
         <Side/>
            <slot></slot>
     </div>
     <play-bottom/>
     <BottomBar/>
 </div>
</template>

<script>
import Side from '../components/Side.vue'
import Home from '../components/Home.vue'
import PlayBottom from '../components/PlayBottom.vue'
import BottomBar from '../components/BottomBar.vue'

export default {
    components:{
        Side,
        Home,
        PlayBottom,
        BottomBar
    }
};
</script>

<style></style>