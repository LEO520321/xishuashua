<template>
  <div class="news-page">
    <!-- A. Page Banner -->
    <section class="page-banner">
      <div class="banner-content">
        <h1 class="banner-title">近期资讯</h1>
        <p class="banner-subtitle">公司动态 · 新品发布 · 产品科普 — 记录洗刷刷的每一步</p>
      </div>
    </section>

    <!-- B. 全部资讯：左清单 + 右详情 -->
    <section class="news-section">
      <div class="section-container">
        <XssNewsBoard
          :limit="0"
          :show-filter="true"
          :sticky="true"
          :sync-query="true"
          list-max-height="calc(100vh - 320px)"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
// 全部资讯页 —— 展示逻辑复用 XssNewsBoard 组件
import XssNewsBoard from '@/components/XssNewsBoard.vue'
</script>

<style scoped>
/* ===== Page Banner ===== */
.page-banner {
  width: 100%;
  height: 300px;
  background-color: #F5F1EC;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-content {
  text-align: center;
  padding: 0 20px;
}

.banner-title {
  font-size: 36px;
  font-weight: 700;
  color: #6B5C4A;
  margin: 0 0 12px 0;
}

.banner-subtitle {
  font-size: 16px;
  color: #8B7B6B;
  margin: 0;
}

/* ===== Layout ===== */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.news-section {
  background-color: #F5F1EC;
  padding: 60px 0 80px;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .page-banner {
    height: 200px;
  }

  .banner-title {
    font-size: 28px;
  }

  .banner-subtitle {
    font-size: 14px;
  }

  .news-section {
    padding: 36px 0 50px;
  }
}
</style>
