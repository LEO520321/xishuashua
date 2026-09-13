<template>
  <div class="news-board">
    <!-- ============ 左：过往资讯清单 ============ -->
    <aside class="news-sidebar" :class="{ 'is-sticky': sticky }">
      <div class="sidebar-head">
        <h3 class="sidebar-title">过往资讯</h3>
        <span class="sidebar-count">{{ filteredNews.length }} 条</span>
      </div>

      <div v-if="showFilter" class="filter-row">
        <button
          v-for="cat in categoryTabs"
          :key="cat"
          class="filter-chip"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <ul class="news-list" :style="{ maxHeight: sticky ? listMaxHeight : 'none' }">
        <li v-for="item in filteredNews" :key="item.id">
          <button
            class="news-item"
            :class="{ active: item.id === activeId }"
            @click="selectNews(item.id)"
          >
            <div class="news-item-top">
              <span class="news-date">{{ item.date }}</span>
              <span class="news-tag" :class="tagClass(item.category)">{{ item.category }}</span>
            </div>
            <h4 class="news-item-title">{{ item.title }}</h4>
            <p v-if="item.summary" class="news-item-summary">{{ item.summary }}</p>
          </button>
        </li>
      </ul>

      <p v-if="!filteredNews.length" class="list-empty">该分类下暂无资讯</p>
    </aside>

    <!-- ============ 右：资讯详情 ============ -->
    <article ref="detailRef" class="news-detail">
      <template v-if="activeNews">
        <div v-if="activeNews.cover" class="detail-cover">
          <img :src="activeNews.cover" :alt="activeNews.title" />
        </div>

        <div class="detail-body">
          <div class="detail-meta">
            <span class="news-tag" :class="tagClass(activeNews.category)">
              {{ activeNews.category }}
            </span>
            <span class="detail-date">{{ activeNews.date }}</span>
          </div>

          <h2 class="detail-title">{{ activeNews.title }}</h2>

          <div class="detail-divider"></div>

          <div class="detail-content">
            <template v-for="(block, idx) in activeNews.content" :key="idx">
              <h3 v-if="block.type === 'heading'" class="block-heading">{{ block.text }}</h3>

              <p v-else-if="block.type === 'paragraph'" class="block-paragraph">
                {{ block.text }}
              </p>

              <ul v-else-if="block.type === 'list'" class="block-list">
                <li v-for="(li, i) in block.items" :key="i">{{ li }}</li>
              </ul>

              <blockquote v-else-if="block.type === 'quote'" class="block-quote">
                {{ block.text }}
              </blockquote>

              <figure v-else-if="block.type === 'image'" class="block-figure">
                <img :src="block.src" :alt="block.caption || activeNews.title" />
                <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
              </figure>
            </template>
          </div>

          <!-- 上一条 / 下一条 -->
          <div class="detail-nav">
            <button
              class="nav-btn"
              :disabled="!prevNews"
              @click="prevNews && selectNews(prevNews.id)"
            >
              <span class="nav-label">上一条</span>
              <span class="nav-title">{{ prevNews ? prevNews.title : '已经是最新一条' }}</span>
            </button>
            <button
              class="nav-btn nav-btn-next"
              :disabled="!nextNews"
              @click="nextNews && selectNews(nextNews.id)"
            >
              <span class="nav-label">下一条</span>
              <span class="nav-title">{{ nextNews ? nextNews.title : '已经是最后一条' }}</span>
            </button>
          </div>
        </div>
      </template>

      <div v-else class="detail-empty">暂无资讯内容</div>
    </article>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { sortedNews, findNewsById, newsCategories } from '@/data/news'

const props = defineProps({
  /* 最多展示多少条，0 = 全部 */
  limit: { type: Number, default: 0 },
  /* 是否显示分类筛选 */
  showFilter: { type: Boolean, default: false },
  /* 左栏是否吸顶 */
  sticky: { type: Boolean, default: true },
  /* 选中项与 URL 的同步方式：
     'none'  不同步（首页等嵌入场景）
     'param' 路径参数，形如 /xishuashua/news/文章标识
     'query' 查询串，形如 /xishuashua/news?id=文章标识 */
  syncMode: { type: String, default: 'none' },
  /* 左栏清单最大高度（仅 sticky 时生效） */
  listMaxHeight: { type: String, default: 'calc(100vh - 320px)' },
  /* 窄屏下选中后是否滚动到详情 */
  scrollOnSelect: { type: Boolean, default: true }
})

const route = useRoute()
const router = useRouter()
const detailRef = ref(null)

/* 当前模块使用的基础列表（按 limit 截断） */
const baseNews = computed(() =>
  props.limit > 0 ? sortedNews.slice(0, props.limit) : sortedNews
)

