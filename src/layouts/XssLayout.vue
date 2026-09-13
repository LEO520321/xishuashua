<template>
  <div class="xss-layout">
    <XssHeader />
    <main class="xss-main">
      <router-view />
    </main>
    <XssFooter />
  </div>
</template>

<script setup>
import XssHeader from '@/components/XssHeader.vue'
import XssFooter from '@/components/XssFooter.vue'
</script>

<style scoped>
.xss-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  overflow-x: hidden;
}

.xss-main {
  flex: 1;
}
</style>
