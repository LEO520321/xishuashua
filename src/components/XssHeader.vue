<template>
  <header class="xss-header">
    <div class="header-container">
      <!-- Logo -->
      <router-link to="/xishuashua" class="logo-area">
        <div class="logo-icon">
          <img src="@/assets/logo.jpg" alt="洗刷刷全铝家具logo" class="logo-img" />
        </div>
        <span class="logo-text">洗刷刷全铝家具</span>
      </router-link>

      <!-- PC: Horizontal Nav — anchor scroll -->
      <nav class="nav-pc">
        <a class="nav-link" href="#about" @click.prevent="scrollTo('about')">公司简介</a>
        <a class="nav-link" href="#products" @click.prevent="scrollTo('products')">产品介绍</a>
        <router-link class="nav-link" to="/xishuashua/news">近期资讯</router-link>
        <a class="nav-link" href="#advantages" @click.prevent="scrollTo('advantages')">优势与服务</a>
        <a class="nav-link" href="#contact" @click.prevent="scrollTo('contact')">联系我们</a>
      </nav>

      <!-- Mobile: Hamburger -->
      <button class="hamburger" @click="openDrawer" aria-label="菜单">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <!-- Drawer Overlay -->
    <div
      class="drawer-overlay"
      :class="{ visible: drawerVisible }"
      @click="closeDrawer"
    ></div>

    <!-- Drawer -->
    <aside class="drawer" :class="{ open: drawerVisible }">
      <div class="drawer-header">
        <span class="drawer-title">菜单</span>
        <button class="drawer-close" @click="closeDrawer" aria-label="关闭菜单">✕</button>
      </div>
      <nav class="drawer-nav">
        <a class="drawer-link" href="#about" @click.prevent="scrollTo('about'); closeDrawer()">公司简介</a>
        <a class="drawer-link" href="#products" @click.prevent="scrollTo('products'); closeDrawer()">产品介绍</a>
        <router-link class="drawer-link" to="/xishuashua/news" @click="closeDrawer()">近期资讯</router-link>
        <a class="drawer-link" href="#advantages" @click.prevent="scrollTo('advantages'); closeDrawer()">优势与服务</a>
        <a class="drawer-link" href="#contact" @click.prevent="scrollTo('contact'); closeDrawer()">联系我们</a>
      </nav>
    </aside>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const drawerVisible = ref(false)

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function scrollTo(id) {
  // 已在首页：直接滚动
  if (route.name === 'xss-home') {
    scrollToId(id)
    return
  }
  // 不在首页：先跳回首页，等 DOM 渲染完成后再滚动
  router.push({ name: 'xss-home' }).then(() => {
    setTimeout(() => scrollToId(id), 80)
  })
}

// 支持带锚点直接打开首页，例如 /#/xishuashua#news
onMounted(() => {
  const hash = route.hash.replace('#', '')
  if (route.name === 'xss-home' && hash) {
    setTimeout(() => scrollToId(hash), 120)
  }
})

function openDrawer() {
  drawerVisible.value = true
  document.body.style.overflow = 'hidden'
}

function closeDrawer() {
  drawerVisible.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.xss-header {
  background-color: #F5F1EC;
  border-bottom: 1px solid #e0d9ce;
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

/* Logo */
.logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #6B5C4A;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  overflow: hidden;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: #6B5C4A;
  white-space: nowrap;
}

/* ============ PC: Horizontal Nav ============ */
.nav-pc {
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-link {
  text-decoration: none;
  font-size: 15px;
  color: #333333;
  transition: color 0.2s;
  white-space: nowrap;
  padding: 4px 0;
  cursor: pointer;
}

.nav-link:hover {
  color: #6B5C4A;
}

/* 当前所在页面（近期资讯）高亮 */
.nav-link.router-link-active {
  color: #6B5C4A;
  font-weight: 600;
  position: relative;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 2px;
  border-radius: 2px;
  background-color: #6B5C4A;
}

/* ============ Mobile: Hamburger ============ */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger-line {
  display: block;
  width: 26px;
  height: 2.5px;
  background-color: #6B5C4A;
  border-radius: 2px;
}

/* Drawer Overlay */
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}

.drawer-overlay.visible {
  opacity: 1;
  pointer-events: auto;
}

/* Drawer */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 320px;
  height: 100vh;
  background: #fff;
  z-index: 2100;
  transform: translateX(100%);
  transition: transform 0.35s ease;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
}

.drawer.open {
  transform: translateX(0);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #eee;
}

.drawer-title {
  font-size: 18px;
  font-weight: 600;
  color: #6B5C4A;
}

.drawer-close {
  background: none;
  border: none;
  font-size: 22px;
  color: #6B5C4A;
  cursor: pointer;
  padding: 4px 8px;
  line-height: 1;
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  flex: 1;
  overflow-y: auto;
}

.drawer-link {
  text-decoration: none;
  font-size: 16px;
  color: #333333;
  padding: 14px 24px;
  transition: background 0.2s, color 0.2s;
  display: block;
}

.drawer-link:hover {
  background: #F5F1EC;
  color: #6B5C4A;
}

.drawer-link.router-link-active {
  background: #F5F1EC;
  color: #6B5C4A;
  font-weight: 600;
}

/* ============ Responsive ============ */
@media (max-width: 768px) {
  .nav-pc {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .logo-text {
    font-size: 18px;
  }

  .header-container {
    height: 56px;
  }
}

@media (min-width: 769px) {
  .drawer,
  .drawer-overlay {
    display: none !important;
  }
}
</style>