/* ---------- 分类筛选 ---------- */
const categoryTabs = ['全部', ...newsCategories]
const activeCategory = ref('全部')

const filteredNews = computed(() => {
  if (activeCategory.value === '全部') return baseNews.value
  return baseNews.value.filter((n) => n.category === activeCategory.value)
})

/* ---------- 当前选中的资讯 ---------- */
function readIdFromUrl() {
  if (props.syncMode === 'param') return route.params.id || ''
  if (props.syncMode === 'query') return route.query.id || ''
  return ''
}

function resolveInitialId() {
  const idFromUrl = readIdFromUrl()
  if (idFromUrl && baseNews.value.some((n) => n.id === idFromUrl)) return idFromUrl
  return baseNews.value.length ? baseNews.value[0].id : ''
}

const activeId = ref(resolveInitialId())

/* 支持直接用 URL 打开某一条（含浏览器前进/后退） */
watch(
  () => [route.params.id, route.query.id],
  () => {
    const idFromUrl = readIdFromUrl()
    if (idFromUrl && baseNews.value.some((n) => n.id === idFromUrl)) {
      activeId.value = idFromUrl
    }
  }
)

const activeNews = computed(() => findNewsById(activeId.value))

/* 切换分类后，若当前详情不在该分类里，自动选中该分类第一条 */
watch(activeCategory, () => {
  if (!filteredNews.value.length) return
  if (!filteredNews.value.some((n) => n.id === activeId.value)) {
    selectNews(filteredNews.value[0].id, false)
  }
})

/* ---------- 上一条 / 下一条 ---------- */
const activeIndex = computed(() => baseNews.value.findIndex((n) => n.id === activeId.value))
const prevNews = computed(() =>
  activeIndex.value > 0 ? baseNews.value[activeIndex.value - 1] : null
)
const nextNews = computed(() =>
  activeIndex.value >= 0 && activeIndex.value < baseNews.value.length - 1
    ? baseNews.value[activeIndex.value + 1]
    : null
)

function selectNews(id, scroll = true) {
  activeId.value = id
  syncUrl(id)

  // 窄屏下清单在详情上方，选中后滚动到详情
  if (scroll && props.scrollOnSelect && window.innerWidth <= 900 && detailRef.value) {
    const top = detailRef.value.getBoundingClientRect().top + window.pageYOffset - 76
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

/* 把当前选中项写回 URL，便于刷新保持 / 分享 / 前进后退 */
function syncUrl(id) {
  if (props.syncMode === 'param') {
    if (route.params.id !== id) {
      router.replace({ name: route.name, params: { ...route.params, id } })
    }
  } else if (props.syncMode === 'query') {
    if (route.query.id !== id) {
      router.replace({ query: { ...route.query, id } })
    }
  }
}

/* 首次进入且 URL 未指定条目时，把默认选中的第一条写进 URL */
onMounted(() => {
  if (props.syncMode !== 'none' && activeId.value && !readIdFromUrl()) {
    syncUrl(activeId.value)
  }
})

/* ---------- 展示辅助 ---------- */
function tagClass(category) {
  if (category === '新品发布') return 'tag-new'
  if (category === '产品科普') return 'tag-science'
  return 'tag-company'
}
</script>

<style scoped>
/* ===== 左右布局 ===== */
.news-board {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 28px;
  align-items: start;
}

/* ===== 左侧：资讯清单 ===== */
.news-sidebar {
  background-color: #FFFFFF;
  border: 1px solid #EBE7E2;
  border-radius: 10px;
  padding: 22px 20px;
  box-sizing: border-box;
}

.news-sidebar.is-sticky {
  position: sticky;
  top: 88px;
}

.sidebar-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid #EBE7E2;
}

.sidebar-title {
  font-size: 18px;
  font-weight: 700;
  color: #6B5C4A;
  margin: 0;
}

.sidebar-count {
  font-size: 13px;
  color: #999999;
}

/* 分类筛选 */
.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0 14px;
}

.filter-chip {
  font-family: inherit;
  font-size: 13px;
  color: #6B5C4A;
  background-color: #F5F1EC;
  border: 1px solid #EBE7E2;
  border-radius: 999px;
  padding: 5px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  line-height: 1.2;
}

.filter-chip:hover {
  border-color: #C9BBA9;
}

.filter-chip.active {
  background-color: #6B5C4A;
  border-color: #6B5C4A;
  color: #FFFFFF;
}

/* 清单 */
.news-list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
}

