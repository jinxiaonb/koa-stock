<template>
    <div>
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary"  @click="updateStore">Primary</el-button>
      </el-row>
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
  