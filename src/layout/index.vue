<template>
  <div class="common-layout" style="min-width: 860px">
    <el-container>
      <el-header style="background: #474d53"><Headers /></el-header>
      <el-main>
        <div class="main">
          <div class="lbox" ref="lboxref"><router-view /></div>
          <div v-if="rightIsshow" class="rbox">
            <div
              class="whitebg card"
              style="
                height: auto;
                background-image: url('http://static-dir.wjshlnn.com/startalk/images/xingkong.gif');
                background-size: 100%;
              "
            >
              <div class="adout-author">
                <p class="website">
                  人生的价值，并不是用时间，而是用深度量去衡量的。——列夫·托尔斯泰
                </p>
              </div>
            </div>
            <div class="whitebg cloud">
              <h2 class="htitle">标签云</h2>
              <ul>
                <a style="height: auto" href="/blog/tag/30?pageSize=10"
                  >漫谈(1)</a
                ><a style="height: auto" href="/blog/tag/46?pageSize=10"
                  >设计(0)</a
                ><a style="height: auto" href="/blog/tag/50?pageSize=10"
                  >配置(2)</a
                ><a style="height: auto" href="/blog/tag/51?pageSize=10"
                  >开发(2)</a
                ><a style="height: auto" href="/blog/tag/35?pageSize=10"
                  >创意(0)</a
                ><a style="height: auto" href="/blog/tag/36?pageSize=10"
                  >娱乐(0)</a
                >
              </ul>
            </div>
            <div class="whitebg notice">
              <h2 class="htitle">最近更新</h2>
              <ul>
                <li>
                  <span class="li-icon li-icon-1">1</span>
                  <a href="/blog/article/9166">test</a>
                </li>
                <li>
                  <span class="li-icon li-icon-2">2</span>
                  <a href="/blog/article/9186"
                    >Win10环境Node Js解压版安装配置</a
                  >
                </li>
                <li>
                  <span class="li-icon li-icon-3">3</span>
                  <a href="/blog/article/9180">test</a>
                </li>
              </ul>
            </div>
            <div class="ad whitebg imgscale">
              <ul>
                <a href="" target="_blank">
                  <img
                    src="http://ruoyi.wjshlnn.com/blog/jxhx/images/jxhx2.jpg"
                  />
                  <img
                    src="http://ruoyi.wjshlnn.com/blog/jxhx/images/jxhx2.jpg"
                  />
                </a>
              </ul>
            </div>
            <div class="whitebg tongji">
              <h2 class="htitle">站点信息</h2>
              <ul>
                <li><b>建站时间</b>：2020-10-01</li>
                <li><b>更新时间</b>：2021-03-09</li>
                <li><b>网站程序</b>：ruoyi-plus</li>
                <!--<li><b>在线人数</b>：<span class="onlineNum">0</span>人</li>-->
                <li>
                  <b>主题模板</b>：<a href="#" target="_blank">《今夕何夕》</a>
                </li>
                <li>
                  <b>文章统计</b>：<a href="" target="_blank">14</a>篇文章
                </li>
                <li><b>标签总数</b>：<a href="" target="_blank">6</a>个</li>
                <li><b>加我微信</b>：扫码，加我微信</li>
                <li class="tongji_gzh">
                  <a>
                    <img
                      src="http://ruoyi.wjshlnn.com/blog/jxhx/images/wx.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Music />
      </el-main>
      <el-footer
        ><span>Footer</span><el-icon><bell-filled /></el-icon
      ></el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Headers from './headers'
import Music from './music'

const lboxref = ref(null)
let screenWidth = document.documentElement.clientWidth
// let screenHeight = document.documentElement.clientHeight
const rightIsshow = ref(true)
onMounted(() => {
  windoeSize()
  window.onresize = () => {
    windoeSize()
  }
})

const windoeSize = () => {
  screenWidth = document.documentElement.clientWidth
  // screenHeight = document.documentElement.clientHeight
  // console.log('屏幕大小变动：', screenWidth, screenHeight)
  rightIsshow.value = screenWidth >= 1200
  // 修改一个 Dom 节点上的 CSS 变量
  lboxref.value.style.setProperty(
    '--lbox-width',
    rightIsshow.value ? '74.5%' : '100%'
  )
}
</script>
<style lang="scss" scoped>
.el-container {
  min-height: 100vh;
}
.el-main {
  background-color: #eeeeee;
  .main {
    width: 85%;
    margin: 0 auto;
    .lbox {
      width: var(--lbox-width);
      --lbox-width: 74.5%;
      margin: 0;
      padding: 0;
      float: left;
      overflow: hidden;
    }
    .rbox {
      width: 24.5%;
      margin: 0;
      padding: 0;
      float: right;
      overflow: hidden;
    }
  }
}

.card {
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.1),
    inset 0px 1px 1px rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  height: 260px;
  overflow: hidden;
  margin-bottom: 20px;
}
.adout-author {
  text-align: center;
  font-size: 16px;
  padding: 10px 10px;
  background: #fff;
  opacity: 0.7;
  border-radius: 10px;
}
.adout-author .website {
  font-size: 14px;
  text-align: left;
  // margin-top: 20px;
  // border-bottom: 1px dotted #ddd;
  padding-bottom: 5px;
  color: #9805fdb0;
  line-height: 25px;
}

.htitle {
  font-size: 16px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  color: #484848;
  font-weight: normal;
  position: relative;
  margin-bottom: 10px;
}
.htitle::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 2px;
  content: '';
  background: #000;
  left: 0;
  bottom: 0;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.htitle:hover:after {
  width: 80px;
}
.cloud ul a:first-child {
  color: #ff610b;
}
.cloud ul a:nth-child(8n-7) {
  color: #00a779;
}
.cloud ul a:nth-child(8n-6) {
  color: #01b01e;
}
.cloud ul a:nth-child(8n-5) {
  color: #00a4ae;
}
.cloud ul a:nth-child(8n-4) {
  color: #9a2bc3;
}
.cloud ul a:nth-child(8n-3) {
  color: #fc2d50;
}
.cloud ul a:last-child {
  color: #9a2bc3;
}
.cloud ul a:nth-child(8n-2) {
  color: #0caffb;
}
.cloud ul a {
  line-height: 24px;
  height: 24px;
  display: block;
  // background: #999;
  float: left;
  padding: 3px 10px;
  margin: 10px 5px 0 0;
  border-radius: 3px;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  color: #fff;
}

.notice li {
  font-size: 12px;
  line-height: 30px;
  margin-bottom: 12px;
  display: block;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background: #f6f6f6;
  padding: 4px 12px 4px 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  -moz-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.notice li::before {
  position: absolute;
  content: '';
  width: 3px;
  height: 3px;
  background: #000;
  border-radius: 10px;
  left: 15px;
  top: 20px;
}
.notice li:hover {
  background: #f2f2f2;
  box-shadow: 0 0 10px #ccc;
  -moz-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.ad ul {
  overflow: hidden;
  border-radius: 3px;
}
.ad img {
  width: 100%;
}

.tongji li {
  margin-bottom: 8px;
}
.tongji li a:hover {
  text-decoration: underline;
  color: #000;
}
.tongji li a {
  color: #096;
}
.tongji_gzh {
  width: 80%;
  margin: auto;
  margin-bottom: auto;
  overflow: hidden;
}
.tongji_gzh img {
  width: 100%;
}

.whitebg {
  // background: #fff !important;
  background: #fff;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
  overflow: hidden;
}
a {
  text-decoration: none;
  color: #333;
}
ul {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}

.el-footer {
  background-color: #434343;
  color: #979797;
}
</style>
