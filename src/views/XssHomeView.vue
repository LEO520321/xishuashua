<template>
  <div class="xss-home">
    <!-- ==================== A. Hero Section ==================== -->
    <section class="hero">
      <img src="@/assets/images/xishuashua/about/promo.png" alt="洗刷刷全铝家具" class="hero-bg" />
      <div class="hero-content">
        <p class="hero-subtitle">来自昆明十万多个家庭的选择</p>
        <p class="hero-tagline">专注全铝洗衣柜 · 全铝家具 · 全铝浴室柜</p>
        <div class="hero-buttons">
          <a href="#about" class="btn btn-primary" @click.prevent="scrollToSection('about')">了解我们</a>
          <a href="#products" class="btn btn-outline" @click.prevent="scrollToSection('products')">查看产品</a>
        </div>
      </div>
    </section>

    <!-- ==================== B. Company Introduction ==================== -->
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">公司简介</h2>
        <p class="section-subtitle">ABOUT US</p>

        <!-- Two-column layout: image left, text right -->
        <div class="about-grid">
          <div class="about-image">
            <img src="@/assets/images/xishuashua/about/about-collage.png" alt="昆明洗刷刷全铝家具定制" class="about-promo-img" />
          </div>
          <div class="about-text">
            <p>昆明洗刷刷全铝家具有限责任公司创始团队自 2019 年深耕云南阳台/浴室空间铝制柜体定制领域，历经多年行业沉淀，于 2023 年 8 月正式注册成立规范化生产企业，是昆明本土集方案研发、非标定制、生产制造、线下展厅体验、同城配送安装、售后维保于一体的源头直营型家居制造企业。</p>
            <p>公司生产基地坐落于中国（云南）自由贸易试验区昆明片区经开区阿拉街道白水塘村 61 号；2024 年落地西山区大商园 D 栋 3 号品牌展厅（西山区洗刷刷家居建材店），构建工厂生产基地 + 建材市场实体展厅双线运营模式，打通线上新媒体获客、线下实景体验的完整经营链路。</p>
            <p>企业以全铝家具，全铝阳台洗衣柜、全铝浴室柜、全铝衣柜、全铝橱柜非标定制为核心赛道，依托铝合金蜂窝板、全铝整板环保材质优势，针对性解决昆明多雨潮湿环境下柜体发霉、生锈、甲醛超标、日晒变形等家装痛点。产品体系覆盖带搓衣板洗衣柜、洗衣机一体柜、高低盆阳台柜、异形切角包管道定制柜、岩板一体浴室柜、阳台收纳杂物柜等；配套陶瓷台盆、石英石台面、龙头五金、下水组件全品类配套供应，支持现代简约、轻奢等多元风格个性化方案输出。</p>
            <p>公司拥有独立加工车间与成熟生产班组，具备自主拆单、柔性非标生产能力，拒绝第三方代工，从原材料裁切、成型、表面处理到成品出库全程自主品控。面向市场形成两大服务体系：针对终端业主提供免费上门量尺、方案设计、送货安装一站式家装服务；面向装修公司、建材门店、整装项目提供稳定工厂直供渠道合作，无中间商溢价。同时布局抖音新媒体线上运营，持续拓宽本地家装市场触达范围。</p>
            <p>依托昆明本地化优势，企业组建自有配送与安装团队，服务范围覆盖昆明全域，建立快速响应的交付与售后机制。自团队起步经营以来，始终坚守"环保耐用、精工定制、诚信经营"理念，持续优化产品工艺与服务流程，不断完善供应链配套能力。未来将持续深耕云南本地全铝定制赛道，拓展多元化铝制家居品类，赋能家装渠道合作伙伴，致力于成为西南地区口碑优良的潮湿空间全铝柜体专业定制服务商。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== C. Product Introduction ==================== -->
    <section id="products" class="section section-alt" style="padding-bottom: 30px;">
      <div class="container">
        <h2 class="section-title">产品介绍</h2>
        <p class="section-subtitle">PRODUCTS</p>

        <!-- Product Rows -->
        <div class="product-list">
          <div class="product-row">
            <div class="product-image">
              <img src="@/assets/images/xishuashua/products/laundry/01.jpg" alt="全铝洗衣柜" class="product-img" />
            </div>
            <div class="product-info">
              <h3 class="product-name">全铝洗衣柜</h3>
              <p class="product-desc">防水防潮，持久耐用；专为阳台、洗衣房定制设计</p>
              <router-link to="/xishuashua/products/laundry" class="product-link">查看系列 &rarr;</router-link>
            </div>
          </div>

          <div class="product-row">
            <div class="product-image">
              <img src="@/assets/images/xishuashua/products/furniture/01.jpg" alt="全铝家具" class="product-img" />
            </div>
            <div class="product-info">
              <h3 class="product-name">全铝家具</h3>
              <p class="product-desc">环保零醛，坚固耐用；全屋定制：橱柜、衣柜、餐边柜</p>
              <router-link to="/xishuashua/products/furniture" class="product-link">查看系列 &rarr;</router-link>
            </div>
          </div>

          <div class="product-row">
            <div class="product-image">
              <img src="@/assets/images/xishuashua/products/bathroom/01.jpg" alt="全铝浴室柜" class="product-img" />
            </div>
            <div class="product-info">
              <h3 class="product-name">全铝浴室柜</h3>
              <p class="product-desc">防水防潮，耐腐蚀；适配多种卫浴空间</p>
              <router-link to="/xishuashua/products/bathroom" class="product-link">查看系列 &rarr;</router-link>
            </div>
          </div>
        </div>

        <!-- <div class="section-action">
          <router-link to="/xishuashua/cases" class="btn btn-outline">查看更多案例 &rarr;</router-link>
        </div> -->
      </div>
    </section>

    <!-- ==================== D. Advantages & Services ==================== -->
    <section id="advantages" class="section">
      <div class="container">
        <h2 class="section-title">优势与服务</h2>
        <p class="section-subtitle">ADVANTAGES &amp; SERVICES</p>

        <!-- 4 Feature Blocks -->
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <img src="@/assets/images/xishuashua/advantages/advantages.png" alt="零醛环保" class="feature-img" />
            </div>
            <h4 class="feature-title">零醛环保</h4>
            <p class="feature-desc">环保0醛0甲醛，健康安全；守护家人每一次呼吸</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-circle">
                <span class="icon-shield">🛡</span>
              </div>
            </div>
            <h4 class="feature-title">坚固耐用</h4>
            <p class="feature-desc">铝合金结构，硬度高；抗压耐磨，使用寿命长</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-circle">
                <span class="icon-water">💧</span>
              </div>
            </div>
            <h4 class="feature-title">防水防潮</h4>
            <p class="feature-desc">全铝材质防水防潮；不怕潮湿环境，耐用长久</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-circle">
                <span class="icon-custom">✨</span>
              </div>
            </div>
            <h4 class="feature-title">个性定制</h4>
            <p class="feature-desc">按需定制，风格随心搭配；满足个性化需求</p>
          </div>
        </div>

        <!-- Service Columns -->
        <div class="service-columns">
          <div class="service-col">
            <div class="service-icon-wrap">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6B5C4A" stroke-width="1.5"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>
            </div>
            <h4 class="service-title">售前服务</h4>
            <ul class="service-list">
              <li>免费咨询，专业设计师一对一解答</li>
              <li>上门量尺，精准测量空间尺寸　　</li>
              <li>方案设计，提供定制专属方案　　</li>
            </ul>
          </div>

          <div class="service-col">
            <div class="service-icon-wrap">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6B5C4A" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <h4 class="service-title">售中服务</h4>
            <ul class="service-list">
              <li>自有工厂，标准流程保质放心</li>
              <li>配送安装，专人配送准时到位</li>
              <li>安装调试，专业团队规范施工</li>
            </ul>
          </div>

          <div class="service-col">
            <div class="service-icon-wrap">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6B5C4A" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            </div>
            <h4 class="service-title">售后服务</h4>
            <ul class="service-list">
              <li>五年质保，产品五年质保服务</li>
              <li>不定期回访，跟踪使用情况&nbsp;</li>
              <li>快速响应，2小时内快速响应</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== E. Contact ==================== -->
    <section id="contact" class="section section-alt">
      <div class="container">
        <h2 class="section-title">联系我们</h2>
        <p class="section-subtitle">CONTACT US</p>

        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B5C4A" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <p class="contact-label">联系电话</p>
            <p class="contact-value">15974842179 李生</p>
          </div>

          <div class="contact-card">
            <div class="contact-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B5C4A" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <p class="contact-label">电子邮箱</p>
            <p class="contact-value">1605120355@qq.com</p>
          </div>

          <div class="contact-card">
            <div class="contact-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B5C4A" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <p class="contact-label" style="margin-top: 16px">门店地址</p>
            <p class="contact-value">云南省昆明市西山区大商园 D 栋 3 号品牌展厅（西山区洗刷刷家居建材店）</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* ==================== Shared ==================== */
