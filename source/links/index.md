---
title: 资源导航
layout: page
toc: true
---

<style>
/* ===== Glass + Elegant Accent (scoped to this page) ===== */

.links-page {
  --accent: #1a0695;
  --accent-soft: rgba(26, 6, 149, 0.32);
  --text-main: #111827;
  --text-sub: #475569;
}

.links-page .link-wrapper {
  margin: 3.4em 0;
}

.links-page .link-title {
  font-size: 1.06em;
  font-weight: 650;
  letter-spacing: 0.12em;
  margin-bottom: 1.5em;
  color: var(--text-main);
  position: relative;
}

.links-page .link-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 46px;
  height: 2px;
  border-radius: 999px;
  background: var(--accent);
  opacity: 1;
}

.links-page .link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 1.15em;
  align-items: stretch;
}

/* ===== Glass card ===== */
.links-page .link-card {
  position: relative;
  border-radius: 18px;
  padding: 1.05em 1.15em 3.0em 1.15em;
  overflow: hidden;

  /* glass */
  background: rgba(242, 211, 136, 0.72);
  border: 1px solid rgba(26, 6, 149, 0.20);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);

  /* subtle depth */
  box-shadow: 0 10px 26px rgba(15, 20, 30, 0.08);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 170px;
}

/* accent edge */
.links-page .link-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 18px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0);
  transition: box-shadow 0.22s ease;
  pointer-events: none;
}

.links-page .link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 40px rgba(26, 6, 149, 0.12);
  border-color: #1a0695;
}

.links-page .link-card:hover::after {
  box-shadow: inset 0 0 0 1px rgba(26, 6, 149, 0.35);
}

.links-page .link-name {
  font-size: 1.8em;
  font-weight: 650;
  text-decoration: none;
  display: block;
  margin-bottom: 0.1em;
  color: var(--text-main);
  transition: color 0.18s ease;
  min-height: 2em;
  line-height: 1.3;
}

.links-page .link-name:hover {
  color: #1a0695;
}

.links-page .copy-btn {
  position: absolute;
  right: 14px;
  bottom: 14px;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid rgba(26, 6, 149, 0.18);
  background: rgba(255,255,255,0.85);
  color: #1a0695;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 0;
  transition: all 0.18s ease;
}

.links-page .copy-btn:hover {
  background: #1a0695;
  color: #fff;
  border-color: #1a0695;
  box-shadow: 0 0 0 6px rgba(26, 6, 149, 0.12);
}

.links-page .copy-btn.copied {
  background: rgba(26, 6, 149, 0.08);
  color: #1a0695;
  border-color: rgba(26, 6, 149, 0.25);
}

.links-page .link-desc {
  font-size: 1em;
  color: #374151;
  margin-top: 0.6em;
  line-height: 1.55;
  padding-right: 46px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ===== Animated blue fill hover for category titles ===== */

.custom-title {
  position: relative;
  display: inline-block;
  color: #1a0695;
  font-weight: 650;
  letter-spacing: 0.02em;
  padding: 0.08em 0.45em;
  border-radius: 4px;
  overflow: hidden;
  z-index: 0;
  transition: color 0.18s ease;
}

h2 .custom-title {
  font-size: 1.5em;
}

h3 .custom-title {
  font-size: 1.35em;
}

.custom-title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0%;
  background: #1a0695;
  z-index: -1;
  transition: width 0.28s ease;
}

.custom-title:hover {
  color: #ffffff;
}

.custom-title:hover::before {
  width: 100%;
}
/* ===== Center category headings only ===== */
h2:has(.custom-title),
h3:has(.custom-title) {
  text-align: center;
}
/* ===== Fancy Main Title ===== */
.fancy-main-title {
  display: block;
  width: fit-content;
  margin: 2em auto 2em auto;
  font-size: 3em;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #1a0695;
}

.fancy-main-title .title-text {
  display: inline-block;
  padding: 0.05em 0.35em;
  background: rgba(242, 211, 136, 0.72);
  border-radius: 4px;
}

.fancy-main-title .ornament {
  font-size: 0.9em;
  margin: 0 0.6em;
  opacity: 0.85;
}
</style>

<script>
function copyLink(btn, url) {
  navigator.clipboard.writeText(url);
  btn.classList.add('copied');
  btn.innerText = '✓';
  setTimeout(() => {
    btn.classList.remove('copied');
    btn.innerText = '⧉';
  }, 1000);
}
</script>

