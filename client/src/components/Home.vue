<template>
  <div>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <button class="home-btn" @click="updateStore">更改store</button>
  </div>
</template>
<script lang="ts" setup>
// import { computed, reactive, ref } from "vue";
// import { useStore } from "vuex";

import { httpGet } from "@util/http.js";
// console.log(httpGet());

// const store = useStore();
// const userObj = computed(() => store.state.user.userInfo);

// let obj = reactive({ msg: "fd" });
// let msg = ref("fsdf");

async function updateStore() {
  //   store.dispatch("user/getUserInfo");

  const res = await httpGet({}, "/test"); //请求mock的数据
  console.log(res);
}
</script>
