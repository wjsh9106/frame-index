<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>

  <div class="headline" style="margin-bottom: 10px">
    <ul style="height: auto">
      <li>
        <a title="IntelliJ IDEA安装及配置" href="/blog/article/9183">
          <img
            src="http://ruoyi.wjshlnn.com/profile/material/2021/09/19/f6a4b4f0-dd93-4f5c-a52c-75717468fbb5.png"
          />
          <span>IntelliJ IDEA安装及配置</span>
        </a>
      </li>
      <li>
        <a title="Linux rm删除文件过多不执行" href="/blog/article/9184">
          <img
            src="http://ruoyi.wjshlnn.com/profile/material/2021/09/20/eea9e7cb-10e5-478a-8268-c986c50f78fa.png"
          />
          <span>Linux rm删除文件过多不执行</span>
        </a>
      </li>
      <li>
        <a title="小程序引入Vant Weapp" href="/blog/article/9188">
          <img
            src="http://ruoyi.wjshlnn.com/profile/material/2021/09/22/94cd6d0d-110c-4da1-871d-07333a0ffdf9.jpg"
          />
          <span>小程序引入Vant Weapp</span>
        </a>
      </li>
    </ul>
  </div>

  <div class="ad whitebg">
    <el-carousel height="126px">
      <el-carousel-item v-for="item in 4" :key="item">
        <a @click="showArticle(item)">
          <img src="http://ruoyi.wjshlnn.com/blog/jxhx/images/longad.jpg" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="zhuanti whitebg">
    <h2 class="htitle">特别推荐</h2>
    <ul>
      <li>
        <i class="ztpic">
          <a title="来，吃个橘子吧" href="/blog/article/9168" target="_blank">
            <img
              src="http://ruoyi.wjshlnn.com/profile/upload/article/2019/11/18/fc7d2fca0a12a1092485b2c3f0c995b0.jpg"
            />
          </a>
        </i>
        <b>来，吃个橘子吧</b>
        <span>123</span>
        <a href="/blog/article/9168" target="_blank" class="readmore">
          文章阅读</a
        >
      </li>
      <li>
        <i class="ztpic">
          <a
            title="新婚快乐，我的青春。"
            href="/blog/article/9170"
            target="_blank"
          >
            <img
              src="http://ruoyi.wjshlnn.com/profile/upload/article/2019/11/19/01dd446f5e232f4a3846efd833d9e599.jpg"
            />
          </a>
        </i>
        <b>新婚快乐，我的青春。</b>
        <span>123</span>
        <a href="/blog/article/9170" target="_blank" class="readmore">
          文章阅读</a
        >
      </li>
      <li>
        <i class="ztpic">
          <a
            title="小程序实现轮播图示例"
            href="/blog/article/9189"
            target="_blank"
          >
            <img
              src="http://ruoyi.wjshlnn.com/profile/material/2021/09/23/7796f436-fac1-4de4-ab58-3113bc9cd97f.jpg"
            />
          </a>
        </i>
        <b>小程序实现轮播图示例</b>
        <span>小程序实现轮播图示例</span>
        <a href="/blog/article/9189" target="_blank" class="readmore">
          文章阅读</a
        >
      </li>
      <li>
        <i class="ztpic">
          <a
            title="一场球，一杯酒，一种陪伴"
            href="/blog/article/9169"
            target="_blank"
          >
            <img
              src="http://ruoyi.wjshlnn.com/profile/upload/article/2019/11/19/99d7e90e2beb8bd825a04922aadc911b.jpg"
            />
          </a>
        </i>
        <b>一场球，一杯酒，一种陪伴</b>
        <span>123</span>
        <a href="/blog/article/9169" target="_blank" class="readmore">
          文章阅读</a
        >
      </li>
      <li>
        <i class="ztpic">
          <a
            title="2018，创业黄金时代结束的一年"
            href="/blog/article/9164"
            target="_blank"
          >
            <img
              src="http://ruoyi.wjshlnn.com/profile/upload/article/2019/11/18/5f8b080065e77ed1993492561409e3de.jpg"
            />
          </a>
        </i>
        <b>2018，创业黄金时代结束的一年</b>
        <span>222222222222222222</span>
        <a href="/blog/article/9164" target="_blank" class="readmore">
          文章阅读</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const showArticle = (id) => {
  router.push({
    name: 'article',
    query: { articleId: id }
  })
}
</script>
<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  color: #000;
  text-decoration: none;
}
img {
  border: 0;
  display: block;
}

.whitebg {
  background: #fff !important;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
  overflow: hidden;
}

.headline {
  width: 100%;
  float: right;
  overflow: hidden;
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
.headline ul {
  // margin: 0;
  padding: 0;
}
.headline ul li {
  float: left;
  width: 32.9%;
  margin-left: 3px;
  background: #000;
  overflow: hidden;
  height: 125px;
  margin-bottom: 10px;
  border-radius: 3px;
  position: relative;
}
.headline ul li img {
  width: 100%;
  height: 100%;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  transition: all 0.5s;
  opacity: 0.7;
}
.headline ul li:hover img {
  transform: scale(1.1);
  opacity: 1;
}
.headline ul li span {
  bottom: 0;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-size: 15px;
  margin-top: 5px;
  padding: 0 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-height: 24px;
  height: 48px;
}

.zhuanti ul {
  overflow: hidden;
  padding: 10px 0 20px 10px;
  position: relative;
}
.zhuanti ul::before {
  content: '';
  position: absolute;
  background: #fff;
  width: 1px;
  height: 100%;
  left: 10px;
}
.zhuanti ul:after {
  content: '';
  position: absolute;
  background: #fff;
  width: 100%;
  height: 1px;
  bottom: 20px;
  left: 0;
}
.zhuanti li {
  float: left;
  width: 27.6%;
  border-bottom: #eee 1px solid;
  border-left: #eee 1px solid;
  overflow: hidden;
  padding: 20px;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.zhuanti li:hover {
  background: #fff;
  box-shadow: #ccc 1px 1px 8px;
}
.zhuanti li:hover img {
  transform: scale(1.05);
}
.ztpic {
  width: 100%;
  height: 100px;
  overflow: hidden;
  border-radius: 3px;
  background: #ccc;
  display: block;
}
.ztpic img {
  display: inline-block;
  width: 100%;
  min-height: 100%;
  height: auto;
  vertical-align: middle;
  transition: all 0.5s ease-out 0.1s;
}
.zhuanti li b {
  display: block;
  width: 100%;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  margin: 10px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.zhuanti li span {
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  font-size: 14px;
  height: 62px;
  display: block;
}
.readmore {
  margin: 10px 0 0 0;
  color: #096;
  display: block;
}
.readmore::before {
  content: '+';
  color: #063;
}
.ad img {
  width: 100%;
}
</style>
