<template>
  <div>
    {{ $t("message.foo") }}
  </div>
</template>

<script>
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
};
</script>

<style></style>
