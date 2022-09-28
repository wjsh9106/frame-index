<template>
  <div class="whitebg bloglist">
    <h2 class="htitle">{{ route.query.navTitle }}</h2>
    <ul v-if="articleList.length > 0">
      <li v-for="article in articleList" :key="article.id">
        <h3 class="blogtitle">
          <a
            href="JavaScript:void(0)"
            @click="showArticle(article.id)"
            :title="article.articleName"
            >{{ article.articleName }}</a
          >
        </h3>
        <span class="blogpic imgscale">
          <i
            ><a href="JavaScript:void(0)" @click="showArticle(article.id)">{{
              route.query.navTitle
            }}</a></i
          >
          <a
            href="JavaScript:void(0)"
            @click="showArticle(article.id)"
            title=""
          >
            <el-skeleton-item variant="image" style="width: 100%" />
            <img class="lazy" :src="article.articlePic" alt="" />
          </a>
        </span>
        <p class="blogtext">{{ article.articleDesc }}</p>
        <div class="bloginfo">
          <svg-icon icon="shijian" class="svg-container"></svg-icon>
          <span>{{ article.updateTime.substring(0, 10) }}</span>
          <svg-icon icon="browse" class="svg-container"></svg-icon>
          <span>16</span>
          <svg-icon icon="aixin" class="svg-container"></svg-icon>
          <span>0</span>
        </div>
        <a
          href="JavaScript:void(0)"
          @click="showArticle(article.id)"
          :title="article.articleName"
          class="viewmore"
          >阅读更多</a
        >
      </li>
    </ul>

    <div class="cy-my-page" style="height: 100%; width: 100%" v-else>
      <ul class="cy-my-comment-list">
        <div class="empty-hold-place">
          <div class="pet-pic"></div>
          <div class="empty-txt comment-empty-txt">没有查询到结果!</div>
          <div class="power-by-cy-txt">
            &nbsp;&nbsp;Powdered By ruoyi-plus&nbsp;&nbsp;
          </div>
        </div>
      </ul>
    </div>

    <div id="pageGroup" v-if="articleList.length > 0">
      <span class="pageinfo"
        >共<strong>1</strong>页<strong>2</strong>条记录</span
      >
      <a href="/blog/category/26?pageSize=10" class="homepage">首页</a>

      <a
        class="listpage curpage"
        href="/blog/category/26?pageNum=1&amp;pageSize=10"
        >1</a
      >

      <a href="/blog/category/26?pageNum=1&amp;pageSize=10" class="endpage"
        >尾页</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { articlePage } from '@/api/article'

const router = useRouter()
const route = useRoute()

const showArticle = (id) => {
  router.push({
    name: 'article',
    params: { articleId: id, nav: route.query.navTitle }
  })
}

const articleList = ref([])
const initArticlePage = async () => {
  const res = await articlePage(route.query.nav, 5)
  articleList.value = res.result
  // console.log('initArticlePage', res.result, res.pageInfo)
}

initArticlePage()
// route.push跳转页面不刷新，vue3 监听vuex里的数据变化
watch(
  router.currentRoute,
  (newVal, oldVal) => {
    // console.log('newVal, oldVal', newVal, oldVal)
    if (
      oldVal !== undefined &&
      newVal.path === oldVal.path &&
      newVal.fullPath !== oldVal.fullPath
    ) {
      initArticlePage()
    }
  },
  { immediate: true, deep: true }
)
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
.bloglist ul {
  padding: 10px 0 0;
}
.bloglist li {
  overflow: hidden;
  margin-bottom: 20px;
  border-bottom: #eee 1px dashed;
  padding-bottom: 20px;
  position: relative;
  min-height: 120px;
}
.bloglist li:hover .blogtitle a {
  color: #337ab7;
}
ul,
li {
  list-style: none;
}
.blogtitle {
  margin: 0 0 10px 0;
  font-size: 18px;
  overflow: hidden;
}
.bloglist li:hover .blogtitle a {
  color: #337ab7;
}
.blogtitle b {
  color: #f00;
}
.blogpic {
  float: left;
  width: 23.2%;
  margin-right: 20px;
  display: block;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
}
.blogpic i {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  font-style: normal;
  padding: 3px 5px;
  background: rgba(18, 182, 221, 0.8);
  font-size: 14px;
}
.blogpic i a {
  color: #fff;
}
a {
  text-decoration: none;
  color: #333;
}
.imgscale img {
  width: 100%;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  transition: all 0.5s;
}
.imgscale:hover img {
  transform: scale(1.1);
}
img {
  border: 0;
  display: block;
}
.blogtext {
  font-size: 14px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  margin-top: 20px;
  line-height: 1.5;
}
.bloginfo {
  margin-top: 20px;
  overflow: hidden;
  color: #999;
  line-height: 34px;
}
.bloginfo span {
  margin: 0 5px;
}
.bloginfo span a {
  color: #096;
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
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 fonteditor;
  font-size: 14px;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*没有内容*/
.cy-my-page {
  margin: 0 auto;
  position: relative;
  top: 0;
  left: 0;
  width: 630px;
  overflow: hidden;
  overflow-y: auto;
  display: block;
}

.cy-my-page .cy-my-comment-list {
  display: block;
  text-align: center;
  position: relative;
  top: calc(50% - 333px);
}
.cy-my-page > ul {
  display: inline-block;

  vertical-align: middle;
}
.cy-my-page .cy-my-comment-list .empty-hold-place {
  display: block;
  text-align: center;
  line-height: 16px;
  font-size: 16px;
  font-family: 'Microsoft YaHei';
  width: 345px;
  margin: 0 auto;
  padding-bottom: 50px;
}
.cy-my-page .cy-my-comment-list .empty-hold-place .pet-pic {
  width: 345px;
  height: 293px;
  background: url(http://ruoyi.wjshlnn.com/blog/jxhx/images/notice-empty.png);
  background-repeat: no-repeat;
}
.comment-empty-txt {
  color: #333;
  font-size: 22px;
  font-family: 'Comic Sans MS', cursive;
  margin-top: 20px;
}
.power-by-cy-txt {
  width: 345px;
  height: 16px;
  background-repeat: no-repeat;
  margin-top: 20px;
  color: #d2cccc;
  font-size: 14px;
}

#pageGroup {
  margin: 10px auto;
  font-size: 14px;
  text-align: center;
}
#pageGroup a {
  display: inline-block;
  color: #999;
  width: 30px;
  height: 30px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  margin: 0 4px;
}
#pageGroup .prepage,
#pageGroup .nextpage {
  text-indent: -99999em;
  opacity: 0.5;
}
#pageGroup .prepage.nopage,
#pageGroup .nextpage.nopage {
  opacity: 0.2;
}
#pageGroup a:hover,
#pageGroup .curpage {
  color: #409eff;
}
#pageGroup .pageinfo,
#pageGroup a.homepage,
#pageGroup a.endpage {
  display: none;
}
</style>
