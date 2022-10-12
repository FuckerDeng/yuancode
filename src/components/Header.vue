<script setup lang='ts'>
import { ref,reactive} from 'vue'
import logo from "@/assets/vue.svg"
</script>
<template> 
 <div class="sticky top-0 z-20 bg-white h-14 shadow-md px-32 flex py-2 justify-between" >
    <div class="flex gap-3">
        <img :src="logo" alt="LOGO">
        <div class="self-center text-2xl">猿CODE</div>
    </div>
    <div class="self-center">
        登录/注册
    </div>
 </div>
</template>
<style scoped lang='scss'>
</style>