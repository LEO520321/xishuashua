/* ============================================================================
   近期资讯 — 数据源
   ----------------------------------------------------------------------------
   新增一条资讯时，只需在下面 newsList 数组的【最前面】插入一个对象即可，
   数组顺序 = 页面左侧清单的显示顺序（最新的放最前面）。

   字段说明：
     id       必填  唯一标识（英文/拼音短横线即可，用于 URL ?id=xxx）
     title    必填  资讯标题
     date     必填  发布日期，格式 'YYYY-MM-DD'（清单与详情都会展示）
     category 必填  分类，取值：'公司动态' | '新品发布' | '产品科普'
     cover    选填  封面图（require 引入本地图片），不填则显示纯色标题块
     summary  选填  一句话摘要，显示在左侧清单里
     content  必填  正文内容块数组，支持以下 5 种类型：

       { type: 'heading',   text: '小标题' }
       { type: 'paragraph', text: '正文段落' }
       { type: 'list',      items: ['要点一', '要点二'] }
       { type: 'quote',     text: '引用/金句' }
       { type: 'image',     src: require('@/assets/...'), caption: '图片说明（选填）' }

   注意：图片统一放在 src/assets/images/xishuashua/ 下，用 require 引入。
   ========================================================================== */

export const newsCategories = ['公司动态', '新品发布', '产品科普']