.xss-home {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #F5F1EC;
  color: #333333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.section-alt {
  background: #fff;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #6B5C4A;
  text-align: center;
  margin: 0 0 8px;
}

.section-subtitle {
  font-size: 14px;
  color: #999999;
  text-align: center;
  margin: 0 0 48px;
  letter-spacing: 2px;
}

.section-action {
  text-align: center;
  margin-top: 32px;
}

/* Image Placeholder */
.img-placeholder {
  background: #e8e4df;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #999;
  font-size: 14px;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 32px;
  border-radius: 6px;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
  font-weight: 500;
}

.btn-primary {
  background: #6B5C4A;
  color: #fff;
  border-color: #6B5C4A;
}

.btn-primary:hover {
  background: #8B7B6B;
  border-color: #8B7B6B;
}

.btn-outline {
  background: transparent;
  color: #6B5C4A;
  border-color: #6B5C4A;
}

.btn-outline:hover {
  background: #6B5C4A;
  color: #fff;
}

/* ==================== A. Hero ==================== */
.hero {
  position: relative;
  width: 100vw;
  height: 500px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  position: absolute;
  bottom: 40px;
  left: 60px;
  z-index: 2;
}

.hero-subtitle {
  font-size: 18px;
  color: #333333;
  margin: 0 0 10px;
  font-weight: 500;
}

