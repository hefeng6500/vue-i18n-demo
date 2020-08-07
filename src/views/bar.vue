<template>
  <div>
    {{$t('message.bar')}}
  </div>
</template>

<script>
export default {
  i18n: {
    messages: {
      en_US: {
        message: {
          bar: "bar",
        },
      },
      zh_CN: {
        message: {
          bar: "中文 bar",
        },
      },
    },
  },
};
</script>

<style></style>