<div class="fancy-main-title">
  <span class="ornament">✦</span>
  <span class="title-text">二次元瑟瑟资源索引</span>
  <span class="ornament">✦</span>
</div>

## <p class="custom-title">漫画，小说等平面二维资源</p>

### <p class="custom-title">漫画，小说</p>

<div class="links-page">
<div class="link-wrapper">
<div class="link-grid">

<div class="link-card">
<a class="link-name" href="https://ww13.manga-zip.info/home/" target="_blank">MangaZip</a>
<div class="link-desc">商业漫画资源</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://ww13.manga-zip.info/home/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://www.a-zmanga.net/" target="_blank">a-zmanga</a>
<div class="link-desc">商业漫画资源为主，分类较实用</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://www.a-zmanga.net/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://dlraw.to/" target="_blank">dlraw</a>
<div class="link-desc">商业漫画，轻小说资源为主，分类很细</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://dlraw.to/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://annas-archive.li/" target="_blank">Anna’s Archive</a>
<div class="link-desc">能找到绝大多数二次元和非二次元的书籍（或许）</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://annas-archive.li/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://z-lib.ai/" target="_blank">zlibrary</a>
<div class="link-desc">同上</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://z-lib.ai/')">⧉</button>
</div>

</div>
</div>
</div>

### <p class="custom-title">本子，图站</p>

<div class="links-page">
<div class="link-wrapper">
<div class="link-grid">

<div class="link-card">
<a class="link-name" href="https://hitomi.la/" target="_blank">hitomi</a>
<div class="link-desc">同人誌资源，搜索功能好，可一键打包下载，分辨率一般</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://hitomi.la/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://nhentai.net/" target="_blank">nhentai</a>
<div class="link-desc">同人誌资源，资源较全，分辨率普遍高</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://nhentai.net/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://rule34.xxx/" target="_blank">rule34</a>
<div class="link-desc">二次元图站，特征是超多tag</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://rule34.xxx/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://danbooru.donmai.us/" target="_blank">Danbooru</a>
<div class="link-desc">二次元图站，特征是超多tag，高清抱枕图等</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://danbooru.donmai.us/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://cosplaytele.com/" target="_blank">CosplayTele</a>
<div class="link-desc">Cosplay高清图站</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://cosplaytele.com/')">⧉</button>
</div>

</div>
</div>
</div>

## <p class="custom-title">里番，3D视频</p>

<div class="links-page">
<div class="link-wrapper">
<div class="link-grid">

<div class="link-card">
<a class="link-name" href="https://hentaigasm.com/" target="_blank">hentaigasm</a>
<div class="link-desc">里番资源齐全，更新快</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://hentaigasm.com/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://animeidhentai.com/portal/" target="_blank">animeidhentai</a>
<div class="link-desc">里番资源齐全，更新快</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://animeidhentai.com/portal/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://rule34video.com/" target="_blank">rule34video</a>
<div class="link-desc">3d同人视频为主，能找到大量mmd赞助内容</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://rule34video.com/')">⧉</button>
</div>

</div>
</div>
</div>

## <p class="custom-title">综合资源索引</p>

<div class="links-page">
<div class="link-wrapper">
<div class="link-grid">

<div class="link-card">
<a class="link-name" href="https://www.anime-sharing.com/" target="_blank">anime-sharing</a>
<div class="link-desc">包罗万象，有国外网盘会员下载会更快</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://www.anime-sharing.com/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://hentaiomg.com/" target="_blank">HentaiOmg</a>
<div class="link-desc">包罗万象</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://hentaiomg.com/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://sukebei.nyaa.si/" target="_blank">nyaa（里）</a>
<div class="link-desc">磁力综合资源站</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://sukebei.nyaa.si/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://hentai-sharing.net/" target="_blank">hentai-sharing</a>
<div class="link-desc">同人游戏，CG，Voice Drama为主</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://hentai-sharing.net/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://99hs.org/" target="_blank">99hs</a>
<div class="link-desc">同人游戏，CG，Voice Drama为主</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://99hs.org/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://hentai-share.com/" target="_blank">hentai-share</a>
<div class="link-desc">同人游戏，CG，Voice Drama为主</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://hentai-share.com/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://kimochi.info/" target="_blank">kimochi</a>
<div class="link-desc">同人游戏为主</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://kimochi.info/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://www.hacg.site/" target="_blank">琉璃神社</a>
<div class="link-desc">磁力综合资源站，有中文review</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://www.hacg.site/')">⧉</button>
</div>

