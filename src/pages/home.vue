<template>
  <div class="home">
    home
    <p>这里是一个时间过滤器：{{nowDate | dateFormat}}</p>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
        nowDate: new Date()
      };
    },
    methods: {},
    mounted() {
    },
    compontents: {},
  };
</script>
<style scoped lang="scss">
  .home {}
</style>