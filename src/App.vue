<template>
  <div id="app">
    <div class="locale-changer">
      <select v-model="localLang">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
          lang
        }}</option>
      </select>
    </div>
    <hr />
    <p>{{ $t("message.hello") }}</p>
    <p>{{ $t("message.test") }}</p>
    <hr />
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      localLang: "en_US",
      langs: ["zh_CN", "en_US"],
    };
  },
  watch: {
    localLang: {
      handler(val) {
        this.$i18n.locale = val
        localStorage.setItem("lang", val);
      },
      immediate: true,
    },
  },
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en_US: {
        message: {
          hello: "hello component1",
          test: "test组件",
        },
      },
      zh_CN: {
        message: {
          hello: "你好 组件1",
          test: "测试组件",
        },
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
