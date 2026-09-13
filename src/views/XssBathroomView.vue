<template>
  <div class="bathroom-page">
    <!-- A. Page Banner -->
    <section class="page-banner">
      <div class="banner-content">
        <h1 class="banner-title">全铝浴室柜</h1>
        <p class="banner-subtitle">防水防潮，耐腐蚀 — 适配多种卫浴空间</p>
      </div>
    </section>

    <!-- B. Product Gallery -->
    <section class="product-gallery">
      <div class="section-container">
        <h2 class="section-title">产品展示</h2>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/bathroom/01.jpg" alt="全铝浴室柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/bathroom/02.jpg" alt="全铝浴室柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/bathroom/03.jpg" alt="全铝浴室柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/bathroom/04.jpg" alt="全铝浴室柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/bathroom/05.jpg" alt="全铝浴室柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/bathroom/06.jpg" alt="全铝浴室柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/bathroom/07.jpg" alt="全铝浴室柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/bathroom/08.jpg" alt="全铝浴室柜" class="gallery-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- C. Features List -->
    <section class="features">
      <div class="section-container">
        <h2 class="section-title">产品优势</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">💧</div>
            <h3 class="feature-name">防水防潮</h3>
            <p class="feature-desc">全铝材质天然防水，不惧浴室潮湿环境，久用不变形</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌿</div>
            <h3 class="feature-name">零醛环保</h3>
            <p class="feature-desc">无甲醛添加，守护家人健康，浴室空间更安心</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3 class="feature-name">持久耐用</h3>
            <p class="feature-desc">铝合金结构，耐腐蚀、防锈蚀，使用寿命长达50年</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3 class="feature-name">个性定制</h3>
            <p class="feature-desc">尺寸、颜色、台盆自由搭配，适配各种卫浴户型</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✨</div>
            <h3 class="feature-name">易清洁</h3>
            <p class="feature-desc">表面光滑不挂污，水渍一擦即净，日常打理更省心</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📐</div>
            <h3 class="feature-name">空间优化</h3>
            <p class="feature-desc">科学分区收纳，镜柜一体设计，最大化利用卫浴空间</p>
          </div>
        </div>
      </div>
    </section>

    <!-- D. Installation Examples -->
    <section class="installations">
      <div class="section-container">
        <h2 class="section-title">安装案例</h2>
        <div class="install-grid">
          <div class="install-item">
            <div class="install-img-wrap">
              <img src="@/assets/images/xishuashua/products/bathroom/01.jpg" alt="浴室柜安装案例" class="gallery-img" />
            </div>
            <p class="install-label">浴室柜安装实景</p>
          </div>
          <div class="install-item">
            <div class="install-img-wrap">
              <img src="@/assets/images/xishuashua/products/bathroom/02.jpg" alt="浴室柜安装案例" class="gallery-img" />
            </div>
            <p class="install-label">浴室柜安装实景</p>
          </div>
          <div class="install-item">
            <div class="install-img-wrap">
              <img src="@/assets/images/xishuashua/products/bathroom/03.jpg" alt="浴室柜安装案例" class="gallery-img" />
            </div>
            <p class="install-label">浴室柜安装实景</p>
          </div>
          <div class="install-item">
            <div class="install-img-wrap">
              <img src="@/assets/images/xishuashua/products/bathroom/04.jpg" alt="浴室柜安装案例" class="gallery-img" />
            </div>
            <p class="install-label">浴室柜安装实景</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 全铝浴室柜 - XssBathroomView
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

/* ===== Shared Section Styles ===== */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #333333;
  text-align: center;
  margin: 0 0 40px 0;
}

section {
  padding: 80px 0;
}

/* ===== Product Gallery ===== */
.product-gallery {
  background-color: #FFFFFF;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.gallery-item {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.gallery-img:hover {
  transform: scale(1.05);
}

/* ===== Features ===== */
.features {
  background-color: #F5F1EC;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 32px 24px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(107, 92, 74, 0.12);
}

.feature-icon {
  font-size: 36px;
  margin-bottom: 16px;
}

.feature-name {
  font-size: 18px;
  font-weight: 600;
  color: #6B5C4A;
  margin: 0 0 10px 0;
}

.feature-desc {
  font-size: 14px;
  color: #999999;
  margin: 0;
  line-height: 1.6;
}

/* ===== Installation Examples ===== */
.installations {
  background-color: #FFFFFF;
}

.install-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.install-item {
  text-align: center;
  border-radius: 8px;
}

.install-img-wrap {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
}

.install-item .gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.install-item .gallery-img:hover {
  transform: scale(1.05);
}

.install-label {
  font-size: 14px;
  color: #8B7B6B;
  margin: 10px 0 0 0;
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

  section {
    padding: 50px 0;
  }

  .section-title {
    font-size: 22px;
    margin-bottom: 28px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .feature-card {
    padding: 24px 16px;
  }

  .feature-icon {
    font-size: 28px;
  }

  .feature-name {
    font-size: 16px;
  }

  .install-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}
</style>