</div>
</div>
</div>

### <p class="custom-title">Voice Drama特化型网站</p>

<div class="links-page">
<div class="link-wrapper">
<div class="link-grid">

<div class="link-card">
<a class="link-name" href="https://japaneseasmr.com/" target="_blank">Japanese Asmr</a>
<div class="link-desc">日本Voice Drama，商业音声都有</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://japaneseasmr.com/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://www.asmr.one/works" target="_blank">asmr-one</a>
<div class="link-desc">日本Voice Drama为主，播放功能强大，可自创playlist</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://www.asmr.one/works')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://www.asmrgay.com/" target="_blank">ASMR基佬中心</a>
<div class="link-desc">中文Voice Drama为主</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://www.asmrgay.com/')">⧉</button>
</div>

</div>
</div>
</div>

## <p class="custom-title">游戏资源</p>

### <p class="custom-title">一般向单机游戏</p>

<div class="links-page">
<div class="link-wrapper">
<div class="link-grid">

<div class="link-card">
<a class="link-name" href="https://steamrip.com/" target="_blank">STEAMRIP</a>
<div class="link-desc">能找到大多数Steam游戏</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://steamrip.com/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://steamunlocked.org/" target="_blank">Steamunlocked</a>
<div class="link-desc">同上</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://steamunlocked.org/')">⧉</button>
</div>

</div>
</div>
</div>

### <p class="custom-title">模拟器游戏资源</p>

<div class="links-page">
<div class="link-wrapper">
<div class="link-grid">

<div class="link-card">
<a class="link-name" href="https://www.ziperto.com/" target="_blank">ziperto</a>
<div class="link-desc">3ds，switch1，PSvita游戏资源（ROM）</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://www.ziperto.com/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://nswgame.com/" target="_blank">nswgame</a>
<div class="link-desc">主流主机游戏资源（ROM）</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://nswgame.com/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://wowroms.com/en/" target="_blank">wowroms</a>
<div class="link-desc">怀旧主机游戏资源（ROM）</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://wowroms.com/en/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://citra-emulator.com/3ds-roms" target="_blank">Citra</a>
<div class="link-desc">3ds模拟器本体及游戏资源</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://citra-emulator.com/3ds-roms')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://eden-emu.dev/" target="_blank">eden-emu</a>
<div class="link-desc">switch开源模拟器官网</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://eden-emu.dev/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://ryujinx.app/" target="_blank">ryujinx</a>
<div class="link-desc">switch开源模拟器官网</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://ryujinx.app/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://yuzu-emulator.com/download/" target="_blank">yuzu</a>
<div class="link-desc">switch开源模拟器官网</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://yuzu-emulator.com/download/')">⧉</button>
</div>

</div>
</div>
</div>

## <p class="custom-title">其他资源</p>

### <p class="custom-title">看番网站</p>

<div class="links-page">
<div class="link-wrapper">
<div class="link-grid">

<div class="link-card">
<a class="link-name" href="https://9animetv.to/" target="_blank">9anime</a>
<div class="link-desc">更新快，老番全，一步到位</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://9animetv.to/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://zoroto.com.in/" target="_blank">zoro</a>
<div class="link-desc">加载速度快</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://zoroto.com.in/')">⧉</button>
</div>

<div class="link-card">
<a class="link-name" href="https://kissanime.com.ru/kissanime.html" target="_blank">kissanime</a>
<div class="link-desc">老网站，不能用ad block，广告多</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://kissanime.com.ru/kissanime.html')">⧉</button>
</div>

</div>
</div>
</div>

### <p class="custom-title">瑟瑟小说</p>

<div class="links-page">
<div class="link-wrapper">
<div class="link-grid">

<div class="link-card">
<a class="link-name" href="https://wt.tepis.me/#" target="_blank">可穿戴科技</a>
<div class="link-desc">有趣的网站</div>
<button class="copy-btn" title="复制网址" onclick="copyLink(this,'https://wt.tepis.me/#')">⧉</button>
</div>

</div>
</div>
</div>