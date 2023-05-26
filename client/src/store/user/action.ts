export default {
  async getUserInfo(context: any) {
    setTimeout(() => {
      let obj = {
        userName: "test",
        age: 22,
      };
      context.commit("Set_User_Info", obj);
    }, 0);
  },
};
