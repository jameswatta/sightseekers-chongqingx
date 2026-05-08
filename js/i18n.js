/**
 * Simple i18n module for EN/ZH/SW
 * No external dependencies - works on Cloudflare Pages free tier
 */

const translations = {
  en: {
    "nav.home": "Home",
    "nav.packages": "Safari Packages",
    "nav.about": "About Us",
    "nav.ujamaa": "Our Community",
    "nav.contact": "Contact",
    "hero.title": "Explore Kenya's Wild Heart",
    "hero.subtitle": "Authentic safaris that empower local communities",
    "hero.browse": "Browse Packages",
    "hero.video": "Watch Video",
    "trust.rating": "4.9/5 Rating",
    "trust.countries": "50+ Countries Served",
    "trust.experience": "15+ Years Experience",
    "trust.ujamaa": "Ujamaa Certified",
    "china.title": "Designed for Chinese Travelers",
    "china.support.title": "Chinese-speaking Support",
    "china.support.desc": "Dedicated Mandarin consultants, Chongqing timezone coverage",
    "china.payment.title": "WeChat Pay / Alipay",
    "china.payment.desc": "Popular Chinese payment methods, secure & convenient",
    "china.dining.title": "Chinese Meal Options",
    "china.dining.desc": "Congee, noodles, and familiar flavors available on safari",
    "china.photo.title": "Photography Expert Guides",
    "china.photo.desc": "Guides trained in wildlife photography, charging facilities onboard",
    "china.groups.title": "Small Group Customization",
    "china.groups.desc": "Family groups of 6-12, special care for elders & children",
    "china.visa.title": "Visa Assistance",
    "china.visa.desc": "Kenya eVisa guidance, 3-5 business day processing",
    "packages.title": "Featured Safari Packages",
    "packages.viewAll": "View All →",
    "packages.badge.featured": "⭐ Featured",
    "packages.badge.wildlife": "Wildlife",
    "packages.badge.photography": "Photography",
    "packages.badge.cultural": "Cultural",
    "packages.duration": "{days} days",
    "packages.maxGuests": "Max {count}",
    "packages.rateNote": "Rates updated hourly",
    "packages.learnMore": "Learn More",
    "packages.bookNow": "Book Now",
    "packages.masai.title": "Masai Mara Migration",
    "packages.amboseli.title": "Amboseli Elephant Safari",
    "packages.samburu.title": "Samburu Cultural Experience",
    "ujamaa.title": "Ujamaa: Together We Thrive",
    "ujamaa.subtitle": "Every safari supports local communities",
    "ujamaa.certified": "Ujamaa Certified",
    "ujamaa.learnMore": "Learn About Ujamaa →",
    "ujamaa.impact.contributions": "Total Community Contributions",
    "ujamaa.impact.education": "Children in School",
    "ujamaa.impact.conservation": "Land Protected (acres)",
    "ujamaa.impact.employment": "Local People Employed",
    "ujamaa.testimonial": '"Your safari funded two weeks of school for Juma\'s daughter"',
    "wechat.scan": "Scan to Chat",
    "wechat.modal.title": "Add on WeChat",
    "wechat.modal.instructions": "1. Open WeChat\n2. Tap \"Discover\" → \"Scan\"\n3. Scan the QR code above",
    "wechat.id.label": "WeChat ID:",
    "wechat.copy": "Copy",
    "footer.tagline": "Kenya-based safari operator · Chongqing market specialist",
    "footer.links.title": "Quick Links",
    "footer.contact.title": "Chongqing Support",
    "footer.contact.hours": "Hours: 9:00-22:00 CST",
    "footer.contact.wechat": "WeChat: SightSeekersCN",
    "footer.contact.location": "Kenya Office: Nairobi, Kenya",
    "footer.copyright": "Ujamaa Certified Operator",
    "footer.privacy": "Privacy Policy",
    "payment.wechat": "WeChat Pay",
    "payment.alipay": "Alipay",
    "payment.unionpay": "UnionPay",
    "payment.card": "International Card"
  },
  zh: {
    "nav.home": "首页",
    "nav.packages": "游猎套餐",
    "nav.about": "关于我们",
    "nav.ujamaa": "社区共建",
    "nav.contact": "联系我们",
    "hero.title": "探索肯尼亚野性之心",
    "hero.subtitle": "正宗游猎体验，赋能当地社区",
    "hero.browse": "浏览套餐",
    "hero.video": "观看视频",
    "trust.rating": "4.9/5 评分",
    "trust.countries": "服务50+国家",
    "trust.experience": "15年专业经验",
    "trust.ujamaa": "乌贾马认证",
    "china.title": "专为重庆游客打造",
    "china.support.title": "中文客服支持",
    "china.support.desc": "全程中文顾问，重庆本地时区在线响应",
    "china.payment.title": "微信支付/支付宝",
    "china.payment.desc": "支持主流中国支付方式，安全便捷",
    "china.dining.title": "中式餐饮可选",
    "china.dining.desc": "游猎途中提供粥、面条等中式餐食选项",
    "china.photo.title": "摄影专家向导",
    "china.photo.desc": "向导接受野生动物摄影培训，配备充电设备",
    "china.groups.title": "家庭小团定制",
    "china.groups.desc": "支持6-12人家庭团，长辈儿童专属关怀",
    "china.visa.title": "签证协助服务",
    "china.visa.desc": "肯尼亚电子签证全程指导，3-5工作日出签",
    "packages.title": "精选游猎套餐",
    "packages.viewAll": "查看全部 →",
    "packages.badge.featured": "⭐ 精选",
    "packages.badge.wildlife": "野生动物",
    "packages.badge.photography": "摄影之旅",
    "packages.badge.cultural": "文化体验",
    "packages.duration": "{days}天",
    "packages.maxGuests": "最多{count}人",
    "packages.rateNote": "汇率每小时更新",
    "packages.learnMore": "了解详情",
    "packages.bookNow": "立即预订",
    "packages.masai.title": "马赛马拉动物大迁徙",
    "packages.amboseli.title": "安博塞利大象之旅",
    "packages.samburu.title": "桑布鲁文化体验",
    "ujamaa.title": "乌贾马：共同繁荣",
    "ujamaa.subtitle": "每一次游猎都在支持当地社区发展",
    "ujamaa.certified": "乌贾马认证",
    "ujamaa.learnMore": "了解乌贾马模式 →",
    "ujamaa.impact.contributions": "社区贡献总额",
    "ujamaa.impact.education": "资助儿童入学",
    "ujamaa.impact.conservation": "保护土地(英亩)",
    "ujamaa.impact.employment": "本地就业人员",
    "ujamaa.testimonial": '"您的游猎资助了Juma女儿两周的学费"',
    "wechat.scan": "扫码咨询",
    "wechat.modal.title": "添加微信客服",
    "wechat.modal.instructions": "1. 打开微信\n2. 点击 \"发现\" → \"扫一扫\"\n3. 扫描上方二维码",
    "wechat.id.label": "微信号:",
    "wechat.copy": "复制",
    "footer.tagline": "肯尼亚本地游猎运营商 · 重庆市场专属服务",
    "footer.links.title": "快速链接",
    "footer.contact.title": "重庆专属客服",
    "footer.contact.hours": "服务时间: 9:00-22:00 CST",
    "footer.contact.wechat": "微信: SightSeekersCN",
    "footer.contact.location": "肯尼亚办公室: Nairobi, Kenya",
    "footer.copyright": "乌贾马认证运营商",
    "footer.privacy": "隐私政策",
    "payment.wechat": "微信支付",
    "payment.alipay": "支付宝",
    "payment.unionpay": "银联支付",
    "payment.card": "国际信用卡"
  },
  sw: {
    "nav.home": "Nyumbani",
    "nav.packages": "Vifurushi vya Safari",
    "nav.about": "Kuhusu Sisi",
    "nav.ujamaa": "Ujamaa Wetu",
    "nav.contact": "Wasiliana Nasi",
    "hero.title": "Gundua Moyo wa Porini wa Kenya",
    "hero.subtitle": "Safari za kweli zinazoiwezesha jamii za ndani",
    "hero.browse": "Angalia Vifurushi",
    "hero.video": "Tazama Video",
    "trust.rating": "Ukadiriaji 4.9/5",
    "trust.countries": "Nchi 50+ Zilizohudumiwa",
    "trust.experience": "Uzoefu wa Miaka 15+",
    "trust.ujamaa": "Imethibitishwa na Ujamaa",
    "packages.title": "Vifurushi Vilivyochaguliwa",
    "packages.viewAll": "Angalia Zote →",
    "packages.badge.featured": "⭐ Zilizochaguliwa",
    "packages.badge.wildlife": "Wanyama",
    "packages.badge.photography": "Upigaji Picha",
    "packages.badge.cultural": "Utamaduni",
    "packages.duration": "Siku {days}",
    "packages.maxGuests": "Wageni {count}",
    "packages.learnMore": "Jifunze Zaidi",
    "packages.bookNow": "Weka Nafasi",
    "packages.masai.title": "Uhamiaji wa Masai Mara",
    "packages.amboseli.title": "Safari ya Tembo wa Amboseli",
    "packages.samburu.title": "Uzoefu wa Utamaduni wa Samburu",
    "ujamaa.title": "Ujamaa: Pamoja Tunastawi",
    "ujamaa.subtitle": "Kila safari inasaidia jamii za ndani",
    "ujamaa.certified": "Imethibitishwa na Ujamaa",
    "ujamaa.learnMore": "Jifunze Kuhusu Ujamaa →",
    "wechat.scan": "Scan kuwasiliana"
  }
};

