<template>
  <base-layout v-if="$route.name !== 'register' && $route.name !== 'login'">
    <router-view></router-view>
  </base-layout>

  <section v-else>
    <router-view></router-view>
  </section>
</template>

<script>
import BaseLayout from './components/layouts/BaseLayout.vue';
export default {
  name: 'App',
  components: {
    BaseLayout
  },
}
</script>

<style>
@import './styles/style.scss';
</style>