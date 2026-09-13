<template>
  <footer class="xss-footer">
    <div class="footer-container">
      <!-- Column 1: Brand -->
      <div class="footer-col footer-col-brand">
        <h3 class="footer-logo">洗刷刷全铝家具</h3>
        <p class="footer-tagline">专注全铝家具定制 昆明本地匠心品牌</p>
        <p class="footer-slogan">匠心品质 · 安心之选</p>
      </div>

      <!-- Column 2: Contact -->
      <div class="footer-col footer-col-contact">
        <div class="footer-contact-item">
          <span class="footer-label">联系电话</span>
          <span class="footer-value">18469176359 陈生</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-label">工厂地址</span>
          <span class="footer-value">云南省昆明市经济开发区阿拉街道白水塘村 61 号</span>
        </div>
      </div>

      <!-- Column 3: QR Code -->
      <div class="footer-col footer-col-qr">
        <p class="footer-qr-title">关注我们</p>
        <div class="footer-qr-box">
          <img src="@/assets/images/xishuashua/wechat-qr.jpg" alt="微信公众号二维码" class="footer-qr-img" />
        </div>
        <p class="footer-qr-sub">了解更多产品与服务</p>
      </div>
    </div>

    <!-- Bottom Bar -->
    <!-- <div class="footer-bottom">
      <p class="footer-copyright">© 2019-2025 洗刷刷全铝家具 版权所有</p>
      <p class="footer-icp">滇ICP备12345678号-1</p>
    </div> -->
  </footer>
</template>

<script setup>
</script>

<style scoped>
.xss-footer {
  background-color: #3D3226;
  color: #fff;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  padding: 50px 0 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

/* Brand Column */
.footer-logo {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 12px;
  color: #fff;
}

.footer-tagline {
  font-size: 14px;
  color: #ccc;
  margin: 0 0 8px;
  line-height: 1.6;
}

.footer-slogan {
  font-size: 14px;
  color: #aaa;
  margin: 0;
}

/* Contact Column */
.footer-contact-item {
  margin-bottom: 12px;
  line-height: 1.6;
}

.footer-label {
  font-size: 13px;
  color: #aaa;
  margin-right: 8px;
}

.footer-value {
  font-size: 14px;
  color: #ddd;
}

/* QR Column */
.footer-col-qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-qr-title {
  font-size: 14px;
  color: #ccc;
  margin: 0 0 12px;
}

.footer-qr-box {
  width: 120px;
  height: 120px;
  background: #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin-bottom: 10px;
}

.footer-qr-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footer-qr-sub {
  font-size: 12px;
  color: #888;
  margin: 0;
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding: 20px;
  text-align: center;
}

.footer-copyright {
  font-size: 12px;
  color: #999;
  margin: 0 0 4px;
}

.footer-icp {
  font-size: 12px;
  color: #777;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .xss-footer {
    padding: 40px 0 0;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .footer-col-qr {
    align-items: center;
  }

  .footer-bottom {
    margin-top: 30px;
  }
}
</style>
