<template>
  <div>
    {{ $t("message.foo") }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  i18n: {
    messages: {
      en_US: {
        message: {
          foo: "foo",
        },
      },
      zh_CN: {
        message: {
          foo: "中文 foo",
        },
      },
    },
  },
  mounted(){
    axios({
      url: '/api',
      method: 'GET'
    })
  }
};
</script>

<style></style>