export const newsList = [
  /* ---------------------------------------------------------------------- */
  {
    id: 'new-laundry-cabinet-2026',
    title: '新品发布｜「岩板一体化洗衣柜」系列正式上市',
    date: '2026-09-10',
    category: '新品发布',
    cover: require('@/assets/images/xishuashua/products/laundry/01.jpg'),
    summary: '台面与柜体一体成型，防水防潮再升级，阳台洗衣区从此告别潮湿与开裂。',
    content: [
      {
        type: 'paragraph',
        text: '经过近半年的打样与实测，洗刷刷全铝家具「岩板一体化洗衣柜」系列正式面市。这一系列针对昆明本地阳台高湿、强日照的环境特点做了专门优化，把岩板台面与全铝柜体做成一体成型结构，从源头解决传统洗衣柜接缝渗水、长期使用后开裂变形的问题。'
      },
      { type: 'heading', text: '这一代做了什么升级' },
      {
        type: 'list',
        items: [
          '台面与柜体一体成型，取消传统拼接缝，水渍不再往柜体内部渗',
          '柜体采用 6063-T5 铝合金，表面静电粉末喷涂，长期暴晒不褪色',
          '台面可选岩板 / 石英石 / 铝板三种材质，按预算自由搭配',
          '内嵌式洗烘一体机位，尺寸按机器实测预留，不浪费一厘米空间'
        ]
      },
      {
        type: 'image',
        src: require('@/assets/images/xishuashua/products/laundry/03.jpg'),
        caption: '一体化台面与柜体，接缝处做了隐藏式处理'
      },
      { type: 'heading', text: '适合什么样的家庭' },
      {
        type: 'paragraph',
        text: '如果你家阳台是开放式、或者南向长时间直晒，又或者洗衣机旁边还想要一块能放盆、能晾晒的台面，这个系列会比常规木质柜体更耐用。柜体防水，拖地时水直接冲过去也不用担心。'
      },
      {
        type: 'quote',
        text: '全铝柜体不是「更贵的木头」，而是一种在潮湿环境里根本不需要担心受潮的材料。'
      },
      {
        type: 'paragraph',
        text: '目前该系列已开放定制，支持尺寸、颜色、功能分区自由搭配，可到工厂现场看样。欢迎通过页面底部联系方式预约到店或上门测量。'
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    id: 'why-aluminum-for-balcony',
    title: '全铝科普｜为什么阳台柜更推荐用全铝而不是木质？',
    date: '2026-09-05',
    category: '产品科普',
    cover: require('@/assets/images/xishuashua/products/furniture/02.jpg'),
    summary: '从受潮、变形、甲醛到使用寿命，一次把全铝与木质柜体的差别讲清楚。',
    content: [
      {
        type: 'paragraph',
        text: '很多客户第一次来店里都会问同一个问题：全铝家具比木质贵一些，到底值不值？这篇就专门讲讲阳台、卫生间这类潮湿空间里，两种材料的真实差别。'
      },
      { type: 'heading', text: '一、防潮能力：本质差别在材料本身' },
      {
        type: 'paragraph',
        text: '木质柜体（哪怕是多层实木板、颗粒板）本质上都是吸水材料。封边一旦在边角处出现细微破损，水汽就会顺着进入板材内部，时间一长就会膨胀、发霉、起鼓。全铝柜体的基材是铝合金，本身不吸水，这是材料层面的差异，不是靠工艺能弥补的。'
      },
      { type: 'heading', text: '二、环保性：甲醛问题的根源' },
      {
        type: 'paragraph',
        text: '木质板材在制造过程中要使用胶黏剂，而甲醛主要就来自这些胶。全铝柜体通过型材拼装、五金连接，不需要大量用胶，从源头上就避开了这个问题。对家里有老人、小孩、孕妇的家庭，这一点尤其值得考虑。'
      },
      { type: 'heading', text: '三、耐用年限与维护成本' },
      {
        type: 'list',
        items: [
          '木质柜体：阳台环境下一般 5～8 年开始出现不同程度的问题，需要翻新',
          '全铝柜体：不腐不蛀、不怕水泡，正常使用可达数十年',
          '日常维护：全铝表面一擦即净，不需要特别保养'
        ]
      },
      {
        type: 'image',
        src: require('@/assets/images/xishuashua/products/furniture/05.jpg'),
        caption: '全铝柜体内部结构，型材拼装、无胶黏'
      },
      { type: 'heading', text: '四、什么情况下木质也够用' },
      {
        type: 'paragraph',
        text: '说全铝好，不等于木质不能用。如果柜体放在干燥的室内空间、预算确实有限，优质木质柜体也能满足需求。我们建议的判断标准很简单：这个位置会不会长期接触水汽或阳光直晒。会，就优先考虑全铝。'
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    id: 'team-building-2026-autumn',
    title: '公司动态｜洗刷刷全铝家具 2026 秋季团建圆满结束',
    date: '2026-08-28',
    category: '公司动态',
    cover: require('@/assets/images/xishuashua/about/about-collage.png'),
    summary: '两天一夜，从车间到山野——把平时在图纸和生产线上的默契，换一种方式重新认识。',
    content: [
      {
        type: 'paragraph',
        text: '8 月下旬，洗刷刷全铝家具全体同事一起完成了为期两天一夜的秋季团建。这次没有安排在会议室，而是把大家从车间和门店带到了山野里。'
      },
      { type: 'heading', text: '第一天：把话说开' },
      {
        type: 'paragraph',
        text: '上午是团队复盘。设计、生产、安装、售后四个环节的同事坐到一起，把今年上半年客户反馈里最集中的几个问题逐条过了一遍——包括定制柜体尺寸复核流程、安装进场时间协调、售后响应时效。这些平时在各自岗位上看不到全貌的问题，放在一起聊就清楚多了。'
      },
      { type: 'heading', text: '第二天：把劲使到一处' },
      {
        type: 'paragraph',
        text: '第二天的户外拓展做了协作类项目。分组、搭结构、限时完成，几乎就是平时接一个定制单的缩影：前期沟通、方案确认、现场执行，任何一个环节掉链子都会影响整体结果。'
      },
      {
        type: 'image',
        src: require('@/assets/images/xishuashua/about/promo.png'),
        caption: '团建合影'
      },
      {
        type: 'quote',
        text: '一块板子切错了可以重来，一个客户的时间耽误了就回不去了。'
      },
      {
        type: 'paragraph',
        text: '团建结束，大家的共识很朴素：把流程再理顺一点，把响应再快一点。感谢每一位同事的投入，也感谢客户一直以来对我们的耐心和信任。'
      }
    ]
  }
]

/* 按日期倒序排列，保证最新的资讯排在最前面（无需手动调整顺序） */
export const sortedNews = [...newsList].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

/* 根据 id 查找某条资讯 */
export function findNewsById(id) {
  return sortedNews.find((item) => item.id === id) || null
}
