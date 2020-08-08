<template>
  <div id="app">
    <div class="locale-changer">
      <select v-model="currentLang">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>
    <hr />
    <p>{{ $t("message.hello") }}</p>
    <p>{{ $t("message.test") }}</p>
    <hr />
    <a-button type="primary">
      <router-link to="/foo">foo</router-link>
    </a-button>
    <a-button type="primary">
      <router-link to="/bar">bar</router-link>
    </a-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Button } from "ant-design-vue";

export default {
  name: "App",
  components: {
    AButton: Button,
  },
  data() {
    return {
      currentLang: "",
      langs: ["zh_CN", "en_US"],
    };
  },
  watch: {
    currentLang(val) {
      this.mergeI18nLocal(val);
    },
  },
  computed: {
    ...mapState(["locale"]),
  },
  mounted() {
    console.log(this.locale);
    this.currentLang = this.locale;
  },
  methods: {
    ...mapMutations(["mergeI18nLocal"]),
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
