<template>
  <div class="furniture-page">
    <!-- A. Page Banner -->
    <section class="page-banner">
      <div class="banner-content">
        <h1 class="banner-title">全铝家具</h1>
        <p class="banner-subtitle">环保零醛，坚固耐用 — 全屋定制：橱柜、衣柜、餐边柜</p>
      </div>
    </section>

    <!-- B. Product Categories -->
    <section class="categories">
      <div class="section-container">
        <h2 class="section-title">产品分类</h2>
        <div class="categories-grid">
          <div class="category-card">
            <div class="category-image">
              <img src="@/assets/images/xishuashua/products/furniture/01.jpg" alt="橱柜" class="category-img" />
            </div>
            <div class="category-info">
              <h3 class="category-name">橱柜</h3>
              <p class="category-desc">全铝橱柜，防水防潮、防火耐高温，让厨房更安全耐用。模块化设计，可根据厨房户型自由定制。</p>
            </div>
          </div>
          <div class="category-card">
            <div class="category-image">
              <img src="@/assets/images/xishuashua/products/furniture/02.jpg" alt="衣柜" class="category-img" />
            </div>
            <div class="category-info">
              <h3 class="category-name">衣柜</h3>
              <p class="category-desc">全铝衣柜，零甲醛释放，即装即住。多种门板风格可选，内部格局随心定制，满足全家收纳需求。</p>
            </div>
          </div>
          <div class="category-card">
            <div class="category-image">
              <img src="@/assets/images/xishuashua/products/furniture/03.jpg" alt="餐边柜" class="category-img" />
            </div>
            <div class="category-info">
              <h3 class="category-name">餐边柜</h3>
              <p class="category-desc">全铝餐边柜，兼具收纳与展示功能。简约时尚外观，提升餐厅整体格调，轻松融入各种家装风格。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- C. Product Gallery -->
    <section class="product-gallery">
      <div class="section-container">
        <h2 class="section-title">更多产品展示</h2>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/furniture/01.jpg" alt="全铝家具" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/furniture/02.jpg" alt="全铝家具" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/furniture/03.jpg" alt="全铝家具" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/furniture/04.jpg" alt="全铝家具" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/furniture/05.jpg" alt="全铝家具" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/furniture/06.jpg" alt="全铝家具" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/furniture/07.jpg" alt="全铝家具" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/furniture/08.jpg" alt="全铝家具" class="gallery-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- D. Features List -->
    <section class="features">
      <div class="section-container">
        <h2 class="section-title">核心优势</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">💧</div>
            <h3 class="feature-name">防水防潮</h3>
            <p class="feature-desc">全铝材质天然防水，不惧潮湿环境，厨房卫生间均可使用</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌿</div>
            <h3 class="feature-name">零醛环保</h3>
            <p class="feature-desc">无甲醛添加，即装即住，守护家人健康</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3 class="feature-name">持久耐用</h3>
            <p class="feature-desc">铝合金结构，防虫蛀、抗腐蚀，使用寿命长达50年</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3 class="feature-name">个性定制</h3>
            <p class="feature-desc">尺寸、颜色、功能自由搭配，全屋风格统一协调</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✨</div>
            <h3 class="feature-name">易清洁</h3>
            <p class="feature-desc">表面光滑不吸污，一擦即净，家务更轻松</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📐</div>
            <h3 class="feature-name">空间优化</h3>
            <p class="feature-desc">科学规划收纳空间，最大化利用每一寸家居面积</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 全铝家具 - XssFurnitureView
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

/* ===== Product Categories ===== */
.categories {
  background-color: #FFFFFF;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.category-card {
  background-color: #FFFFFF;
  border: 1px solid #EBE7E2;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(107, 92, 74, 0.12);
}

.category-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.category-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background-color: #F5F1EC;
  transition: transform 0.3s;
}

.category-card:hover .category-img {
  transform: scale(1.05);
}

.category-info {
  padding: 20px;
}

.category-name {
  font-size: 20px;
  font-weight: 600;
  color: #6B5C4A;
  margin: 0 0 10px 0;
}

.category-desc {
  font-size: 14px;
  color: #999999;
  margin: 0;
  line-height: 1.6;
}

/* ===== Product Gallery ===== */
.product-gallery {
  background-color: #F5F1EC;
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
  background-color: #FFFFFF;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  background-color: #F5F1EC;
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

  .categories-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .category-image {
    height: 180px;
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
}
</style>
