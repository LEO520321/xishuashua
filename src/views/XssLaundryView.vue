<template>
  <div class="laundry-page">
    <!-- A. Page Banner -->
    <section class="page-banner">
      <div class="banner-content">
        <h1 class="banner-title">全铝洗衣柜</h1>
        <p class="banner-subtitle">防水防潮，持久耐用 — 专为阳台、洗衣房定制设计</p>
      </div>
    </section>

    <!-- B. Product Gallery -->
    <section class="product-gallery">
      <div class="section-container">
        <h2 class="section-title">产品展示</h2>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/laundry/01.jpg" alt="全铝洗衣柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/laundry/02.jpg" alt="全铝洗衣柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/laundry/03.jpg" alt="全铝洗衣柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/laundry/04.jpg" alt="全铝洗衣柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/laundry/05.jpg" alt="全铝洗衣柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/laundry/06.jpg" alt="全铝洗衣柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/laundry/07.jpg" alt="全铝洗衣柜" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/images/xishuashua/products/laundry/08.jpg" alt="全铝洗衣柜" class="gallery-img" />
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
            <p class="feature-desc">全铝材质天然防水，不惧潮湿环境</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌿</div>
            <h3 class="feature-name">零醛环保</h3>
            <p class="feature-desc">无甲醛添加，守护家人健康</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3 class="feature-name">持久耐用</h3>
            <p class="feature-desc">铝合金结构，使用寿命长达50年</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3 class="feature-name">个性定制</h3>
            <p class="feature-desc">尺寸、颜色、功能自由搭配</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✨</div>
            <h3 class="feature-name">易清洁</h3>
            <p class="feature-desc">表面光滑，一擦即净</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📐</div>
            <h3 class="feature-name">空间优化</h3>
            <p class="feature-desc">合理利用阳台/洗衣房每一寸空间</p>
          </div>
        </div>
      </div>
    </section>

    <!-- D. Specifications Table -->
    <section class="specifications">
      <div class="section-container">
        <h2 class="section-title">产品规格</h2>
        <div class="spec-table-wrapper">
          <table class="spec-table">
            <thead>
              <tr>
                <th>项目</th>
                <th>参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>材质</td>
                <td>6063-T5 铝合金</td>
              </tr>
              <tr>
                <td>表面处理</td>
                <td>静电粉末喷涂 / 木纹转印</td>
              </tr>
              <tr>
                <td>台面</td>
                <td>石英石 / 岩板 / 铝板</td>
              </tr>
              <tr>
                <td>柜体厚度</td>
                <td>18mm</td>
              </tr>
              <tr>
                <td>适用场景</td>
                <td>阳台、洗衣房、卫生间</td>
              </tr>
              <tr>
                <td>定制范围</td>
                <td>尺寸 / 颜色 / 功能分区自由定制</td>
              </tr>
              <tr>
                <td>质保</td>
                <td>5年质保</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 全铝洗衣柜 - XssLaundryView
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

/* ===== Specifications ===== */
.specifications {
  background-color: #FFFFFF;
}

.spec-table-wrapper {
  max-width: 800px;
  margin: 0 auto;
  overflow-x: auto;
}

.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

.spec-table th,
.spec-table td {
  padding: 14px 20px;
  text-align: left;
  border-bottom: 1px solid #EBE7E2;
}

.spec-table th {
  background-color: #6B5C4A;
  color: #FFFFFF;
  font-weight: 600;
  white-space: nowrap;
}

.spec-table thead th:first-child {
  border-radius: 6px 0 0 0;
}

.spec-table thead th:last-child {
  border-radius: 0 6px 0 0;
}

.spec-table tbody tr:hover {
  background-color: #FAF8F5;
}

.spec-table tbody td:first-child {
  color: #6B5C4A;
  font-weight: 500;
  white-space: nowrap;
}

.spec-table tbody td:last-child {
  color: #333333;
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

  .spec-table th,
  .spec-table td {
    padding: 10px 14px;
    font-size: 13px;
  }
}
</style>
