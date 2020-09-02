// 測試用
export default {
  async asyncData(content) {
    const res = await content.$axios.post(`/api/auth/signin`, {
      email: "harry@axolotl.com.tw",
      password: "111111",
      invite: ""
    });
    return {
      result: res.data
    };
  }
};
