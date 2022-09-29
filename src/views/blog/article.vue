<template>
  <div class="content_box whitebg">
    <h2 class="htitle">{{ articInfo.navName }}</h2>
    <h1 class="con_tilte">{{ articInfo.articleName }}</h1>
    <p class="bloginfo">
      <svg-icon icon="shijian" class="svg-container"></svg-icon>
      <span>{{ articInfo.updateTime }}</span>
      <svg-icon icon="browse" class="svg-container"></svg-icon>
      <span>38</span>
      <a style="color: #999" class="comment-link-a">
        <svg-icon icon="aixin" class="svg-container"></svg-icon>
        <span>2</span>
      </a>
    </p>
    <p class="con_info">
      <b>简介</b>
      {{ articInfo.articleDesc }}
    </p>
    <div class="con_text">
      <div class="articleDetail" ref="article">
        <!-- preview-class 为主题的样式类名，例如vuepress就是vuepress-markdown-body -->
        <v-md-preview-html
          :html="articInfo.contentHtml"
          preview-class="vuepress-markdown-body"
        ></v-md-preview-html>
      </div>
      <p></p>
      <!--<div class="nextinfo">
                    <p>上一篇：<a href="/xd/">返回列表</a></p>
                    <p>下一篇：<a href="/xd/2.html">网易博客关闭，何不从此开始潇洒行走江湖！</a></p>
                </div>-->

      <div
        class="readall_box"
        style="background: linear-gradient(rgba(255, 255, 255, 0), #fff)"
      >
        <div
          class="read_more_mask"
          style="background: linear-gradient(rgba(255, 255, 255, 0), #fff)"
        ></div>
        <a
          class="button"
          style="
            top: -25px;
            position: relative;
            font: 15px 'Microsoft YaHei', Arial, Helvetica, sans-serif;
          "
          >阅读全文</a
        >
      </div>

      <div class="thumbs-content">
        <span class="thumbs-button fa">
          <svg-icon icon="dianzan_kuai" style="margin-right: 3px"></svg-icon
          >点赞 <span id="loveCount">2</span></span
        >
      </div>
    </div>
  </div>
  <div class="whitebg gbook">
    <h2 class="htitle">文章评论</h2>
    <div>
      <el-input v-model="input" placeholder="昵称(必填)" />
      <el-input v-model="input" placeholder="QQ（可获取头像和昵称）" />
      <el-input v-model="input" placeholder="邮箱" />
      <el-input
        v-model="input"
        placeholder="我来说两句~"
        type="textarea"
        style="width: 98%; margin-top: 10px; margin-bottom: 10px"
      />
      <div style="text-align: right; margin-right: 15px">
        <el-button type="primary" round>发表评论</el-button>
      </div>
      <el-divider />
      <div style="padding-top: 20px">
        <div class="no-comment">暂无评论，快来占领宝座</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import $ from 'jquery'
import { ref, onMounted, nextTick } from 'vue'
import { articleDetails } from '@/api/article'
import elementResizeDetectorMaker from 'element-resize-detector'
import { useStore } from 'vuex'

const store = useStore()

// $(function () {
//   console.log('document.body.clientHeight1:', document.body.offsetHeight)
//   if ($('.articleDetail').height() >= 1200) {
//     $('.articleDetail').attr('style', 'height:1200px;overflow-y:hidden;')
//     $('.readall_box').show()
//   }

//   $('.readall_box a.button').click(function () {
//     $(this).parents().find('.articleDetail').attr('style', '')
//     $(this).parents('.readall_box').hide()
//   })
// })

onMounted(() => {
  watchArticleSize()

  // 展示文章全部
  $('.readall_box a.button').click(function () {
    $(this).parents().find('.articleDetail').attr('style', '')
    $(this).parents('.readall_box').hide()
  })
})

const article = ref(null)
let isShowAll = false
// 监控文章内容高度，大于1200隐藏一部分
const watchArticleSize = () => {
  const erd = elementResizeDetectorMaker()
  erd.listenTo(article.value, (element) => {
    // // 元素可见高度
    // console.log('element.clientHeight:', element.clientHeight)
    // console.log('element.offsetHeight:', element.offsetHeight)
    // // 元素可见+不可见高度
    // console.log('element.scrollHeight:', element.scrollHeight)

    // dom元素更新后执行
    nextTick(() => {
      if (element.scrollHeight >= 1200 && !isShowAll) {
        // $('.articleDetail').attr('style', 'height:1200px;overflow-y:hidden;')
        element.style.height = '1200px'
        element.style.overflowY = 'hidden'
        $('.readall_box').show()
        isShowAll = true
      }
    })
  })
}

const route = useRoute()

const articInfo = ref([])
const initArticle = async () => {
  const res = await articleDetails(route.params.articleId)
  articInfo.value = res.result
  // console.log('initArticle', res.result)
  store.commit('app/updateHeaderMenuActive', {
    navId: articInfo.value.navId,
    navName: articInfo.value.navName
  })
}

initArticle()
</script>
<style lang="scss" scoped>
.svg-container {
  //   padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  display: inline-block;
  margin: 0 5px;
}
.whitebg {
  background: #fff !important;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
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
.con_tilte {
  font-size: 22px;
  margin-top: 20px;
}
.bloginfo {
  margin-top: 20px;
  overflow: hidden;
  color: #999;
  line-height: 34px;
}
.bloginfo span {
  margin: 0 5px;
  color: #999;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 fonteditor;
  font-size: 14px;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.con_info {
  color: #888888;
  border: 1px solid #f3f3f3;
  padding: 10px;
  margin: 10px auto 0;
  line-height: 23px;
  background: none repeat 0 0 #f6f6f6;
}
.con_info b {
  margin-right: 10px;
  color: #000;
}
.con_text {
  line-height: 24px;
  margin-top: 20px;
}
.readall_box {
  position: relative;
  z-index: 9999;
  padding: 0 0 0px;
  margin-top: -268px;
  text-align: center;
}
.readall_box .read_more_mask {
  height: 268px;
  background: -moz-linear-gradient(
    bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  background: -webkit-gradient(
    linear,
    0 top,
    0 bottom,
    from(rgba(255, 255, 255, 0)),
    to(#fff)
  );
  background: -o-linear-gradient(
    bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
}
.readall_box a.button {
  cursor: pointer;
}
.con_text a {
  color: #09c;
  word-break: break-all;
}
.readall_box a.button {
  cursor: pointer;
}
.thumbs-content {
  width: 291px;
  margin: 30px auto 10px;
  text-align: center;
}
.thumbs-button {
  text-align: center;
  margin: 5px auto;
  padding: 0 20px;
  line-height: 36px;
  color: #fbfbfb;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s;
}
.thumbs-button {
  background-color: #444;
}

.commentGrid {
  margin-bottom: 20px;
}
::v-deep .el-input {
  width: 31.5%;
  float: left;
  margin-right: 15px;
}
::v-deep .el-textarea__inner {
  background: #f6f6f6;
  padding: 10px 15px;
}
.no-comment {
  padding: 5px;
  text-align: center;
  background: #f5f5f5;
  color: #bbb;
  border-radius: 4px;
  font: 15px 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}

.articleDetail p {
  font: 15px 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  color: #333;
}
</style>