class I18n {
  constructor(defaultLang = 'zh') {
    this.lang = this.getStoredLang() || defaultLang;
    this.init();
  }
  
  getStoredLang() {
    const url = new URL(window.location.href);
    const param = url.searchParams.get('lang');
    if (param && translations[param]) return param;
    return localStorage.getItem('sss_lang');
  }
  
  init() {
    this.translatePage();
    this.setupLanguageSwitcher();
    this.setupBookingButtons();
  }
  
  translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      let text = translations[this.lang]?.[key] || translations.en[key] || key;
      
      // Handle placeholders like {days}, {count}
      if (el.dataset.days) text = text.replace('{days}', el.dataset.days);
      if (el.dataset.count) text = text.replace('{count}', el.dataset.count);
      
      el.textContent = text;
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = this.lang === 'zh' ? 'zh-CN' : this.lang;
    
    // Update active state in language switcher
    document.querySelectorAll('.lang-dropdown a').forEach(a => {
      a.classList.toggle('active', a.dataset.lang === this.lang);
    });
  }
  
  setupLanguageSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    const btn = switcher?.querySelector('.lang-btn');
    const dropdown = switcher?.querySelector('.lang-dropdown');
    
    if (!btn || !dropdown) return;
    
    // Toggle dropdown
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
    });
    
    // Language selection
    dropdown.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const newLang = link.dataset.lang;
        this.setLanguage(newLang);
      });
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!switcher.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  setLanguage(lang) {
    if (!translations[lang]) return;
    this.lang = lang;
    localStorage.setItem('sss_lang', lang);
    
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    history.replaceState({}, '', url);
    
    this.translatePage();
    
    // Track language change (Baidu Analytics)
    if (typeof _hmt !== 'undefined') {
      _hmt.push(['_trackEvent', 'language', 'switch', lang]);
    }
  }
  
  setupBookingButtons() {
    document.querySelectorAll('[data-book]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pkg = btn.dataset.book;
        // For free tier: redirect to contact page with package pre-selected
        window.location.href = `/contact.html?package=${pkg}&lang=${this.lang}`;
      });
    });
  }
  
  t(key, params = {}) {
    let text = translations[this.lang]?.[key] || translations.en[key] || key;
    Object.entries(params).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, v);
    });
    return text;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
});