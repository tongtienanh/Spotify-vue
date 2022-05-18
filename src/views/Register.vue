<template>
  <div class="w-112 mx-auto">
    <h3 class="font-bold text-center text-3xl">Đăng ký miễn phí để bắt đầu nghe.</h3>
    <form action="" @submit.prevent="formSubmit">
      <label class="font-semibold mb-3/2 block mt-3" for="">Email của bạn là gì?</label>
      <input v-model="user.userName" type="text"
             class="w-full h-10 py-3/2 px-3 font-semibold text-font-login text-base focus:outline-none focus:border-gray"
             style="border: 1px solid #d9dadc" placeholder="Nhập email của bạn">
      <p v-if="error" class="bg-red text-red-500">Chiếc email này đã được sử dụng</p>
      <label class="font-semibold mb-3/2 block mt-3 " for="">Mật khẩu</label>
      <input v-model="user.password" type="password"
             class="w-full h-10 py-3/2 px-3 font-semibold text-font-login text-base focus:outline-none focus:border-gray"
             style="border: 1px solid #d9dadc" placeholder="Tạo mật khẩu">
      <label class="font-semibold mb-3/2 block mt-3 " for="">Bạn tên gì?</label>
      <input v-model="fullName" type="text"
             class="w-full h-10 py-3/2 px-3 font-semibold text-font-login text-base focus:outline-none focus:border-gray"
             style="border: 1px solid #d9dadc" placeholder="Tên của bạn là gì?">

      <p class="mt-3 mb-4">
        <a class="underline text-sm text-gray " href="">Quên mật khẩu của bạn?</a>
      </p>
      <div class="flex mt-5 justify-between items-center">
        <div class="font-normal flex items-center">
          <input type="checkbox" class="w-4 h-4 " style="color: #616467">
          <span class="pl-3">Hãy nhớ tôi</span>
        </div>
        <button class=" font-bold text-white rounded-full w-56 p-3 bg-greener hover:bg-green">Đăng ký</button>
      </div>
    </form>
    <div class="w-full h-px"
         style="border-top: 1px solid #d9dadc;    line-height: 1px;margin: 15px 0;position: relative;"></div>
    <h3 class="text-center font-bold my-5">Đã có tài khoản?</h3>
    <p class="text-center">
      <a class="underline text-green" href="">Đăng nhập</a>

    </p>
  </div>
</template>

<script>
// import {useRegister} from '../composables/useRegister'
import {projectAuth} from '../configs/firebase.js'
import AuthRepository from "../repositories/AuthRepository";
import Token from "../helpers/token";

export default {
  name: 'SpotifyLogin',

  data() {
    return {
      fullName: '',
      user: {
        userName: '',
        password: '',
      },
      error: ''
    };
  },

  mounted() {

  },

  methods: {
    async formSubmit() {
      this.error = null
      const res = await AuthRepository.register(this.user)
      console.log(res)
      console.log(1)
      if (!this.error) {
        this.$router.push({name: 'Home'})
      } else {
        this.$router.push({name: 'Register'})
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>