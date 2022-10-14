<template>
  <el-carousel
    :interval="4000"
    type="card"
    height="200px"
    v-if="banners.length > 0"
  >
    <el-carousel-item v-for="banner in banners" :key="banner.id">
      <img
        style="width: 100%"
        :src="banner.bannerImg"
        :alt="banner.bannerName"
      />
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

  <div class="zhuanti whitebg">
    <h2 class="htitle">特别推荐</h2>
    <el-row :gutter="12">
      <el-col :span="8" v-for="article in tuijianArticle" :key="article.id">
        <el-card shadow="hover">
          <a
            href="JavaScript:void(0)"
            @click="showArticle(article.id)"
            class="ztpic"
          >
            <img :src="article.articlePic" class="image" />
          </a>
          <div style="padding: 14px">
            <b>{{ article.articleName }}</b>
            <span>{{ article.articleDesc }}</span>
            <a
              href="JavaScript:void(0)"
              @click="showArticle(article.id)"
              class="readmore"
              >文章阅读</a
            >
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div
      style="width: 100%; text-align: center"
      v-if="tuijianArticle.length === 0"
    >
      <el-empty description="没有数据" />
    </div>
  </div>

  <div class="ad whitebg">
    <el-carousel height="126px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="http://ruoyi.wjshlnn.com/blog/jxhx/images/longad.jpg" />
      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="bloglist whitebg">
    <h2 class="htitle">时光轴</h2>
    <el-timeline>
      <el-timeline-item
        :timestamp="article.updateTime"
        placement="top"
        color="#0bbd87"
        v-for="article in sjArticle"
        :key="article.id"
      >
        <el-card shadow="hover">
          <div style="width: 30%; float: left">
            <a href="JavaScript:void(0)" @click="showArticle(article.id)">
              <img :src="article.articlePic" class="image" />
            </a>
          </div>
          <div class="content">
            <b>{{ article.articleName }}</b>
            <span>{{ article.articleDesc }}</span>
            <a
              href="JavaScript:void(0)"
              :title="article.articleName"
              class="viewmore"
              @click="showArticle(article.id)"
              >文章阅读</a
            >
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>

    <div style="width: 100%; text-align: center" v-if="sjArticle.length > 0">
      <div v-if="sjArticlePage.hasNext">
        <el-button
          type="success"
          plain
          @click="nextSjPage($event)"
          style="width: 100%"
          >加载更多</el-button
        >
      </div>
    </div>
    <div style="width: 100%; text-align: center" v-if="sjArticle.length === 0">
      <el-empty description="没有数据" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { articlePage } from '@/api/article'
import { useStore } from 'vuex'
import { ElNotification } from 'element-plus'
import { bannerInfo } from '@/api/banner'

const store = useStore()

const router = useRouter()
const showArticle = (id) => {
  router.push({
    name: 'article',
    params: { articleId: id }
  })
}

const tuijianArticle = ref([])
const sjArticle = ref([])
const sjArticlePage = ref({})
let current = 1
const initTjArticle = async () => {
  const res = await articlePage(store.getters.headerMenuActiveIndex, current)
  tuijianArticle.value = res.result
  sjArticle.value.push(...res.result)
  sjArticlePage.value = res.pageInfo
  // console.log('initTjArticle', res.result)
}

initTjArticle()

const nextSjPage = (event) => {
  // event.target  当前点击的元素
  // event.currentTarget 当前绑定事件的元素
  // event.currentTarget.innerHTML 当前绑定事件的元素的html
  // event.currentTarget.innerText 当前绑定事件的元素的文本
  if (sjArticlePage.value !== null && sjArticlePage.value.hasNext) {
    current += 1
    initTjArticle()
  } else {
    event.currentTarget.innerText = '没有更多数据了'
    ElNotification({
      title: '提示',
      message: '没有更多数据了！',
      type: 'info'
    })
  }
}

const banners = ref([])
const initBanner = async () => {
  const res = await bannerInfo()
  // console.log(res.result)
  banners.value = res.result
}

initBanner()
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

.ad img {
  width: 100%;
}

.el-col {
  margin-top: 15px;
}
.zhuanti .el-col img {
  display: inline-block;
  width: 100%;
  min-height: 100%;
  height: auto;
  vertical-align: middle;
  transition: all 0.5s ease-out 0.1s;
}
.zhuanti .el-col img:hover {
  transform: scale(1.05);
}
.zhuanti .el-col b {
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
.zhuanti .el-col span {
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
.ztpic {
  width: 100%;
  height: 100px;
  overflow: hidden;
  border-radius: 3px;
  background: #ccc;
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

.bloglist img {
  display: inline-block;
  width: 85%;
  min-height: 100%;
  height: auto;
  vertical-align: middle;
  transition: all 0.5s ease-out 0.1s;
}
.bloglist img:hover {
  transform: scale(1.05);
}
.bloglist b {
  display: block;
  width: 100%;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bloglist span {
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 4; // 数字代表文字需要显示几行
  font-size: 14px;
  height: 62px;
}
.bloglist .content {
  width: 65%;
  float: left;
  padding: 0px 10px 10px 14px;
}
a.viewmore {
  display: block;
  right: 10px;
  bottom: 20px;
  position: absolute;
  padding: 3px 10px;
  background: #12b7de;
  color: #fff;
  border-radius: 3px;
}
</style>