.hero-tagline {
  font-size: 14px;
  color: #666666;
  margin: 0 0 28px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* ==================== B. About ==================== */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.about-image {
  position: sticky;
  top: 84px;
}

.about-promo-img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.about-text p {
  font-size: 14px;
  color: #555;
  line-height: 1.9;
  margin: 0 0 16px;
  text-indent: 2em;
}

.about-text p:last-child {
  margin-bottom: 0;
}

/* ==================== C. Products ==================== */
.product-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 48px;
}

.product-row {
  display: flex;
  align-items: center;
  gap: 40px;
}

.product-image {
  flex: 0 0 48%;
}

.product-info {
  flex: 1;
}

.product-name {
  font-size: 24px;
  font-weight: 700;
  color: #6B5C4A;
  margin: 0 0 12px;
}

.product-desc {
  font-size: 15px;
  color: #666;
  line-height: 1.7;
  margin: 0 0 16px;
}

.product-link {
  font-size: 14px;
  color: #6B5C4A;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.product-link:hover {
  color: #8B7B6B;
}

/* ==================== D. Advantages ==================== */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 56px;
}

.feature-card {
  background: #fff;
  border-radius: 10px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-2px);
}

.feature-icon {
  margin-bottom: 16px;
}

.icon-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #F5F1EC;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 28px;
}

.feature-title {
  font-size: 18px;
  font-weight: 600;
  color: #6B5C4A;
  margin: 0 0 10px;
}

.feature-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

/* Service Columns */
.service-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  max-width: 1000px;
  margin: 0 auto;
}

.service-col {
  padding: 32px 24px;
  border-right: 1px solid #e8e4df;
}

.service-col:last-child {
  border-right: none;
}

.service-icon-wrap {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}

.service-title {
  font-size: 20px;
  font-weight: 700;
  color: #6B5C4A;
  margin: 0 0 20px;
  text-align: center;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: fit-content;
  text-align: left;
}

.service-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 10px;
}

.service-list li::before {
  content: '✓';
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #6B5C4A;
  color: #fff;
  font-size: 9px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
}

.service-list li::after {
  display: none;
}

/* ==================== Responsive: Tablet (≤768px) ==================== */
@media (max-width: 768px) {
  .section {
    padding: 50px 0;
  }

  .section-title {
    font-size: 24px;
  }

  /* Hero */
  .hero {
    height: 350px;
  }

  .hero-content {
    left: 24px;
    bottom: 24px;
    right: 24px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-tagline {
    font-size: 13px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-buttons .btn {
    width: 100%;
    text-align: center;
  }

  /* About */
  .about-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .about-image {
    position: static;
  }

  /* Products */
  .product-row {
    flex-direction: column;
    gap: 20px;
  }

  .product-image {
    flex: none;
    width: 100%;
  }

  /* Service */
  .service-columns {
    grid-template-columns: 1fr;
  }

  .service-col {
    border-right: none;
    border-bottom: 1px solid #e8e4df;
    padding: 24px 16px;
  }

  .service-col:last-child {
    border-bottom: none;
  }

  /* Features */
  .features-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .feature-card {
    padding: 24px 16px;
  }
}

/* ==================== Responsive: Phone (≤480px) ==================== */
@media (max-width: 480px) {
  .hero {
    height: auto;
    overflow: visible;
    background-color: #F5F1EC;
  }

  .hero-bg {
    position: static;
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  .hero-content {
    position: static;
    padding: 20px 16px 28px;
    text-align: center;
  }

  .hero-subtitle {
    color: #6B5C4A;
  }

  .hero-tagline {
    color: #8B7B6B;
  }

  .hero-title {
    font-size: 24px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 240px;
    text-align: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}

/* Contact Section */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.contact-card {
  background: #fff;
  border-radius: 10px;
  padding: 36px 24px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s;
}

.contact-card:hover {
  transform: translateY(-2px);
}

.contact-card-wide {
  text-align: left;
  line-height: 1.7;
}

.contact-icon {
  margin-bottom: 14px;
  display: flex;
  justify-content: center;
}

.contact-label {
  font-size: 16px;
  font-weight: 600;
  color: #6B5C4A;
  margin: 0 0 8px;
}

.contact-value {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.product-img { width: 100%; height: 260px; object-fit: cover; border-radius: 8px; }
.stats-img { width: 100%; max-width: 600px; margin: 0 auto; display: block; }
.feature-img { width: 64px; height: 64px; object-fit: contain; }
</style>
