<template>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  color: #333333;
  background: #ffffff;
  font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  font-family: inherit;
  cursor: pointer;
}
</style>