.news-item {
  display: block;
  width: 100%;
  text-align: left;
  font-family: inherit;
  background: none;
  border: none;
  border-left: 3px solid transparent;
  border-bottom: 1px solid #F1EDE7;
  padding: 14px 10px 14px 13px;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.news-item:hover {
  background-color: #FAF8F5;
}

.news-item.active {
  background-color: #F5F1EC;
  border-left-color: #6B5C4A;
}

.news-item-top {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 7px;
}

.news-date {
  font-size: 12px;
  color: #999999;
  letter-spacing: 0.4px;
}

.news-tag {
  display: inline-block;
  font-size: 11px;
  line-height: 1;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
}

.tag-company {
  background-color: #EFE9E1;
  color: #6B5C4A;
}

.tag-new {
  background-color: #FBEEE3;
  color: #B5713A;
}

.tag-science {
  background-color: #E8F0E9;
  color: #4F7A57;
}

.news-item-title {
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  line-height: 1.55;
  margin: 0;
  transition: color 0.2s ease;
}

.news-item.active .news-item-title,
.news-item:hover .news-item-title {
  color: #6B5C4A;
}

.news-item-summary {
  font-size: 12px;
  color: #999999;
  line-height: 1.6;
  margin: 6px 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.list-empty {
  font-size: 13px;
  color: #999999;
  text-align: center;
  padding: 30px 0;
  margin: 0;
}

/* ===== 右侧：资讯详情 ===== */
.news-detail {
  background-color: #FFFFFF;
  border: 1px solid #EBE7E2;
  border-radius: 10px;
  overflow: hidden;
  min-height: 480px;
}

.detail-cover {
  width: 100%;
  overflow: hidden;
}

.detail-cover img {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  display: block;
}

.detail-body {
  padding: 32px 40px 36px;
}

.detail-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.detail-date {
  font-size: 13px;
  color: #999999;
  letter-spacing: 0.4px;
}

.detail-title {
  font-size: 26px;
  font-weight: 700;
  color: #333333;
  line-height: 1.45;
  margin: 0 0 20px 0;
}

.detail-divider {
  width: 56px;
  height: 3px;
  background-color: #6B5C4A;
  border-radius: 2px;
  margin-bottom: 28px;
}

/* 内容块 */
.block-paragraph {
  font-size: 15px;
  color: #555555;
  line-height: 1.95;
  margin: 0 0 18px 0;
  text-align: justify;
}

.block-heading {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: #6B5C4A;
  line-height: 1.5;
  margin: 32px 0 14px 0;
  padding-left: 14px;
}

.block-heading::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 3px;
  border-radius: 2px;
  background-color: #C9BBA9;
}

.block-list {
  list-style: none;
  margin: 0 0 18px 0;
  padding: 0;
}

.block-list li {
  position: relative;
  font-size: 15px;
  color: #555555;
  line-height: 1.85;
  padding-left: 20px;
  margin-bottom: 8px;
}

.block-list li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 11px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #6B5C4A;
}

.block-quote {
  margin: 24px 0;
  padding: 16px 22px;
  background-color: #FAF8F5;
  border-left: 3px solid #C9BBA9;
  border-radius: 0 6px 6px 0;
  font-size: 15px;
  color: #6B5C4A;
  line-height: 1.85;
}

.block-figure {
  margin: 26px 0;
}

.block-figure img {
  width: 100%;
  border-radius: 8px;
  display: block;
}

.block-figure figcaption {
  font-size: 13px;
  color: #999999;
  text-align: center;
  margin-top: 10px;
}

/* 上一条 / 下一条 */
.detail-nav {
  display: flex;
  gap: 16px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid #EBE7E2;
}

.nav-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
  font-family: inherit;
  background-color: #FAF8F5;
  border: 1px solid #EBE7E2;
  border-radius: 8px;
  padding: 14px 18px;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.nav-btn:hover:not(:disabled) {
  border-color: #C9BBA9;
  background-color: #F5F1EC;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-btn-next {
  text-align: right;
}

.nav-label {
  font-size: 12px;
  color: #999999;
}

.nav-title {
  font-size: 14px;
  color: #333333;
  font-weight: 500;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.detail-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 480px;
  font-size: 14px;
  color: #999999;
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .news-board {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .news-sidebar.is-sticky {
    position: static;
  }

  .news-list {
    max-height: none !important;
  }

  .detail-body {
    padding: 24px 20px 28px;
  }

  .detail-title {
    font-size: 21px;
  }
}

@media (max-width: 768px) {
  .detail-cover img {
    max-height: 220px;
  }

  .block-paragraph,
  .block-list li,
  .block-quote {
    font-size: 14px;
  }

  .detail-nav {
    flex-direction: column;
    gap: 10px;
  }

  .nav-btn-next {
    text-align: left;
  }
}
</style>
